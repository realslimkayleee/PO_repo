Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap("public\PO_logo_icon.png")
$width = $bmp.Width
$height = $bmp.Height
$cropWidth = [int]($width * 0.6)
$cropHeight = [int]($height * 0.6)
$x = [int](($width - $cropWidth) / 2)
$y = [int](($height - $cropHeight) / 2)
$rect = New-Object System.Drawing.Rectangle($x, $y, $cropWidth, $cropHeight)
$cropped = $bmp.Clone($rect, $bmp.PixelFormat)
$cropped.Save("public\PO_logo_icon_zoomed.png", [System.Drawing.Imaging.ImageFormat]::Png)
