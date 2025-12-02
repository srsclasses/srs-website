# SRS Classes - Educational Platform

Welcome to **SRS Classes**, a startup offering online and offline classes for BPSC and other competitive exams. This project provides a comprehensive educational platform with features for courses, notices, current affairs, and more.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with dark mode support
- **Dynamic Content**: All data managed through local data files
- **Course Management**: Display and manage BPSC courses
- **Notices System**: Keep students informed with important announcements
- **Current Affairs**: Daily updates on national and international news
- **Mentor Profiles**: Showcase experienced faculty
- **Top Performers**: Highlight successful students
- **Responsive Design**: Works perfectly on all devices

## 📁 Project Structure

```
srs-classes/
├── frontend/                   # Next.js application
│   ├── src/
│   │   ├── app/               # Pages (home, courses, notices, etc.)
│   │   ├── components/        # Reusable components
│   │   └── data/              # Local data files
│   │       ├── homeData.js    # Hero slides, courses, about section
│   │       ├── notices.js     # Notices data
│   │       └── currentAffairs.js # Current affairs data
│   ├── public/
│   │   └── images/            # Course images
│   ├── package.json
│   └── other config files
├── .gitignore
├── README.md
└── PROJECT_STATUS.md
```

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component
- **Routing**: Next.js App Router

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 🎨 Key Pages

- **Home** (`/`): Hero carousel, popular courses, recent notices, about section
- **Courses** (`/courses`): All available BPSC courses
- **Course Detail** (`/courses/[id]`): Individual course information
- **Notices** (`/notices`): All announcements and notices
- **Notice Detail** (`/notices/[id]`): Full notice content
- **Current Affairs** (`/current-affairs`): Daily news updates
- **About** (`/about`): Information about SRS Classes
- **Mentors** (`/mentors`): Faculty profiles
- **Top Performers** (`/top-performers`): Successful students

## 📝 Data Management

All data is stored locally in the `frontend/src/data/` directory:

### homeData.js
- Hero carousel slides
- Popular courses
- About section content

### notices.js
- Notice announcements
- Categories: Admission, Examination, Event, Academic, General

### currentAffairs.js
- National news
- International news
- State-specific news (Bihar)
- Organized by date

To update content, simply edit the relevant data file and restart the development server.

## 🎯 Features Breakdown

### Hero Section
- Auto-rotating carousel with 4 slides
- Smooth transitions and animations
- Responsive images

### Courses
- 6 BPSC courses with actual images
- Three action buttons: Info, Buy Online, Buy Offline
- Detailed course pages

### Notices
- Categorized notices
- "NEW" and "PINNED" badges
- Full-content view on detail pages
- Print and share functionality

### Current Affairs
- Date-wise organization
- Category filtering (National, International, State)
- Expandable detail views
- High-priority badges

## 🔧 Configuration

### Update Site Metadata
Edit `frontend/src/app/layout.js` to change:
- Site title
- Description
- Metadata

### Modify Colors
Update `frontend/tailwind.config.js` for theme customization.

### Add New Pages
Create new files in `frontend/src/app/` following Next.js App Router conventions.

## 📄 License

This project is proprietary and belongs to SRS Classes.

## 📞 Contact

For questions or support, please contact SRS Classes administration.

---

**Built with ❤️ by SRS Classes Team**
