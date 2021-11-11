if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        let leftVideo = document.getElementById('left-video');

        leftVideo.srcObject = stream;
        leftVideo.src = window.URL.createObjectURL(stream);
        leftVideo.play();
    });

    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        let rightVideo = document.getElementById('right-video');

        rightVideo.srcObject = stream;
        rightVideo.src = window.URL.createObjectURL(stream);
        rightVideo.play();
    });
}