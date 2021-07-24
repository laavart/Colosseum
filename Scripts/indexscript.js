const speechRecognition = window.webkitSpeechRecognition;
const recog = new speechRecognition();

function Speak(TEXT) {
    const utter = new SpeechSynthesisUtterance();
    utter.text = TEXT;
    utter.rate=0.85;
    utter.lang='en-US';
    window.speechSynthesis.speak(utter);
}

Speak("Hello! Gamers,");
Speak("Welcome to Colosseum ");
Speak("say go to begin");

function startListening() {
    recog.continuous = true;//
    recog.start();
    recog.onstart = function (){
        console.log("Started Listenig..")
    };
    recog.onresult = function (data){
        let text = data.results[0][0].transcript;
        text = text.toLowerCase();
        if (text.includes("go")) {
            window.location.replace("Pages/home.html");
        }
        else Speak("Sorry I can't get you!");
    };
}

startListening();