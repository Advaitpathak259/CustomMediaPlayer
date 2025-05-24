from faster_whisper import WhisperModel
import sys
import json

video_path = sys.argv[1]
output_path = sys.argv[2]

model = WhisperModel("base", compute_type="int8")

segments, _ = model.transcribe(video_path, word_timestamps=True)

words_output = []
for segment in segments:
    for word in segment.words:
        words_output.append({
            "word": word.word,
            "start": word.start,
            "end": word.end
        })

with open(output_path, "w", encoding="utf-8") as f:
    json.dump({ "words": words_output }, f, indent=2)

print(f"\n✅ Transcript with word-level timestamps saved to {output_path}")
