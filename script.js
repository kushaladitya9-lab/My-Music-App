// DOM Elements
const audio = document.getElementById('audio');
const playlistEl = document.getElementById('playlist');
const searchInput = document.getElementById('search-input');
const searchOnlineBtn = document.getElementById('search-online-btn');
const tabAll = document.getElementById('tab-all');
const tabLiked = document.getElementById('tab-liked');
const tabOnline = document.getElementById('tab-online');
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
const localSongs = [
  { id: "local-1", name: "Chala Jata Hoon", artist: "My Favorite Artist", src: "song1.mp3", cover: "cover.jpg" },
  { id: "local-2", name: "Tera Mera Pyar Amar", artist: "My Favorite Artist", src: "song2.mp3", cover: "cover.jpg" },
  { id: "local-3", name: "Acha Lagta Hai", artist: "My Favorite Artist", src: "song3.mp3", cover: "cover.jpg" },
  { id: "local-4", name: "Iss Tarah", artist: "My Favorite Artist", src: "song4.mp3", cover: "cover.jpg" },
  { id: "local-5", name: "Mere Sapno Ki Rani", artist: "My Favorite Artist", src: "song5.mp3", cover: "cover.jpg" },
  { id: "local-6", name: "Ishq Risk", artist: "My Favorite Artist", src: "song6.mp3", cover: "cover.jpg" },
  { id: "local-7", name: "Give It Up To Me", artist: "My Favorite Artist", src: "song7.mp3", cover: "cover.jpg" },
  { id: "local-8", name: "Kabhi Jo Badal Barse", artist: "My Favorite Artist", src: "song8.mp3", cover: "cover.jpg" },
  { id: "local-9", name: "Dekhte Dekhte", artist: "My Favorite Artist", src: "song9.mp3", cover: "cover.jpg" },
  { id: "local-10", name: "Be Intehaan", artist: "My Favorite Artist", src: "song10.mp3", cover: "cover.jpg" },
  { id: "local-11", name: "Haareya", artist: "My Favorite Artist", src: "song11.mp3", cover: "cover.jpg" },
  { id: "local-12", name: "Tum Jo Aaye", artist: "My Favorite Artist", src: "song12.mp3", cover: "cover.jpg" },
  { id: "local-13", name: "Nit Khair Manga", artist: "My Favorite Artist", src: "song13.mp3", cover: "cover.jpg" },
  { id: "local-14", name: "Hero Splendor", artist: "My Favorite Artist", src: "song14.mp3", cover: "cover.jpg" },
  { id: "local-15", name: "Tum Tak", artist: "My Favorite Artist", src: "song15.mp3", cover: "cover.jpg" },
  { id: "local-16", name: "Likhe Jo Khat Tujhe", artist: "My Favorite Artist", src: "song16.mp3", cover: "cover.jpg" },
  { id: "local-17", name: "Pehli Nazar Mein", artist: "My Favorite Artist", src: "song17.mp3", cover: "cover.jpg" },
  { id: "local-18", name: "Dekha Hazaro Dafaa", artist: "My Favorite Artist", src: "song18.mp3", cover: "cover.jpg" },
  { id: "local-19", name: "Bol Na Halke Halke", artist: "My Favorite Artist", src: "song19.mp3", cover: "cover.jpg" },
  { id: "local-20", name: "Ishq Mubarak", artist: "My Favorite Artist", src: "song20.mp3", cover: "cover.jpg" },
  { id: "local-21", name: "Baarish", artist: "My Favorite Artist", src: "song21.mp3", cover: "cover.jpg" },
  { id: "local-22", name: "Aaja Sanam Madhur Chandni Mein", artist: "My Favorite Artist", src: "song22.mp3", cover: "cover.jpg" },
  { id: "local-23", name: "Aashiq Tera", artist: "My Favorite Artist", src: "song23.mp3", cover: "cover.jpg" },
  { id: "local-24", name: "Samjho Na", artist: "My Favorite Artist", src: "song24.mp3", cover: "cover.jpg" },
  { id: "local-25", name: "Shree Hari Stotram", artist: "My Favorite Artist", src: "song25.mp3", cover: "cover.jpg" },
  { id: "local-26", name: "Pal Pal Dil ke Paas", artist: "My Favorite Artist", src: "song26.mp3", cover: "cover.jpg" },
  { id: "local-27", name: "Dil Ka Jo Haal Hai", artist: "My Favorite Artist", src: "song27.mp3", cover: "cover.jpg" },
  { id: "local-28", name: "Wo Ladki Hai Kahan", artist: "My Favorite Artist", src: "song28.mp3", cover: "cover.jpg" },
  { id: "local-29", name: "Itna Na Mujhse Tu Pyar Badha", artist: "My Favorite Artist", src: "song29.mp3", cover: "cover.jpg" },
  { id: "local-30", name: "Jahan Mein Aesa Kaun Hai", artist: "My Favorite Artist", src: "song30.mp3", cover: "cover.jpg" },
  { id: "local-31", name: "Jiya Dhadak Dhadak Jaye", artist: "My Favorite Artist", src: "song31.mp3", cover: "cover.jpg" },
  { id: "local-32", name: "Kiston", artist: "My Favorite Artist", src: "song32.mp3", cover: "cover.jpg" },
  { id: "local-33", name: "Maan Mera Old", artist: "My Favorite Artist", src: "song33.mp3", cover: "cover.jpg" },
  { id: "local-34", name: "Maan Mera New", artist: "My Favorite Artist", src: "song34.mp3", cover: "cover.jpg" },
  { id: "local-35", name: "Monta Re", artist: "My Favorite Artist", src: "song35.mp3", cover: "cover.jpg" },
  { id: "local-36", name: "SANAM :- Chala Jata Hoon", artist: "My Favorite Artist", src: "song36.mp3", cover: "cover.jpg" },
  { id: "local-37", name: "Tu Tu Hai Wahi", artist: "My Favorite Artist", src: "song37.mp3", cover: "cover.jpg" },
  { id: "local-38", name: "Uljhan", artist: "My Favorite Artist", src: "song38.mp3", cover: "cover.jpg" },
  { id: "local-39", name: "Ye Tune Kya Kiya", artist: "My Favorite Artist", src: "song39.mp3", cover: "cover.jpg" },
  { id: "local-40", name: "Yeh Fitoor Mera", artist: "My Favorite Artist", src: "song40.mp3", cover: "cover.jpg" },
  { id: "local-41", name: "Yeh Parda Hata do", artist: "My Favorite Artist", src: "song41.mp3", cover: "cover.jpg" },
  { id: "local-42", name: "Mere Naam Tu", artist: "My Favorite Artist", src: "song42.mp3", cover: "cover.jpg" }
];

