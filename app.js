// Switch Tab Router
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
  
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Logic Kalkulator
const screen = document.getElementById('calcScreen');
function appendCalc(val) {
  if (screen.value === '0') screen.value = val;
  else screen.value += val;
}
function clearCalc() { screen.value = '0'; }
function calculateResult() {
  try { screen.value = eval(screen.value); } 
  catch { screen.value = 'Error'; }
}

// Logic Local Music Player
const audioInput = document.getElementById('audioInput');
const audioPlayer = document.getElementById('audioPlayer');
const songTitle = document.getElementById('songTitle');

audioInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    songTitle.innerText = file.name;
    audioPlayer.src = URL.createObjectURL(file);
    audioPlayer.play();
  }
});

// Logic Task List (Storage)
function addTask() {
  const input = document.getElementById('taskInput');
  if (!input.value.trim()) return;
  
  const li = document.createElement('li');
  li.innerHTML = `${input.value} <button onclick="this.parentElement.remove()" style="background:#ef4444; border:none; color:#fff; padding:4px 8px; border-radius:4px; cursor:pointer;">X</button>`;
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

// Logic Timer (Pomodoro)
let timer, timeLeft = 1500;
function updateTimerDisplay() {
  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;
  document.getElementById('timerDisplay').innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;
}
function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    if (timeLeft > 0) { timeLeft--; updateTimerDisplay(); }
    else clearInterval(timer);
  }, 1000);
}
function pauseTimer() { clearInterval(timer); }
function resetTimer() { clearInterval(timer); timeLeft = 1500; updateTimerDisplay(
      
); }
