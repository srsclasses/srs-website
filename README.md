# SRS Classes - Full Stack Application

This is a full-stack application for SRS Classes, a startup offering online and offline classes for BPSC and other competitive exams.

## Project Structure

```
srs-classes/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/      # Next.js app router pages
│   │   ├── components/ # React components
│   │   └── data/     # Static data files
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
└── backend/          # Backend application (to be added)
```

## Frontend

The frontend is built with:
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **CSS** - Styling

### Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Frontend Features
- Home page with hero section, stats, mentors, and top performers
- Course listings and details
- Current affairs with state-wise news filtering
- About Us page
- Dynamic routing for mentors and students
- Responsive design with dark mode support

## Backend

The backend is built with Node.js and Express.

### Running the Backend

```bash
cd backend
npm install
npm start
```

The backend server runs on port 5000 (default).

### Features
- API endpoints for courses, notices, and more.
- Serves static data for the frontend.


## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. Clone the repository
2. Navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Contributing

This is a private educational project for SRS Classes.

## License

All rights reserved - SRS Classes