let onlineSongs = [];
let currentPlaylist = [...localSongs];
let favorites = JSON.parse(localStorage.getItem('vibe_favorites')) || [];
let activeTab = 'all';
let currentPlayingSong = localSongs[0];
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

// HTML Entity Cleaner Helper
function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Render Playlist
function renderPlaylist() {
  playlistEl.innerHTML = '';
  const query = searchInput.value.toLowerCase().trim();

  let listToRender = [];

  if (activeTab === 'all') {
    listToRender = localSongs.filter(s => s.name.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query));
  } else if (activeTab === 'liked') {
    listToRender = [...localSongs, ...onlineSongs].filter(s => {
      const isFav = favorites.some(fav => fav.id === s.id);
      const matches = s.name.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query);
      return isFav && matches;
    });
  } else if (activeTab === 'online') {
    listToRender = onlineSongs;
  }

  countAll.innerText = localSongs.length;
  countLiked.innerText = favorites.length;

  if (listToRender.length === 0) {
    if (activeTab === 'online' && !query) {
      playlistEl.innerHTML = `<p style="text-align:center; color:#6c6d7a; padding:30px; font-size:13px;">Type a song or artist name above & tap search 🌐</p>`;
    } else {
      playlistEl.innerHTML = `<p style="text-align:center; color:#6c6d7a; padding:30px; font-size:13px;">No tracks found</p>`;
    }
    return;
  }

  listToRender.forEach((song, idx) => {
    const isCurrent = currentPlayingSong && currentPlayingSong.id === song.id;
    const isLiked = favorites.some(fav => fav.id === song.id);

    const item = document.createElement('div');
    item.classList.add('song-item');
    if (isCurrent) item.classList.add('active');

    item.innerHTML = `
      ${song.cover !== 'cover.jpg' ? `<img src="${song.cover}" class="thumb" alt="thumb">` : `<span class="track-index">${idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}</span>`}
      <div class="details">
        <h4>${song.name}</h4>
        <p>${song.artist}</p>
      </div>
      <div class="song-item-actions">
        <button class="heart-btn ${isLiked ? 'liked' : ''}" data-id="${song.id}">
          <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
        <i class="fa-solid ${isCurrent && isPlaying ? 'fa-volume-high' : 'fa-play'} status-icon"></i>
      </div>
    `;

    item.addEventListener('click', (e) => {
      if (e.target.closest('.heart-btn')) return;
      currentPlaylist = listToRender;
      loadSong(song);
      playSong();
    });

    const heartBtn = item.querySelector('.heart-btn');
    heartBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(song);
    });

    playlistEl.appendChild(item);
  });
}

