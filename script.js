// DOM Elements select karna
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const playIcon = document.getElementById('play-icon');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playlistEl = document.getElementById('playlist');

// 21 Songs Array Generate karna
const totalSongs = 21;
const songs = [];

for (let i = 1; i <= totalSongs; i++) {
  songs.push({
    id: i,
    name: `Track ${i}`,
    artist: "My Favorite Artist",
    src: `song${i}.mp3`,
    cover: "cover.jpg"
  });
}

let songIndex = 0;
let isPlaying = false;

// Playlist UI Render Function
function renderPlaylist() {
  playlistEl.innerHTML = '';
  songs.forEach((song, index) => {
    const item = document.createElement('div');
    item.classList.add('song-item');
    if (index === songIndex) item.classList.add('active');

    item.innerHTML = `
      <span class="track-index">${index + 1 < 10 ? '0' + (index + 1) : index + 1}</span>
      <div class="details">
        <h4>${song.name}</h4>
        <p>${song.artist}</p>
      </div>
      <i class="fa-solid ${index === songIndex && isPlaying ? 'fa-volume-high' : 'fa-play'} status-icon"></i>
    `;

    // Gaane par tap/click karne par load & play
    item.addEventListener('click', () => {
      songIndex = index;
      loadSong(songs[songIndex]);
      playSong();
    });

    playlistEl.appendChild(item);
  });
}

// Active Track Highlight & Icons Update
function updatePlaylistUI() {
  const items = document.querySelectorAll('.song-item');
  items.forEach((item, index) => {
    const icon = item.querySelector('.status-icon');
    if (index === songIndex) {
      item.classList.add('active');
      icon.className = `fa-solid ${isPlaying ? 'fa-volume-high' : 'fa-play'} status-icon`;
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      item.classList.remove('active');
      icon.className = 'fa-solid fa-play status-icon';
    }
  });
}

// Gaana Load Function
function loadSong(song) {
  title.innerText = song.name;
  artist.innerText = song.artist;
  audio.src = song.src;
  cover.src = song.cover;
  updatePlaylistUI();
}

// Play
function playSong() {
  isPlaying = true;
  playIcon.classList.remove('fa-play');
  playIcon.classList.add('fa-pause');
  audio.play();
  updatePlaylistUI();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playIcon.classList.remove('fa-pause');
  playIcon.classList.add('fa-play');
  audio.pause();
  updatePlaylistUI();
}

// Play / Pause Button Click
playBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Previous Song ⏮️
function prevSong() {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length - 1;
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song ⏭️
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) songIndex = 0;
  loadSong(songs[songIndex]);
  playSong();
}

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  prevSong();
});

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  nextSong();
});

// Gaana khatam hone par automatic agla gaana chalna
audio.addEventListener('ended', nextSong);

// Initial App Setup
renderPlaylist();
loadSong(songs[songIndex]);
// Register Service Worker for PWA App Install
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}