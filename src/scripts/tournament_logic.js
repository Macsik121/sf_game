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
