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