// Online Music API Search (JioSaavn API)
async function searchOnlineSongs() {
  const query = searchInput.value.trim();
  if (!query) return;

  activeTab = 'online';
  tabOnline.classList.add('active');
  tabAll.classList.remove('active');
  tabLiked.classList.remove('active');

  playlistEl.innerHTML = `
    <div class="loader-box">
      <div class="spinner"></div>
      <p>Searching "${query}" online...</p>
    </div>
  `;

  try {
    const response = await fetch(`https://saavn.dev/api/search/songs?query=${encodeURIComponent(query)}&page=1&limit=25`);
    const data = await response.json();

    if (data.success && data.data && data.data.results.length > 0) {
      onlineSongs = data.data.results.map(item => {
        // High quality download stream
        const downloadUrls = item.downloadUrl || [];
        const bestAudio = downloadUrls[downloadUrls.length - 1]?.url || downloadUrls[0]?.url || "";
        
        // High quality album art
        const images = item.image || [];
        const bestImage = images[images.length - 1]?.url || images[0]?.url || "cover.jpg";

        return {
          id: `online-${item.id}`,
          name: decodeHtml(item.name || item.title),
          artist: decodeHtml(item.artists?.primary?.[0]?.name || item.primaryArtists || "Online Stream"),
          src: bestAudio,
          cover: bestImage
        };
      }).filter(s => s.src);

      renderPlaylist();
    } else {
      playlistEl.innerHTML = `<p style="text-align:center; color:#6c6d7a; padding:30px; font-size:13px;">No online tracks found for "${query}"</p>`;
    }
  } catch (err) {
    console.error(err);
    playlistEl.innerHTML = `<p style="text-align:center; color:#ff5555; padding:30px; font-size:13px;">Network error! Check internet connection.</p>`;
  }
}

searchOnlineBtn.addEventListener('click', searchOnlineSongs);
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchOnlineSongs();
  }
});

// Favorites System (Persist online & local songs)
function toggleFavorite(song) {
  const index = favorites.findIndex(fav => fav.id === song.id);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(song);
  }
  localStorage.setItem('vibe_favorites', JSON.stringify(favorites));
  updateHeartStates();
  renderPlaylist();
}

function updateHeartStates() {
  if (!currentPlayingSong) return;
  const isLiked = favorites.some(fav => fav.id === currentPlayingSong.id);
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
  if (currentPlayingSong) toggleFavorite(currentPlayingSong);
});

fullHeartBtn.addEventListener('click', () => {
  if (currentPlayingSong) toggleFavorite(currentPlayingSong);
});

// Tab Handlers
tabAll.addEventListener('click', () => {
  activeTab = 'all';
  tabAll.classList.add('active');
  tabLiked.classList.remove('active');
  tabOnline.classList.remove('active');
  renderPlaylist();
});

tabLiked.addEventListener('click', () => {
  activeTab = 'liked';
  tabLiked.classList.add('active');
  tabAll.classList.remove('active');
  tabOnline.classList.remove('active');
  renderPlaylist();
});

tabOnline.addEventListener('click', () => {
  activeTab = 'online';
  tabOnline.classList.add('active');
  tabAll.classList.remove('active');
  tabLiked.classList.remove('active');
  renderPlaylist();
});

searchInput.addEventListener('input', () => {
  if (activeTab !== 'online') {
    renderPlaylist();
  }
});

// Expand Player
openFullPlayerBtn.addEventListener('click', () => fullPlayer.classList.add('open'));
closeFullPlayerBtn.addEventListener('click', () => fullPlayer.classList.remove('open'));

// Load Song
function loadSong(song) {
  currentPlayingSong = song;
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

// Play / Pause
function playSong() {
  isPlaying = true;
  miniPlayIcon.className = 'fa-solid fa-pause';
  fullPlayIcon.className = 'fa-solid fa-pause';
  vinylDisc.classList.add('spinning');
  audio.play().catch(e => console.log('Playback error:', e));
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

// Next / Prev Logic
function nextSong() {
  if (repeatMode === 2) {
    audio.currentTime = 0;
    playSong();
    return;
  }

  const currentIndex = currentPlaylist.findIndex(s => s.id === currentPlayingSong.id);
  let nextIndex = 0;

  if (isShuffle) {
    nextIndex = Math.floor(Math.random() * currentPlaylist.length);
  } else {
    nextIndex = currentIndex + 1;
    if (nextIndex >= currentPlaylist.length) {
      if (repeatMode === 0) {
        pauseSong();
        return;
      }
      nextIndex = 0;
    }
  }

  if (currentPlaylist[nextIndex]) {
    loadSong(currentPlaylist[nextIndex]);
    playSong();
  }
}

function prevSong() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  const currentIndex = currentPlaylist.findIndex(s => s.id === currentPlayingSong.id);
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) prevIndex = currentPlaylist.length - 1;
  
  if (currentPlaylist[prevIndex]) {
    loadSong(currentPlaylist[prevIndex]);
    playSong();
  }
}

fullNextBtn.addEventListener('click', nextSong);
fullPrevBtn.addEventListener('click', prevSong);

// Shuffle & Repeat
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

// Seek & Timers
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

// Lockscreen Media Session
function updateMediaSession(song) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.name,
      artist: song.artist,
      album: 'Vibe Music Online',
      artwork: [{ src: song.cover, sizes: '512x512', type: 'image/jpeg' }]
    });
    navigator.mediaSession.setActionHandler('play', playSong);
    navigator.mediaSession.setActionHandler('pause', pauseSong);
    navigator.mediaSession.setActionHandler('previoustrack', prevSong);
    navigator.mediaSession.setActionHandler('nexttrack', nextSong);
  }
}

// Initial Run
renderPlaylist();
loadSong(localSongs[0]);