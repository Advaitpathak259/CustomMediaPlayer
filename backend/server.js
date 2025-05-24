const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

// Serve video with range support (streaming)
app.get('/video', (req, res) => {
  const videoPath = path.join(__dirname, 'test.mp4');

  if (!fs.existsSync(videoPath)) {
    return res.status(404).send('Video not found');
  }

  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunkSize = end - start + 1;
    const file = fs.createReadStream(videoPath, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(200, head);
    fs.createReadStream(videoPath).pipe(res);
  }
});

// Serve transcript JSON
app.get('/transcript', (req, res) => {
  const transcriptPath = path.join(__dirname, 'transcripts', 'test.json');

  if (!fs.existsSync(transcriptPath)) {
    return res.status(404).send('Transcript not found');
  }

  res.sendFile(transcriptPath);
});

// Start server
app.listen(5000, () => {
  console.log('✅ Server running at http://localhost:5000');
});
