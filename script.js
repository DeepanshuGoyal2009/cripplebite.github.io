// Check if SpeechRecognition is supported
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        var transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
        var audio = new Audio();

        switch (transcript) {
            case 'samosa':
                audio.src = '/audios/40.mp3';
                break;
            case 'biryani':
                audio.src = '/audios/200.mp3';
                break;
            case 'vada pav':
                audio.src = '/audios/80.mp3';
                break;
            case 'pav bhaji':
                audio.src = '/audios/150.mp3';
                break;
            case 'chole bhature':
                audio.src = '/audios/180.mp3';
                break;
            case 'pani puri':
                audio.src = '/audios/50.mp3';
                break;
            case 'momos':
                audio.src = '/audios/100.mp3';
                break;
            case 'chowmein':
                audio.src = '/audios/150.mp3';
                break;
            case 'pizza':
                audio.src = '/audios/200.mp3';
                break;
            case 'burger':
                audio.src = '/audios/80.mp3';
                break;
            case 'yes':
                audio.src = '/audios/placed.mp3';
                break;
            case 'no':
                audio.src = '/audios/cancelled.mp3';
                break;
            default:
                console.log('Command not recognized');
        }

        audio.play();
    };

    recognition.start();
} else {
    console.log('Speech Recognition API not supported');
}
