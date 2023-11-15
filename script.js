// Create a new SpeechRecognition object
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  const words = {
    'Samosa': 'audios/40.mp3',
    'Biryani': 'audios/200.mp3',
    'Vada Pav': 'audios/80.mp3',
    'Pav Bhaji': 'audios/150.mp3',
    'Chole Bhature': 'audios/180.mp3',
    'Pani Puri': 'audios/50.mp3',
    'Momos': 'audios/100.mp3',
    'Chowmein': 'audios/150.mp3',
    'Pizza': 'audios/200.mp3',
    'Burger': 'audios/80.mp3',
    'Yes': 'audios/placed.mp3',
    'No': 'audios/cancelled.mp3'
  };

  Object.keys(words).forEach(word => {
    if (transcript.includes(word)) {
      const audio = new Audio(words[word]);
      audio.play();
    }
  });
});

recognition.start();
