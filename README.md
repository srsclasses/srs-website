# The SRS Classes - Official Website

A modern, responsive educational platform for BPSC and competitive exam preparation built with Next.js 15 and React 19.

## 🌟 Features

- **6 Comprehensive Courses**: BPSC Hindi/English, Foundation batches, and free AEDO course
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Dynamic Routing**: Individual pages for each course with detailed information
- **Multiple Enrollment Options**: Online (YouTube/Google Play) and offline purchases
- **Contact Modal**: Integrated contact information for offline enrollments
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Image Optimization**: Next.js Image component for optimal performance

## 📁 Project Structure

```
srs-classes/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.js            # Home page
│   │   ├── about/             # About us page
│   │   ├── contact/           # Contact page
│   │   ├── courses/           # Courses listing & details
│   │   ├── notices/           # Notices system
│   │   ├── mentors/           # Mentor profiles
│   │   └── top-performers/    # Success stories
│   ├── components/            # Reusable components
│   │   ├── Header.jsx         # Site navigation
│   │   ├── Footer.jsx         # Site footer
│   │   ├── home/              # Home page sections
│   │   └── courses/           # Course components
│   └── data/                  # Static data files
│       ├── homeData.js        # Homepage content
│       ├── courses.js         # Course information
│       └── notices.js         # Notices & announcements
├── public/
│   └── images/                # Course images, logo, etc.
├── package.json
├── next.config.mjs
└── tailwind.config.mjs
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15.1.4
- **React**: 19.0.0
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.15.0
- **Language**: JavaScript (JSX)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation Steps

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open in browser**:
```
http://localhost:3000
```

### Production Build

1. **Create production build**:
```bash
npm run build
```

2. **Start production server**:
```bash
npm run start
```

## 🔧 Configuration

### Update Contact Information

**IMPORTANT**: Update the placeholder contact information in 3 files:

1. `src/components/courses/CourseDetailView.jsx` (lines 231-248)
2. `src/components/home/PopularCoursesSection.jsx` (lines 179-196)  
3. `src/app/courses/page.js` (lines 231-248)

Replace:
- Address: "The SRS Classes, Patna, Bihar" → Your actual address
- Phone: "+91 98765 43210" → Your actual number

### Update External Links

- **YouTube Playlist**: Free AEDO course links to YouTube (lines with `youtube.com`)
- **Google Play Store**: Paid courses link to app (lines with `play.google.com`)

### Modify Site Metadata

Edit `src/app/layout.js` to update:
- Site title
- Description
- Metadata for SEO

## 📄 Available Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, courses, features |
| `/courses` | All courses listing |
| `/courses/[id]` | Individual course details |
| `/courses/bpsc-hindi` | BPSC Hindi course (custom route) |
| `/courses/bpsc-english` | BPSC English course (custom route) |
| `/about` | About The SRS Classes |
| `/contact` | Contact information |
| `/not ices` | Announcements & notices |
| `/notices/[id]` | Individual notice details |
| `/mentors` | Faculty profiles |
| `/top-performers` | Success stories |

## 💾 Data Management

All course and content data is stored in `src/data/`:

### courses.js
Contains all course information:
- Title, description, pricing
- Features & topics
- Mentors & stats
- Availability (online/offline)

### homeData.js
Homepage content including:
- Popular courses
- Hero slides
- About section

### notices.js
Announcements and notices with:
- Category, priority
- Date, content
- Pin status

To update content, edit the relevant data file and restart the dev server.

## 🎨 Key Features

### Course Purchase Flow
- **Free Courses**: Direct link to YouTube playlist
- **Paid Courses (Online)**: Link to Google Play Store app
- **Paid Courses (Offline)**: Contact modal with address/phone

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Optimized images for all screen sizes

### Performance
- Next.js Image optimization
- Priority loading for above-fold content
- Lazy loading for below-fold content

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms

Compatible with any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Custom server with Node.js

## 📝 Development Tips

### Adding a New Course

1. Add course data to `src/data/courses.js`
2. Add course image to `public/images/`
3. Course will automatically appear on listings

### Customizing Colors

Edit `tailwind.config.mjs` to modify theme colors.

### Adding New Pages

Create new routes in `src/app/[page-name]/page.js`

## 🐛 Troubleshooting

### Dev server won't start
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

### Images not loading
- Ensure images are in `public/images/`
- Check image paths in data files
- Verify image names match exactly (case-sensitive)

## 📞 Support

For technical support or questions, contact the development team.

## 📄 License

© 2024 The SRS Classes. All rights reserved.

---

**Built with ❤️ for educational excellence**
