let Peer = require('simple-peer')
let socket = io()
const video = document.querySelector('video')

// get stream
navigator.mediaDevices.getUserMedia({video:true,audio:true})
    .then(stream =>{
        socket.emit('NewClient')
        video.srcObject = stream
        video.play()

        function IntiPeer(type){
            let peer = new Peer({initiator:(type == 'init') ? true : false, stream:stream,trickle:peer.on('stream',)})
        }
    })
    .catch(err => document.write(err))