const timerDisplay = document.querySelector('#timerDisplay');
const playBtn = document.querySelector('#playBtn');
const buttonsEl = document.querySelectorAll('.selectBtn');
const endWords = document.querySelector('#endingWord')
const playImg = document.querySelector('#playImg')

const backVideo = document.querySelector('#backVideo')
const sound = document.querySelector('#sound')

let timeLeft = 60;
let timerId;

buttonsEl.forEach((buttonEl) => {
  buttonEl.addEventListener('click', setTimerTime);
});
function setTimerTime(e){
  timeLeft = e.target.value;
  showTimeInBlock();
}

function showTimeInBlock(){
  let minutes = Math.floor(timeLeft/60);
  let seconds = timeLeft%60;
  if(minutes<10){
    minutes='0'+minutes;
  }
  if(seconds<10){
    seconds='0'+seconds;
  }
  timerDisplay.textContent = `${minutes}:${seconds}`;
}
showTimeInBlock();

let timerGo = false;
playBtn.addEventListener('click', function(){
  if (!timerGo){
    playImg.src = 'pause-grey.png';
    StartTimer();
    timerId = setInterval(StartTimer, 1000);
    endWords.classList.remove('endShow');
    backVideo.play();
    sound.play();
  }
  else{
    playImg.src = 'play-grey.png';
    clearInterval(timerId)
    backVideo.pause();
    sound.pause();
  }
  timerGo = !timerGo;
})

function StartTimer(){
  showTimeInBlock();
  timeLeft--;
  if(timeLeft<0){
    clearInterval(timerId);
    timeLeft=0;
    endWords.classList.add('endShow');
    backVideo.pause();
    sound.pause();
  }
}