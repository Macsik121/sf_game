const video = document.getElementById('boss_guard_gameplay');
const audio = document.getElementsByClassName('gameplay_track')[0];
// initially video.src = /locations/location_eagle_loss.mp4. Then we change that

window.addEventListener('load', () => {
    if (progress.progress > 6) {
        if (areLocationsQuality)
            video.src = '/locations/location_eagle_win.mp4';
        else
            video.src = '/bad_quality_locations/location_eagle_win.mp4';
        
        audio.src = '/locations_tracks/location_eagle_win.mp3';
        
        video.addEventListener('ended', () => {
            const blessings_won = { green_orbs: 6, gold: 28, };
            progress.increase_progress(blessings_won, video.duration, 3);
        });
    } else {
        if (!areLocationsQuality) video.src = '/bad_quality_locations/location_eagle_loss.mp4';

        video.pause();
        audio.pause();
        alert('Are you sure you want to defeat boss guard with playing this little?');
        video.play();
        audio.play();
    }
});
