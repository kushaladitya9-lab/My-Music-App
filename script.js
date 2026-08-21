const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const playIcon = document.getElementById('play-icon');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playlistEl = document.getElementById('playlist');
const searchInput = document.getElementById('search-input');
const totalBadge = document.getElementById('total-badge');

// 21 Tracks Database
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

let currentPlaylist = [...songs];
let songIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0 = Off, 1 = Repeat All, 2 = Repeat One

// 1. Render Playlist Function (with search support)
function renderPlaylist(tracks = currentPlaylist) {
  playlistEl.innerHTML = '';
  
  if (tracks.length === 0) {
    playlistEl.innerHTML = `<p style="text-align:center; color:#6c6d7a; padding:20px; font-size:13px;">No tracks found</p>`;
    return;
  }

  tracks.forEach((song) => {
    const originalIndex = songs.findIndex(s => s.id === song.id);
    const item = document.createElement('div');
    item.classList.add('song-item');
    if (originalIndex === songIndex) item.classList.add('active');

    item.innerHTML = `
      <span class="track-index">${song.id < 10 ? '0' + song.id : song.id}</span>
      <div class="details">
        <h4>${song.name}</h4>
        <p>${song.artist}</p>
      </div>
      <i class="fa-solid ${originalIndex === songIndex && isPlaying ? 'fa-volume-high' : 'fa-play'} status-icon"></i>
    `;

    item.addEventListener('click', () => {
      songIndex = originalIndex;
      loadSong(songs[songIndex]);
      playSong();
    });

    playlistEl.appendChild(item);
  });
}

// 2. Active Track UI Update
function updatePlaylistUI() {
  const items = document.querySelectorAll('.song-item');
  items.forEach((item) => {
    const trackId = parseInt(item.querySelector('.track-index').innerText);
    const icon = item.querySelector('.status-icon');
    
    if (trackId === songs[songIndex].id) {
      item.classList.add('active');
      icon.className = `fa-solid ${isPlaying ? 'fa-volume-high' : 'fa-play'} status-icon`;
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      item.classList.remove('active');
      icon.className = 'fa-solid fa-play status-icon';
    }
  });
}

// 3. MediaSession API (Lockscreen & Notification Bar Controls)
function updateMediaSession(song) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.name,
      artist: song.artist,
      album: 'Vibe Music Collection',
      artwork: [
        { src: song.cover, sizes: '512x512', type: 'image/jpeg' }
      ]
    });

    navigator.mediaSession.setActionHandler('play', () => playSong());
    navigator.mediaSession.setActionHandler('pause', () => pauseSong());
    navigator.mediaSession.setActionHandler('previoustrack', () => prevSong());
    navigator.mediaSession.setActionHandler('nexttrack', () => nextSong());
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (details.seekTime) {
        audio.currentTime = details.seekTime;
      }
    });
  }
}

// 4. Load Song
function loadSong(song) {
  title.innerText = song.name;
  artist.innerText = song.artist;
  audio.src = song.src;
  cover.src = song.cover;
  updatePlaylistUI();
  updateMediaSession(song);
}

// 5. Play / Pause
function playSong() {
  isPlaying = true;
  playIcon.classList.remove('fa-play');
  playIcon.classList.add('fa-pause');
  audio.play();
  updatePlaylistUI();
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
}

function pauseSong() {
  isPlaying = false;
  playIcon.classList.remove('fa-pause');
  playIcon.classList.add('fa-play');
  audio.pause();
  updatePlaylistUI();
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
}

playBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  isPlaying ? pauseSong() : playSong();
});

// 6. Navigation (Next / Prev with Shuffle & Repeat support)
function nextSong() {
  if (repeatMode === 2) {
    // Repeat One Song
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

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  prevSong();
});

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  nextSong();
});

// 7. Shuffle Button Toggle
shuffleBtn.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle('active', isShuffle);
});

// 8. Repeat Button Toggle (Off -> Repeat All -> Repeat 1)
repeatBtn.addEventListener('click', () => {
  repeatMode = (repeatMode + 1) % 3;
  if (repeatMode === 0) {
    repeatBtn.className = 'toggle-btn';
    repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
  } else if (repeatMode === 1) {
    repeatBtn.className = 'toggle-btn active';
    repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
  } else if (repeatMode === 2) {
    repeatBtn.className = 'toggle-btn active';
    repeatBtn.innerHTML = '<span style="font-size:10px; font-weight:bold;">🔂</span>';
  }
});

// 9. Search Bar Filter
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  currentPlaylist = songs.filter(s => 
    s.name.toLowerCase().includes(query) || 
    s.artist.toLowerCase().includes(query)
  );
  totalBadge.innerText = `${currentPlaylist.length} Tracks`;
  renderPlaylist(currentPlaylist);
});

// 10. Timers & Seek Bar
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
    currentTimeEl.innerText = formatTime(audio.currentTime);
    durationEl.innerText = formatTime(audio.duration);
  }
});

progress.addEventListener('input', () => {
  const seekTime = (progress.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

audio.addEventListener('ended', nextSong);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}

// Initial Load
renderPlaylist();
loadSong(songs[songIndex]);