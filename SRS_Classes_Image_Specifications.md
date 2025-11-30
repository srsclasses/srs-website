# SRS Classes - Image & Banner Specifications Guide

**Complete guide for all photos, banners, and graphics needed for the SRS Classes website**

*Date: November 27, 2025*

---

## 📋 Table of Contents

1. [Profile Photos](#1-profile-photos)
2. [Course Thumbnails/Banners](#2-course-thumbnailsbanners)
3. [Homepage Banners & Images](#3-homepage-banners--images)
4. [Logo & Branding](#4-logo--branding)
5. [Social Media / OG Images](#5-social-media--og-images)
6. [Quick Reference Table](#6-quick-reference-table)
7. [Priority Order](#7-priority-order)
8. [Image Optimization Tips](#8-image-optimization-tips)

---

## 👤 1. Profile Photos

### A. Mentor Profile Photos ⚠️ **ESSENTIAL**

**Specifications:**
- **Dimensions:** 400 × 400 pixels (Square)
- **Aspect Ratio:** 1:1 (Circle crop applied in UI)
- **Format:** JPG or PNG
- **Max File Size:** 200 KB per image
- **Quality:** High quality, professional headshots
- **Background:** Clean, solid color or slightly blurred

**📁 Location:** `/public/images/mentors/`

**Files needed (6 images):**
- `rajesh.jpg`
- `anita.jpg`
- `suresh.jpg`
- `priya-m.jpg`
- `amit-d.jpg`
- `kavita.jpg`

---

### B. Student/Top Performer Photos ⚠️ **ESSENTIAL**

**Specifications:**
- **Dimensions:** 400 × 400 pixels (Square)
- **Aspect Ratio:** 1:1 (Circle crop applied in UI)
- **Format:** JPG or PNG
- **Max File Size:** 200 KB per image
- **Quality:** Professional quality photos
- **Background:** Clean background preferred

**📁 Location:** `/public/images/students/`

**Files needed (4 images):**
- `rahul.jpg`
- `priya.jpg`
- `amit.jpg`
- `sneha.jpg`

---

## 🎓 2. Course Thumbnails/Banners

### Course Card Images ℹ️ **OPTIONAL**

**Specifications:**
- **Dimensions:** 800 × 400 pixels
- **Aspect Ratio:** 2:1
- **Display Height:** 192px (h-48 in Tailwind)
- **Format:** JPG or WebP (recommended)
- **Max File Size:** 150 KB per image
- **Current Status:** Using colored backgrounds (bg-blue-100, etc.)

**📁 Location:** `/public/images/courses/`

**Files needed (6 images):**
- `bpsc-hindi.jpg`
- `bpsc-english.jpg`
- `upsc.jpg`
- `daroga.jpg`
- `mathematics.jpg`
- `physics.jpg`

---

## 🏠 3. Homepage Banners & Images

### A. Hero Section Background ℹ️ **OPTIONAL**

**Specifications:**
- **Dimensions:** 1920 × 800 pixels
- **Format:** JPG or WebP
- **Max File Size:** 500 KB
- **Current Status:** Using gradient background
- **Location:** `/public/images/hero/hero-bg.jpg`

---

### B. About Section Image 💡 **RECOMMENDED**

**Specifications:**
- **Dimensions:** 1280 × 720 pixels
- **Aspect Ratio:** 16:9 (Video aspect ratio)
- **Format:** JPG or WebP
- **Max File Size:** 300 KB
- **Suggested Content:** Classroom photo, building exterior, or students studying
- **Location:** `/public/images/about/about-main.jpg`

---

## 🎨 4. Logo & Branding

### A. Site Logo ⚠️ **ESSENTIAL**

**Specifications:**
- **Dimensions:** 300 × 90 pixels (or 200 × 60 pixels)
- **Format:** PNG with transparency or SVG (preferred)
- **Max File Size:** 50 KB
- **Variations:** Full color logo for light backgrounds
- **Location:** `/public/images/logo.png` or `/public/logo.svg`

---

### B. Favicon ⚠️ **ESSENTIAL**

**Main Favicon:**
- **Dimensions:** 512 × 512 pixels
- **Format:** PNG or ICO

**Additional Sizes:**
- `favicon-16x16.png` (16 × 16 px)
- `favicon-32x32.png` (32 × 32 px)
- `apple-touch-icon.png` (180 × 180 px)

**Location:** `/public/favicon.ico` and `/public/`

---

## 📱 5. Social Media / OG Images

### Open Graph Image (for social sharing) 💡 **RECOMMENDED**

**Specifications:**
- **Dimensions:** 1200 × 630 pixels
- **Format:** JPG or PNG
- **Max File Size:** 500 KB
- **Content:** SRS Classes branding with tagline
- **Usage:** Facebook, Twitter, LinkedIn previews when sharing links
- **Location:** `/public/images/og-image.jpg`

---

## 📊 6. Quick Reference Table

| Image Type | Size (px) | Ratio | Format | Max Size | Quantity |
|------------|-----------|-------|--------|----------|----------|
| **Mentor Photos** | 400 × 400 | 1:1 | JPG/PNG | 200 KB | 6 |
| **Student Photos** | 400 × 400 | 1:1 | JPG/PNG | 200 KB | 4 |
| **Course Thumbnails** | 800 × 400 | 2:1 | JPG/WebP | 150 KB | 6 |
| **About Section** | 1280 × 720 | 16:9 | JPG/WebP | 300 KB | 1 |
| **Hero Background** | 1920 × 800 | — | JPG/WebP | 500 KB | 1 |
| **Logo** | 300 × 90 | — | PNG/SVG | 50 KB | 1 |
| **Favicon** | 512 × 512 | 1:1 | PNG | 20 KB | 1 |
| **OG Image** | 1200 × 630 | — | JPG | 500 KB | 1 |

---

## ✅ 7. Priority Order

### 🔴 HIGH PRIORITY (Essential - Must Have)

1. **Mentor photos** — 6 images (400×400 px)
2. **Student photos** — 4 images (400×400 px)
3. **Site Logo** — 1 image (300×90 px, PNG/SVG)
4. **Favicon** — 1 set of icons

### 🟡 MEDIUM PRIORITY (Enhances UX)

5. **About section image** — 1 image (1280×720 px)
6. **Course thumbnails** — 6 images (800×400 px)
7. **OG Image for social sharing** — 1 image (1200×630 px)

### 🟢 LOW PRIORITY (Optional Enhancements)

8. **Hero background image** — 1 image (1920×800 px)
9. **News thumbnail images** — Variable quantity

---

## 💡 8. Image Optimization Tips

### Best Practices for Web Images:

1. **Use WebP format** where possible for 30-50% better compression than JPG/PNG

2. **Compress all images** using tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (Mac) or FileOptimizer (Windows)

3. **Use descriptive filenames** (e.g., 'mentor-rajesh-kumar.jpg' not 'IMG_1234.jpg')

4. **Add alt text** for all images to improve accessibility and SEO

5. **Consider lazy loading** for below-the-fold images to improve page load speed

6. **Use responsive images** with srcset attribute for different screen sizes

7. **Maintain aspect ratios** to prevent layout shifts during page load

8. **Test on retina displays** to ensure quality on high-DPI screens

### ⚠️ Important Notes:

- All profile photos will be displayed in **circular frames**, so ensure faces are centered
- Course images currently use **colored backgrounds** as placeholders
- Current Affairs icons are **SVG-based** and don't need external images
- Ensure all images are **properly licensed** for commercial use
- Keep **backup copies** of original high-resolution images

---

## 📞 Support

For technical support or questions about these specifications, please contact your development team.

---

*Document generated on November 27, 2025*  
*SRS Classes - Image Specifications Guide*
