let Peer = require('simple-peer')
let socket = io()
const video = document.querySelector('video')
let client = {}

// get stream
navigator.mediaDevices.getUserMedia({video:true,audio:true})
.then(stream => {
socket.emit('NewClient')
video.srcObject = stream
video.play()

function InitPeer(type){
    let peer = new Peer({initiator:(type == 'init') ? true : false,stream:stream, trickle:false})
    peer.on('stream',function(stream){
        CreateVideo(stream)
    })
    peer.on('close', function(){
        document.getElementById("peerVideo")
    })
}
})
.catch(err => document.write(err))