const video = document.getElementById('boss_guard_gameplay');

window.addEventListener('load', () => {
    if (window.progress.progress > 6) {
        video.src = '../../locations/location_eagle_win.mp4';
        video.play();
        video.addEventListener('ended', () => {
            const blessings_won = { green_orbs: 6, gold: 28, };
            window.progress.increase_progress(blessings_won, video.duration, 3);
        });
    } else {
        video.pause();
        alert('Are you sure you want to defeat boss guard with playing this little?');
        video.play();
    }
});
