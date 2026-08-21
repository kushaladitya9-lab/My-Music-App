// DOM Elements
const audio = document.getElementById('audio');
const playlistEl = document.getElementById('playlist');
const searchInput = document.getElementById('search-input');
const tabAll = document.getElementById('tab-all');
const tabLiked = document.getElementById('tab-liked');
const countAll = document.getElementById('count-all');
const countLiked = document.getElementById('count-liked');

// Mini Player Elements
const miniPlayer = document.getElementById('mini-player');
const openFullPlayerBtn = document.getElementById('open-full-player');
const miniTitle = document.getElementById('mini-title');
const miniArtist = document.getElementById('mini-artist');
const miniCover = document.getElementById('mini-cover');
const miniPlayBtn = document.getElementById('mini-play');
const miniPlayIcon = document.getElementById('mini-play-icon');
const miniHeartBtn = document.getElementById('mini-heart-btn');
const miniProgressFill = document.getElementById('mini-progress-fill');

// Full Player Elements
const fullPlayer = document.getElementById('full-player');
const closeFullPlayerBtn = document.getElementById('close-full-player');
const vinylDisc = document.getElementById('vinyl-disc');
const fullCover = document.getElementById('full-cover');
const fullTitle = document.getElementById('full-title');
const fullArtist = document.getElementById('full-artist');
const fullHeartBtn = document.getElementById('full-heart-btn');
const fullProgress = document.getElementById('full-progress');
const fullCurrentTime = document.getElementById('full-current-time');
const fullDuration = document.getElementById('full-duration');
const fullPlayBtn = document.getElementById('full-play');
const fullPlayIcon = document.getElementById('full-play-icon');
const fullPrevBtn = document.getElementById('full-prev');
const fullNextBtn = document.getElementById('full-next');
const fullShuffleBtn = document.getElementById('full-shuffle');
const fullRepeatBtn = document.getElementById('full-repeat');

