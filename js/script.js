const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papanSkor');
const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai;
let skor;

// Membuat random spawn tikus
function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

// membuat fungsi delay random tikus
function randomWaktu(min, max) {
  return Math.random() * (max - min) + min;
}

// Memunculkan Tikus
function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  const wrandom = randomWaktu(300, 900);
  tRandom.classList.add('muncul');

  // membuat animasi random tikus spawn
  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
      munculkanTikus();
    }
  }, wrandom);
}

// tombol mulai pada index.html
function mulai() {
  selesai = 0;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanTikus();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove('muncul');
  papanSkor.textContent = skor;
  this.style.transition = 'TOP 0';
  pop.play();
}

tikus.forEach((t) => {
  t.addEventListener('click', pukul);
});
