Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap("public\PO_logo_icon.png")
$bgColor = $bmp.GetPixel(0, 0)
$bmp.MakeTransparent($bgColor)
$bmp.Save("public\PO_logo_icon_transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)
