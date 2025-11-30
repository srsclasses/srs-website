import express from 'express';
import cors from 'cors';
import { notices } from './data/notices.js';
import { currentAffairsData } from './data/currentAffairs.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Helper function to sort notices
const getSortedNotices = () => {
  return [...notices].sort((a, b) => {
    // Pinned notices first
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    // Then sort by date (newest first)
    return new Date(b.date) - new Date(a.date);
  });
};

// Routes
app.get('/api/notices', (req, res) => {
  const sortedNotices = getSortedNotices();
  res.json(sortedNotices);
});

app.get('/api/notices/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const notice = notices.find(n => n.id === id);
  if (notice) {
    res.json(notice);
  } else {
    res.status(404).json({ message: 'Notice not found' });
  }
});

app.get('/api/current-affairs', (req, res) => {
  // Sort by date descending
  const sortedData = [...currentAffairsData].sort((a, b) => new Date(b.date) - new Date(a.date));
  res.json(sortedData);
});

app.get('/api/current-affairs/latest', (req, res) => {
  const sortedData = [...currentAffairsData].sort((a, b) => new Date(b.date) - new Date(a.date));
  if (sortedData.length > 0) {
    res.json(sortedData[0]);
  } else {
    res.status(404).json({ message: 'No current affairs found' });
  }
});

app.get('/api/current-affairs/:date', (req, res) => {
  const date = req.params.date;
  const data = currentAffairsData.find(d => d.date === date);
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: 'Current affairs not found for this date' });
  }
});

// Home Page Data Endpoints
import { heroSlides, popularCourses, aboutSection } from './data/homeData.js';

app.get('/api/hero-slides', (req, res) => {
  res.json(heroSlides);
});

app.get('/api/popular-courses', (req, res) => {
  res.json(popularCourses);
});

app.get('/api/about-section', (req, res) => {
  res.json(aboutSection);
});

app.get('/', (req, res) => {
  res.send('SRS Classes Backend API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
