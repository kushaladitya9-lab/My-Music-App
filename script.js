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

// 21 Database Tracks
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

// LocalStorage Persistent State
let favorites = JSON.parse(localStorage.getItem('vibe_favorites')) || [];
let activeTab = 'all';
let songIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0 = off, 1 = repeat all, 2 = repeat one

// 1. Theme Switcher Logic
const themeDots = document.querySelectorAll('.theme-dot');
const savedTheme = localStorage.getItem('vibe_theme') || 'cyan';
document.documentElement.setAttribute('data-theme', savedTheme);
themeDots.forEach(dot => {
  if (dot.dataset.color === savedTheme) dot.classList.add('active');
  dot.addEventListener('click', () => {
    themeDots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    const chosenTheme = dot.dataset.color;
    document.documentElement.setAttribute('data-theme', chosenTheme);
    localStorage.setItem('vibe_theme', chosenTheme);
  });
});

// 2. Render Playlist with Filter & Favorites
function renderPlaylist() {
  playlistEl.innerHTML = '';
  const query = searchInput.value.toLowerCase().trim();

  let filtered = songs.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query);
    if (activeTab === 'liked') {
      return matchesSearch && favorites.includes(s.id);
    }
    return matchesSearch;
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

    // Track click
    item.addEventListener('click', (e) => {
      if (e.target.closest('.heart-btn')) return;
      songIndex = originalIndex;
      loadSong(songs[songIndex]);
      playSong();
    });

    // Heart click
    const itemHeartBtn = item.querySelector('.heart-btn');
    itemHeartBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(song.id);
    });

    playlistEl.appendChild(item);
  });
}

// 3. Favorites Toggle
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

// 4. Tab Switching
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

// 5. Full Screen Player Slide-Up / Down
openFullPlayerBtn.addEventListener('click', () => fullPlayer.classList.add('open'));
closeFullPlayerBtn.addEventListener('click', () => fullPlayer.classList.remove('open'));

// 6. Song Load
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

// 7. Play / Pause
function playSong() {
  isPlaying = true;
  miniPlayIcon.className = 'fa-solid fa-pause';
  fullPlayIcon.className = 'fa-solid fa-pause';
  vinylDisc.classList.add('spinning');
  audio.play();
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

// 8. Next / Prev Logic
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

// 9. Shuffle & Repeat Toggles
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

// 10. Timers & Seek Sliders Sync
function formatTime(sec) {
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

// Media Session API
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

// Initial Setup
renderPlaylist();
loadSong(songs[songIndex]);