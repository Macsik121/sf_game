const video = document.getElementById('boss_gameplay');
const audio = document.getElementsByClassName('gameplay_track')[0];
const winning_dojo_switcher = document.getElementsByClassName('next-location-visual')[0];

function draw_a_message(msg) {
    video.pause();
    audio.pause();
    alert(msg);
    video.play();
    audio.play();
}

window.addEventListener('load', () => {
    if (progress.bosses_defeated.includes('lynx')) winning_dojo_switcher.style.pointerEvents = 'auto';
    if (progress.progress > 13) {
        if (areLocationsQuality)
            video.src = '../../locations/location_Lynx_win.mp4';
        else
            video.src = '../../bad_quality_locations/location_Lynx_win.mp4';

        audio.src = '../../locations_tracks/location_Lynx_win.mp3';
        
        video.addEventListener('ended', () => {
            progress.fix_boss_defeat('lynx');
            draw_a_message('Great job, my padawan, you won lynx claws and my respect. Go to the winning dojo to train with the claws');
            winning_dojo_switcher.style.pointerEvents = 'auto';
            const blessings_won = {
                gold: 40,
                sensei_respect: 10,
                green_orbs: 7,
                red_orbs: 1,
            };
            progress.increase_progress(blessings_won, video.duration, 10);
        });
    } else {
        if (!areLocationsQuality) video.src = '/bad_quality_locations/location_Lynx_loss.mp4';
        
        draw_a_message('Are you sure you want to defeat final boss, Lynx, having this little of experience?');
    }
})
