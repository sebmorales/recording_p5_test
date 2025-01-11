// press "r" to record
// press "s" to stop recording
// press "p" to play a random recording

let mic, recorder;
let soundsRecorded=[];
let numberOfSounds=0;
let recording=false; // we made this variable to avoid recording 2x a the same time

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  textAlign(CENTER, CENTER);

  // create an audio in
  mic = new p5.AudioIn();

  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);
  text("Press \"SPACE\" to record, let go to stop, press \"p\" to play random recording",width/2,height/2)

}
function draw(){
  if (keyIsPressed === true) {
    if(key==" "){
      if(!recording){
        recording=true;
        userStartAudio();
        // make sure user enabled the mic
        if (mic.enabled && recording==false) {
          recording=true;
          // record to our soundsRecorded[numberOfSounds]
          // this sound file will be used to
          // playback & save the recording
          soundsRecorded[numberOfSounds] = new p5.SoundFile();
          recorder.record(soundsRecorded[numberOfSounds]);
          //increase the number of sounds recorded by 1
          numberOfSounds++;
    
          background(255,0,0);
          text('Recording!', width/2, height/2);
        }
      }
    }
  } else {
    background(0,255,0);
    recorder.stop();
    recording=false;
  }
}

function keyPressed(){
  // if(key=="r"|| key=="R"){
  //   //record
  //   userStartAudio();
  //   // make sure user enabled the mic
  //   if (mic.enabled && recording==false) {
  //     recording=true;
  //     // record to our soundsRecorded[numberOfSounds]
  //     // this sound file will be used to
  //     // playback & save the recording
  //     soundsRecorded[numberOfSounds] = new p5.SoundFile();
  //     recorder.record(soundsRecorded[numberOfSounds]);
  //     //increase the number of sounds recorded by 1
  //     numberOfSounds++;

  //     background(255,0,0);
  //     text('Recording!', width/2, height/2);
  //   }
  // }
  // if(key=='s'||key=="S"){
  //   //stop Recording
  //   background(0,255,0);
  //   recorder.stop();
  //   recording=false;
  // }
  if(key=='p'||key=='P'){
   random(soundsRecorded).play(); // play the result!
  }
  
}