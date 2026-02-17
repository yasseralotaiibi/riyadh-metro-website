# RPT Font Installation Guide

This directory should contain the official RPT (Riyadh Public Transport) font files designed by Tarek Atrissi Design.

## Required Font Files

### RPT Arabic (Metro Riyadh Arabic Typeface)
- `RPTArabic-Regular.woff2` and `RPTArabic-Regular.woff`
- `RPTArabic-Medium.woff2` and `RPTArabic-Medium.woff`
- `RPTArabic-SemiBold.woff2` and `RPTArabic-SemiBold.woff`
- `RPTArabic-Bold.woff2` and `RPTArabic-Bold.woff`

### RPT Latin (Metro Riyadh Latin Typeface)
- `RPTLatin-Regular.woff2` and `RPTLatin-Regular.woff`
- `RPTLatin-Medium.woff2` and `RPTLatin-Medium.woff`
- `RPTLatin-SemiBold.woff2` and `RPTLatin-SemiBold.woff`
- `RPTLatin-Bold.woff2` and `RPTLatin-Bold.woff`

## How to Add Fonts

1. Obtain the official RPT font files from Riyadh Public Transport Authority or Tarek Atrissi Design
2. Convert the font files to WOFF2 and WOFF formats (if not already in these formats)
3. Place all font files in this `/public/fonts/` directory
4. The fonts will automatically be loaded by the application

## Font Characteristics

**RPT Arabic:**
- Inspired by Kufi calligraphic style
- Geometric construction
- Features slight inclination suggesting movement
- Custom designed for Riyadh Metro

**RPT Latin:**
- Matching Latin counterpart to the Arabic font
- Geometric construction matching the Arabic style
- Created to ensure bilingual harmony
- Custom designed for Riyadh Metro

## Fallback Fonts

Until the official RPT fonts are added, the application uses:
- **Arabic:** Cairo (geometric Kufi-style font from Google Fonts)
- **Latin:** Montserrat (geometric sans-serif from Google Fonts)

These fallbacks closely match the RPT font characteristics.

## Legal Notice

RPT Arabic and RPT Latin are proprietary fonts owned by Riyadh Public Transport Authority. Ensure you have proper licensing before using these fonts.
