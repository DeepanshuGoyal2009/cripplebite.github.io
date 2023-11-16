document.addEventListener('DOMContentLoaded', init);

function init() {
  const recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = function (event) {
    const result = event.results[event.results.length - 1][0].transcript.toLowerCase();
    document.getElementById('result').innerText = result;

    // Check for keywords and play corresponding audio
    playAudio(result);
  };

  recognition.onerror = function (event) {
    console.error('Speech recognition error:', event.error);
  };

  recognition.onend = function () {
    recognition.start(); // Restart recognition after it ends
  };

  recognition.start();
}

function playAudio(keyword) {
  const audio = new Audio();

  switch (keyword) {
    case 'samosa':
      audio.src = 'audio/40.mp3';
      break;
    case 'biryani':
      audio.src = 'audio/200.mp3';
      break;
    case 'vada pav':
      audio.src = 'audio/80.mp3';
      break;
    case 'pav bhaji':
      audio.src = 'audio/150.mp3';
      break;
    case 'chole bhature':
      audio.src = 'audio/180.mp3';
      break;
    case 'pani puri':
      audio.src = 'audio/50.mp3';
      break;
    case 'momos':
      audio.src = 'audio/100.mp3';
      break;
    case 'chowmein':
      audio.src = 'audio/150.mp3';
      break;
    case 'pizza':
      audio.src = 'audio/200.mp3';
      break;
    case 'burger':
      audio.src = 'audio/80.mp3';
      break;
    case 'yes':
      audio.src = 'audio/placed.mp3';
      break;
    case 'no':
      audio.src = 'audio/cancelled.mp3';
      break;
    default:
      return; // Do nothing if no match
  }

  audio.play();
}
