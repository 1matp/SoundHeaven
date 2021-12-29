const fs = require('fs')
const path = require('path')
const scdl = require('soundcloud-downloader').default

scdl
  .downloadPlaylist('https://soundcloud.com/1matp/sets/gou?si=7cc7dab296614f9c9bb5b64946a26a3d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')
  .then(([streams, trackNames]) => {
    streams.forEach((val, idx) => {
      val.pipe(fs.createWriteStream(path.join('/Users/matangpatel/Desktop/Empty/music/playlists/gou', trackNames[idx] + '.mp3')))
    })
  })