const BACKEND = "http://localhost:5000";

export async function uploadVideo(file) {
  const formData = new FormData();
  formData.append("video", file);
  const res = await fetch(`${BACKEND}/upload`, {
    method: "POST",
    body: formData
  });
  return res.json();
}

export async function searchWord(word, transcriptFile) {
  const res = await fetch(`${BACKEND}/search?word=${word}&transcriptFile=${transcriptFile}`);
  return res.json();
}
