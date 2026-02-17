#!/bin/bash

# Download RPT Fonts from GitHub Repository
# This script downloads the official RPT fonts to the public/fonts directory

echo "Downloading RPT Fonts from GitHub..."

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Download Latin Regular
echo "Downloading RPT Latin Regular..."
curl -L "https://raw.githubusercontent.com/yasseralotaiibi/riyadh-metro-website/main/fonts/alfont_com_rpt-Regular.woff2" \
  -o public/fonts/rpt-latin-regular.woff2

# Download Latin Bold
echo "Downloading RPT Latin Bold..."
curl -L "https://raw.githubusercontent.com/yasseralotaiibi/riyadh-metro-website/main/fonts/alfont_com_rpt-Bold.woff2" \
  -o public/fonts/rpt-latin-bold.woff2

# Download Arabic Regular
echo "Downloading RPT Arabic Regular..."
curl -L "https://raw.githubusercontent.com/yasseralotaiibi/riyadh-metro-website/main/fonts/alfont_com_AlFont_com_-rpt-Regular.woff2" \
  -o public/fonts/rpt-arabic-regular.woff2

# Download Arabic Bold
echo "Downloading RPT Arabic Bold..."
curl -L "https://raw.githubusercontent.com/yasseralotaiibi/riyadh-metro-website/main/fonts/alfont_com_AlFont_com_-rpt-Bold.woff2" \
  -o public/fonts/rpt-arabic-bold.woff2

echo ""
echo "✅ All fonts downloaded successfully!"
echo "📁 Fonts location: public/fonts/"
echo ""
ls -lh public/fonts/*.woff2
