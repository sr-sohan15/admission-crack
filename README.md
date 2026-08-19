## 📂 Project Directory Structure

```text
admission-crack/
├── dist/                          # Production build files
├── public/                        # Static assets
│   ├── favicon.svg
│   ├── icons.svg
│   └── munia.jpg                  # Special dedication image
├── src/
│   ├── Components/                # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── ForMyLove.jsx          # Dedication & full view photo modal
│   │   ├── MissionTrackerModal.jsx
│   │   ├── Navbar.jsx
│   │   └── QuestionCard.jsx
│   ├── Data/                      # Application dataset & question banks
│   │   └── Science/
│   │       ├── biology/           # Botany & Zoology chapter files & data
│   │       ├── Chemistry/         # 1st & 2nd paper chapter files & data
│   │       ├── Higher Mathematics/# 1st & 2nd paper chapter files & data
│   │       ├── physics/           # Physics 1st, 2nd paper chapters & physicsData
│   │       ├── scienceData.js
│   │       └── admissionData.js
│   ├── Layouts/                   # Page layouts and wrappers
│   │   └── RootLayout.jsx
│   ├── Pages/                     # Main application views/pages
│   │   ├── Science/
│   │   ├── Bookmarks.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── Home.jsx
│   │   ├── MockExam.jsx
│   │   ├── StreamSelection.jsx
│   │   └── SubjectHacks.jsx
│   ├── Routes/                    # App routing configuration
│   │   └── Routes.jsx
│   ├── App.css
│   ├── App.jsx                    # Main app component
│   ├── index.css                  # Tailwind CSS styles
│   └── main.jsx                   # React entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json                   # Dependencies and scripts
├── README.md                      # Project documentation
└── vite.config.js                 # Vite configuration