// 42 Local Tracks
const songs = [
  { id: 1, name: "Chala Jata Hoon", artist: "Kishore Kumar", src: "song1.mp3", cover: "cover.jpg" },
  { id: 2, name: "Tera Mera Pyar Amar", artist: "Lata Mangeshkar", src: "song2.mp3", cover: "cover.jpg" },
  { id: 3, name: "Acha Lagta Hai", artist: "My Favorite Track", src: "song3.mp3", cover: "cover.jpg" },
  { id: 4, name: "Iss Tarah", artist: "My Favorite Track", src: "song4.mp3", cover: "cover.jpg" },
  { id: 5, name: "Mere Sapno Ki Rani", artist: "Kishore Kumar", src: "song5.mp3", cover: "cover.jpg" },
  { id: 6, name: "Ishq Risk", artist: "Rahat Fateh Ali Khan", src: "song6.mp3", cover: "cover.jpg" },
  { id: 7, name: "Give It Up To Me", artist: "Shakira", src: "song7.mp3", cover: "cover.jpg" },
  { id: 8, name: "Kabhi Jo Badal Barse", artist: "Arijit Singh", src: "song8.mp3", cover: "cover.jpg" },
  { id: 9, name: "Dekhte Dekhte", artist: "Atif Aslam", src: "song9.mp3", cover: "cover.jpg" },
  { id: 10, name: "Be Intehaan", artist: "Atif Aslam", src: "song10.mp3", cover: "cover.jpg" },
  { id: 11, name: "Haareya", artist: "Arijit Singh", src: "song11.mp3", cover: "cover.jpg" },
  { id: 12, name: "Tum Jo Aaye", artist: "Rahat Fateh Ali Khan & Tulsi Kumar", src: "song12.mp3", cover: "cover.jpg" },
  { id: 13, name: "Nit Khair Manga", artist: "Rahat Fateh Ali Khan", src: "song13.mp3", cover: "cover.jpg" },
  { id: 14, name: "Hero Splendor", artist: "My Favorite Track", src: "song14.mp3", cover: "cover.jpg" },
  { id: 15, name: "Tum Tak", artist: "Javed Ali", src: "song15.mp3", cover: "cover.jpg" },
  { id: 16, name: "Likhe Jo Khat Tujhe", artist: "Mohammed Rafi", src: "song16.mp3", cover: "cover.jpg" },
  { id: 17, name: "Pehli Nazar Mein", artist: "Atif Aslam", src: "song17.mp3", cover: "cover.jpg" },
  { id: 18, name: "Dekha Hazaro Dafaa", artist: "Arijit Singh", src: "song18.mp3", cover: "cover.jpg" },
  { id: 19, name: "Bol Na Halke Halke", artist: "Rahat Fateh Ali Khan", src: "song19.mp3", cover: "cover.jpg" },
  { id: 20, name: "Ishq Mubarak", artist: "Arijit Singh", src: "song20.mp3", cover: "cover.jpg" },
  { id: 21, name: "Baarish", artist: "Ash King", src: "song21.mp3", cover: "cover.jpg" },
  { id: 22, name: "Aaja Sanam Madhur Chandni Mein", artist: "Manna Dey & Lata Mangeshkar", src: "song22.mp3", cover: "cover.jpg" },
  { id: 23, name: "Aashiq Tera", artist: "Altamash Faridi", src: "song23.mp3", cover: "cover.jpg" },
  { id: 24, name: "Samjho Na", artist: "Aditya Rikhari", src: "song24.mp3", cover: "cover.jpg" },
  { id: 25, name: "Shree Hari Stotram", artist: "Devotional", src: "song25.mp3", cover: "cover.jpg" },
  { id: 26, name: "Pal Pal Dil ke Paas", artist: "Kishore Kumar", src: "song26.mp3", cover: "cover.jpg" },
  { id: 27, name: "Dil Ka Jo Haal Hai", artist: "Abhijeet Bhattacharya", src: "song27.mp3", cover: "cover.jpg" },
  { id: 28, name: "Wo Ladki Hai Kahan", artist: "Shaan & Kavita Krishnamurthy", src: "song28.mp3", cover: "cover.jpg" },
  { id: 29, name: "Itna Na Mujhse Tu Pyar Badha", artist: "Talat Mahmood & Lata Mangeshkar", src: "song29.mp3", cover: "cover.jpg" },
  { id: 30, name: "Jahan Mein Aesa Kaun Hai", artist: "Asha Bhosle", src: "song30.mp3", cover: "cover.jpg" },
  { id: 31, name: "Jiya Dhadak Dhadak Jaye", artist: "Rahat Fateh Ali Khan", src: "song31.mp3", cover: "cover.jpg" },
  { id: 32, name: "Kiston", artist: "Jubin Nautiyal", src: "song32.mp3", cover: "cover.jpg" },
  { id: 33, name: "Maan Mera Old", artist: "Gajendra Verma", src: "song33.mp3", cover: "cover.jpg" },
  { id: 34, name: "Maan Mera New", artist: "Gajendra Verma", src: "song34.mp3", cover: "cover.jpg" },
  { id: 35, name: "Monta Re", artist: "Swanand Kirkire & Amitabh Bhattacharya", src: "song35.mp3", cover: "cover.jpg" },
  { id: 36, name: "SANAM :- Chala Jata Hoon", artist: "SANAM", src: "song36.mp3", cover: "cover.jpg" },
  { id: 37, name: "Tu Tu Hai Wahi", artist: "Kishore Kumar & Asha Bhosle", src: "song37.mp3", cover: "cover.jpg" },
  { id: 38, name: "Uljhan", artist: "My Favorite Track", src: "song38.mp3", cover: "cover.jpg" },
  { id: 39, name: "Ye Tune Kya Kiya", artist: "Javed Bashir", src: "song39.mp3", cover: "cover.jpg" },
  { id: 40, name: "Yeh Fitoor Mera", artist: "Arijit Singh", src: "song40.mp3", cover: "cover.jpg" },
  { id: 41, name: "Yeh Parda Hata do", artist: "Asha Bhosle & Mohammed Rafi", src: "song41.mp3", cover: "cover.jpg" },
  { id: 42, name: "Mere Naam Tu", artist: "Abhay Jodhpurkar", src: "song42.mp3", cover: "cover.jpg" }
];

