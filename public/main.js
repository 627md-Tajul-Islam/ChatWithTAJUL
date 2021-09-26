let Peer = require('simple-peer')
let socket = io()
const video = document.querySelector('video')

// get stream
navigator.mediaDevices.getUserMedia({video:true,audio:true})
    .then()