# SRS Classes Backend

This is the backend server for the SRS Classes application.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node index.js
   ```

The server runs on port 5000 by default.

## API Endpoints

### Notices
- `GET /api/notices`: Get all notices
- `GET /api/notices/:id`: Get a specific notice

### Current Affairs
- `GET /api/current-affairs`: Get all current affairs
- `GET /api/current-affairs/latest`: Get latest current affairs
- `GET /api/current-affairs/:date`: Get current affairs for a specific date

### Home Page Data
- `GET /api/hero-slides`: Get hero carousel slides
- `GET /api/popular-courses`: Get popular courses
- `GET /api/about-section`: Get about section content
