//Global Variables
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [2, 5, 4, 3, 6, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var numMistakes = 0;
var myClock;
var mySeconds = 60;

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    pattern = createPattern();
    numMistakes = 0;
    clueHoldTime = 1000;
    mySeconds = 60;
    resetTimer();
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
  
}

function stopGame(){
    //initialize game variables
    resetTimer();
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 260,
  2: 330,
  3: 400,
  4: 470,
  5: 570,
  6: 700
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  console.log(clueHoldTime)
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    
  }
  clueHoldTime = clueHoldTime - 100;
  resetTimer();
  startTimer();
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if (btn== pattern[guessCounter]){
    if (guessCounter == progress){
      console.log(guessCounter)
      console.log(progress)
      if (progress == pattern.length-1){
        
        console.log(progress)
        winGame();
      }
      else{
        progress+=1;
        playClueSequence();
      }    
    }    
    else{
      guessCounter+=1;
    }
  }
    else{
    numMistakes+=1;
    if (numMistakes>2){
      loseGame();
    }
  }
}

function createPattern(){
  let patternArray = new Array(8)
  for (var i = 0; i < patternArray.length ; i++){
    patternArray[i] = Math.floor(Math.random()*6) +1
  }
  console.log(patternArray)
  return patternArray
}



function startTimer(){
  mySeconds = 60;
  myClock = setInterval(countdown,1000)
}

function resetTimer(){
  clearInterval(myClock);
}
function countdown(){
  document.getElementById("time").innerHTML = mySeconds;
  console.log(mySeconds);
  if (mySeconds == 0){
    loseGame();
  }
  mySeconds--
}

