// Typewriter effect
const message = "Happy Birthday Mi gordita ";
let i = 0;
function typeWriter() {
  if (i < message.length) {
    document.getElementById("typewriter").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Floating hearts background
const canvas = document.getElementById("heartsCanvas");
const ctx = canvas.getContext("2d");
let hearts = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 100;
  this.size = Math.random() * 20 + 10;
  this.speed = Math.random() * 1 + 0.5;
  this.opacity = Math.random();
}

function drawHeart(x, y, size, opacity) {
  ctx.globalAlpha = opacity;
  ctx.fillStyle = "pink";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  ctx.fill();
  ctx.globalAlpha = 1;
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, index) => {
    heart.y -= heart.speed;
    drawHeart(heart.x, heart.y, heart.size, heart.opacity);
    if (heart.y + heart.size < 0) {
      hearts[index] = new Heart();
    }
  });
  requestAnimationFrame(animateHearts);
}

for (let i = 0; i < 30; i++) {
  hearts.push(new Heart());
}
animateHearts();

// Surprise button + confetti
document.getElementById("surpriseBtn").addEventListener("click", () => {
  document.getElementById("surprise").classList.remove("hidden");
  launchConfetti();
  playMusic();
});

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const conf = document.createElement("div");
    confetti.appendChild(conf);
  }
}

// Music toggle
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");
let isPlaying = false;

function playMusic() {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
    toggle.textContent = "🔊";
  }
}

toggle.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggle.textContent = "🔈";
  } else {
    music.play();
    toggle.textContent = "🔊";
  }
  isPlaying = !isPlaying;
});

// Parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  document.querySelector('.layer1').style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  document.querySelector('.layer2').style.transform = `translate(${x * 40}px, ${y * 40}px)`;
  document.querySelector('.layer3').style.transform = `translate(${x * 60}px, ${y * 60}px)`;
});


