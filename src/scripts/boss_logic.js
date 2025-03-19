const video = document.getElementById('boss_gameplay');

const winning_dojo_switcher = document.getElementsByClassName('next-location-visual')[0];
winning_dojo_switcher.style.pointerEvents = 'none';

function draw_a_message(msg) {
    video.pause();
    alert(msg);
    video.play();
}

window.addEventListener('load', () => {
    if (window.progress.progress > 13) {
        video.src = '../../locations/location_Lynx_win.mp4';
        video.play();
        video.addEventListener('ended', () => {
            window.progress.increase_progress({ sensei_respect: 10, }, video.duration, 10);
            draw_a_message('Great job, my padawan, you won lynx claws and my respect. Go to the winning dojo to train with the claws');
            winning_dojo_switcher.style.pointerEvents = 'auto';
        });
    } else {
        draw_a_message('Are you sure you want to defeat final boss, Lynx, having this little of experience?');
    }
})
