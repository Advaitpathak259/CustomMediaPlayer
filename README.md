# Custom Media Player with Searchable Transcript

A React + Express web application that plays video with an interactive searchable transcript.  
Users can search for words spoken in the video and jump directly to their timestamps.

---

## Features

- Video player with standard controls
- Transcript generated from video audio (English language only)
- Searchable transcript: filter words in real time
- Click a word to jump to its timestamp in the video
- Clean, modern UI with dark theme and animations

---

## Tech Stack

- **Frontend:** React, Vite  
- **Backend:** Node.js, Express.js  
- **Transcription:** OpenAI Whisper (English-only)  
- **Styling:** CSS with animations  

---

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)
- Python 3 (for running transcription script)
- FFmpeg installed and accessible in your PATH (required by Whisper)

---

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/Advaitpathak259/CustomMediaPlayer.git
   cd CustomMediaPlayer



   cd backend
npm install

cd ../frontend
npm install 


Running the app
1. Generate transcript (English-only)
Put your video file (e.g., test.mp4) in the backend folder.

Run the transcription Python script:

bash
Copy code
python transcribe.py test.mp4 transcripts/test.json en
This generates test.json in the transcripts folder.

2. Start backend server
   
bash
Copy code
cd backend
npm start
4. Start frontend server
bash
Copy code
cd ../frontend
npm run dev
Open http://localhost:3000 in your browser to use the app.



CustomMediaPlayer/
├── backend/
│   ├── transcripts/          # Transcripts JSON files
│   ├── transcribe.py         # Python transcription script
│   ├── server.js             # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── styles.css        # Custom CSS styling
│   └── package.json
└── README.md   


Notes
Currently, only English transcription is supported for best accuracy.

For large video files, transcription may take some time.

You can replace the video source with your own files (update paths accordingly).

The backend serves both the video and transcript to the frontend.




