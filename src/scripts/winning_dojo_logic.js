const video = document.getElementById('lynx_claws_train_gameplay');
const audio = document.getElementsByClassName('gameplay_track')[0];
const init_video_src = video.src;
const init_audio_src = audio.src;
video.src = '';
audio.src = '';

window.addEventListener('load', () => {
    if (!progress.bosses_defeated.includes('lynx')) {
        alert("You can't reach this dojo yet, you have to defeat Lynx(рысь). Now go back.");
    } else {
        video.src = init_video_src;
        audio.src = init_audio_src;
        audio.currentTime += 11;
    }
});
