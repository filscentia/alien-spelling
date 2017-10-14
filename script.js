var synth = window.speechSynthesis;

var pitchValue = 1;
var rateValue = 0.8

var voice;

function populateVoiceList() {
  voice = synth.getVoices()[6];
}



function speak(inputTxt){
  if(inputTxt.value !== ''){
    console.log(inputTxt.value)
    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
   
    utterThis.voice = voice
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
  }
}
