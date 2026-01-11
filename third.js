let score = 0;
let target = document.getElementById("target");
let scoreText = document.getElementById("score");
let gameArea = document.getElementById("gameArea");

function moveTarget() {
  let x = Math.random() * (gameArea.clientWidth - 40);
  let y = Math.random() * (gameArea.clientHeight - 40);

  target.style.left = x + "px";
  target.style.top = y + "px";
}

target.addEventListener("click", () => {
  score++;
  scoreText.innerText = score;
  moveTarget();
});

// target har 1 second me move karega
setInterval(moveTarget, 1000);
function playSound() {
  let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  let oscillator = audioCtx.createOscillator();

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(500, audioCtx.currentTime);

  oscillator.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.1);
}
function shoot() {
  if (timeLeft <= 0) return;

  score++;
  scoreText.innerText = score;
  playSound();   // 🔊 sound
  moveTarget();
}