const video = document.getElementById('lynx_claws_train_gameplay');

window.addEventListener('load', () => {
    if (window.progress.progress > 5) {
        video.src = '../../locations/location_eagle_win.mp4';
        video.play();
    }
    else {
        video.pause();
        alert('Are you sure you want to defeat boss guard with playing this little?');
        video.play();
    }
});
