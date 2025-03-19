<<<<<<< HEAD
const video = document.getElementById("tournament_gameplay");

video.addEventListener("ended", function() {
    const progress = window.progress;
    const blessings_won = {
        green_orbs: 18,
        red_orbs: 3,
        gold: 1500,
    };    
    progress.increase_progress(blessings_won, video.duration);
}, false);
=======
const video = document.getElementById("tournament_gameplay");
video.onended = function() {
    console.log("video is ended");
    const progress = window.progress;
    const blessings_won = {
        green_orbs: 18,
        red_orbs: 3,
        gold: 1500,
    };
    progress.increase_progress(blessings_won);
}
>>>>>>> c53316f76e43eb455e378f09513e1a8614ecbdcb