let favorites = JSON.parse(localStorage.getItem('vibe_favorites')) || [];
let activeTab = 'all';
let songIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0;

// Theme Switcher
const themeDots = document.querySelectorAll('.theme-dot');
const savedTheme = localStorage.getItem('vibe_theme') || 'cyan';
document.documentElement.setAttribute('data-theme', savedTheme);
themeDots.forEach(dot => {
  if (dot.dataset.color === savedTheme) dot.classList.add('active');
  dot.addEventListener('click', () => {
    themeDots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    const chosen = dot.dataset.color;
    document.documentElement.setAttribute('data-theme', chosen);
    localStorage.setItem('vibe_theme', chosen);
  });
});

// Render Playlist UI
function renderPlaylist() {
  playlistEl.innerHTML = '';
  const query = searchInput.value.toLowerCase().trim();

  let filtered = songs.filter(s => {
    const matches = s.name.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query);
    if (activeTab === 'liked') {
      return matches && favorites.includes(s.id);
    }
    return matches;
  });

  countAll.innerText = songs.length;
  countLiked.innerText = favorites.length;

  if (filtered.length === 0) {
    playlistEl.innerHTML = `<p style="text-align:center; color:#6c6d7a; padding:30px; font-size:13px;">No tracks found</p>`;
    return;
  }

  filtered.forEach(song => {
    const originalIndex = songs.findIndex(s => s.id === song.id);
    const isLiked = favorites.includes(song.id);

    const item = document.createElement('div');
    item.classList.add('song-item');
    if (originalIndex === songIndex) item.classList.add('active');

    item.innerHTML = `
      <span class="track-index">${song.id < 10 ? '0' + song.id : song.id}</span>
      <div class="details">
        <h4>${song.name}</h4>
        <p>${song.artist}</p>
      </div>
      <div class="song-item-actions">
        <button class="heart-btn ${isLiked ? 'liked' : ''}" data-id="${song.id}">
          <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
        <i class="fa-solid ${originalIndex === songIndex && isPlaying ? 'fa-volume-high' : 'fa-play'} status-icon"></i>
      </div>
    `;

    item.addEventListener('click', (e) => {
      if (e.target.closest('.heart-btn')) return;
      songIndex = originalIndex;
      loadSong(songs[songIndex]);
      playSong();
    });

    const heartBtn = item.querySelector('.heart-btn');
    heartBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(song.id);
    });

    playlistEl.appendChild(item);
  });
}

// Favorites Logic
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('vibe_favorites', JSON.stringify(favorites));
  updateHeartStates();
  renderPlaylist();
}

function updateHeartStates() {
  const currentSong = songs[songIndex];
  const isLiked = favorites.includes(currentSong.id);
  [miniHeartBtn, fullHeartBtn].forEach(btn => {
    if (isLiked) {
      btn.classList.add('liked');
      btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    } else {
      btn.classList.remove('liked');
      btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
  });
}

miniHeartBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleFavorite(songs[songIndex].id);
});

fullHeartBtn.addEventListener('click', () => {
  toggleFavorite(songs[songIndex].id);
});

// Tab Handlers
tabAll.addEventListener('click', () => {
  activeTab = 'all';
  tabAll.classList.add('active');
  tabLiked.classList.remove('active');
  renderPlaylist();
});

tabLiked.addEventListener('click', () => {
  activeTab = 'liked';
  tabLiked.classList.add('active');
  tabAll.classList.remove('active');
  renderPlaylist();
});

searchInput.addEventListener('input', renderPlaylist);

