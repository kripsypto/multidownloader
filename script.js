function downloadVideo() {
    var videoUrl = document.getElementById('videoUrl').value;
    if (videoUrl) {
        // Send a request to the backend server to initiate the download
        fetch('/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ videoUrl: videoUrl })
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Show the download message
            document.getElementById('message').innerHTML = data.message;
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}
