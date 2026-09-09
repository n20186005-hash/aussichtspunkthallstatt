# Compress public/gallery/*.jpg: longest edge <= 1600px, JPEG quality 80, EXIF orientation normalized.
# Pure System.Drawing (no external packages). Writes via temp file + atomic move.
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$src = Join-Path $PSScriptRoot '..\public\gallery'
$maxEdge = 1600
$quality = 80

$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$quality)

function Save-Jpeg([System.Drawing.Image]$image, [string]$outPath) {
  $ms = New-Object System.IO.MemoryStream
  $image.Save($ms, $enc, $ep)
  [System.IO.File]::WriteAllBytes($outPath, $ms.ToArray())
  $ms.Dispose()
}

$files = Get-ChildItem -LiteralPath $src -Filter *.jpg -File
$beforeMB = ($files | Measure-Object Length -Sum).Sum / 1MB
$count = 0
foreach ($file in $files) {
  $img = [System.Drawing.Image]::FromFile($file.FullName)
  try {
    # Normalize EXIF orientation (0x0112)
    try {
      $item = $img.GetPropertyItem(274)
      if ($item) {
        $v = [System.BitConverter]::ToInt32($item.Value, 0)
        switch ($v) {
          2 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
          3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
          4 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipY) }
          5 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
          6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
          7 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
          8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
        }
        $img.RemovePropertyItem(274)
      }
    } catch { }

    $w = $img.Width; $h = $img.Height
    $scale = [Math]::Min(1.0, $maxEdge / [Math]::Max($w, $h))
    $nw = [Math]::Max(1, [int][Math]::Round($w * $scale))
    $nh = [Math]::Max(1, [int][Math]::Round($h * $scale))

    $bmp = New-Object System.Drawing.Bitmap($nw, $nh)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $nw, $nh)),
      (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $img.Dispose()

    $tmp = $file.FullName + ".tmp.jpg"
    Save-Jpeg $bmp $tmp
    $bmp.Dispose()
    [System.IO.File]::Delete($file.FullName)
    [System.IO.File]::Move($tmp, $file.FullName)
    $count++
    Write-Output ("ok  {0}  {1}x{2}" -f $file.Name, $nw, $nh)
  } catch {
    Write-Output ("FAIL {0}: {1}" -f $file.Name, $_.Exception.Message)
    if ($img) { $img.Dispose() }
  }
}

$afterMB = (Get-ChildItem -LiteralPath $src -Filter *.jpg -File | Measure-Object Length -Sum).Sum / 1MB
Write-Output ("DONE {0} files compressed. Size {1:N1} MB -> {2:N1} MB (-{3:N1}%)" -f $count, $beforeMB, $afterMB, (100 - ($afterMB / $beforeMB * 100)))
