const fs = require('fs')
const path = require('path')
const scdl = require('soundcloud-downloader').default

var urlPlaylist = '',
    downloadPath = '';

  scdl
  .downloadPlaylist(urlPlaylist)
  .then(([streams, trackNames]) => {
    streams.forEach((val, idx) => {
      val.pipe(fs.createWriteStream(path.join(downloadPath, trackNames[idx] + '.mp3')))
    })
  })