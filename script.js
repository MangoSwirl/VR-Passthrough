if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: {facingMode: "environment"} }).then(function (stream) {
        let leftVideo = document.getElementById('left-video');

        // Older browsers may not have srcObject
		if ("srcObject" in leftVideo) {
		    leftVideo.srcObject = stream;
        } else {
		    // Avoid using this in new browsers
		    leftVideo.src = window.URL.createObjectURL(stream);
    	}
        leftVideo.onloadedmetadata = function(e) {
            leftVideo.play();
        };
    }).catch(err => alert(err));

    navigator.mediaDevices.getUserMedia({ video: {facingMode: "environment"} }).then(function (stream) {
        let rightVideo = document.getElementById('right-video');

        // Older browsers may not have srcObject
		if ("srcObject" in rightVideo) {
		    rightVideo.srcObject = stream;
        } else {
		    // Avoid using this in new browsers
		    rightVideo.src = window.URL.createObjectURL(stream);
    	}
        rightVideo.onloadedmetadata = function(e) {
            rightVideo.play();
        };
    }).catch(err => alert(err));
} else {
    alert('Sorry, your browser does not support getUserMedia API');
}