// Full Player Modal
openFullPlayerBtn.addEventListener('click', () => fullPlayer.classList.add('open'));
closeFullPlayerBtn.addEventListener('click', () => fullPlayer.classList.remove('open'));

// Load & Play Functions
function loadSong(song) {
  miniTitle.innerText = song.name;
  miniArtist.innerText = song.artist;
  miniCover.src = song.cover;

  fullTitle.innerText = song.name;
  fullArtist.innerText = song.artist;
  fullCover.src = song.cover;

  audio.src = song.src;
  updateHeartStates();
  renderPlaylist();
  updateMediaSession(song);
}

function playSong() {
  isPlaying = true;
  miniPlayIcon.className = 'fa-solid fa-pause';
  fullPlayIcon.className = 'fa-solid fa-pause';
  vinylDisc.classList.add('spinning');
  audio.play().catch(e => console.log('Playback:', e));
  renderPlaylist();
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
}

function pauseSong() {
  isPlaying = false;
  miniPlayIcon.className = 'fa-solid fa-play';
  fullPlayIcon.className = 'fa-solid fa-play';
  vinylDisc.classList.remove('spinning');
  audio.pause();
  renderPlaylist();
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
}

function togglePlay() {
  isPlaying ? pauseSong() : playSong();
}

miniPlayBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  togglePlay();
});
fullPlayBtn.addEventListener('click', togglePlay);

function nextSong() {
  if (repeatMode === 2) {
    audio.currentTime = 0;
    playSong();
    return;
  }

  if (isShuffle) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === songIndex && songs.length > 1);
    songIndex = randomIndex;
  } else {
    songIndex++;
    if (songIndex > songs.length - 1) {
      if (repeatMode === 0) {
        pauseSong();
        songIndex = 0;
        loadSong(songs[songIndex]);
        return;
      }
      songIndex = 0;
    }
  }

  loadSong(songs[songIndex]);
  playSong();
}

function prevSong() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  songIndex--;
  if (songIndex < 0) songIndex = songs.length - 1;
  loadSong(songs[songIndex]);
  playSong();
}

fullNextBtn.addEventListener('click', nextSong);
fullPrevBtn.addEventListener('click', prevSong);

fullShuffleBtn.addEventListener('click', () => {
  isShuffle = !isShuffle;
  fullShuffleBtn.classList.toggle('active', isShuffle);
});

fullRepeatBtn.addEventListener('click', () => {
  repeatMode = (repeatMode + 1) % 3;
  if (repeatMode === 0) {
    fullRepeatBtn.className = 'toggle-btn';
    fullRepeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
  } else if (repeatMode === 1) {
    fullRepeatBtn.className = 'toggle-btn active';
    fullRepeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
  } else if (repeatMode === 2) {
    fullRepeatBtn.className = 'toggle-btn active';
    fullRepeatBtn.innerHTML = '<span style="font-size:12px; font-weight:bold;">🔂</span>';
  }
});

// Progress Bar & Timer Sync
function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    fullProgress.value = percent;
    miniProgressFill.style.width = `${percent}%`;
    fullCurrentTime.innerText = formatTime(audio.currentTime);
    fullDuration.innerText = formatTime(audio.duration);
  }
});

fullProgress.addEventListener('input', () => {
  const seekTime = (fullProgress.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

audio.addEventListener('ended', nextSong);

function updateMediaSession(song) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.name,
      artist: song.artist,
      album: 'Vibe Music Collection',
      artwork: [{ src: song.cover, sizes: '512x512', type: 'image/jpeg' }]
    });
    navigator.mediaSession.setActionHandler('play', playSong);
    navigator.mediaSession.setActionHandler('pause', pauseSong);
    navigator.mediaSession.setActionHandler('previoustrack', prevSong);
    navigator.mediaSession.setActionHandler('nexttrack', nextSong);
  }
}

// Service Worker for Offline / PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}

// Initial Run
renderPlaylist();
loadSong(songs[songIndex]);