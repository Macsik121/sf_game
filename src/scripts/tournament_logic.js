const video = document.getElementById("tournament_gameplay");

if (!areLocationsQuality) video.src = '/bad_quality_locations/location_tournament.mp4';

video.addEventListener("ended", function() {
    const blessings_won = {
        green_orbs: 18,
        red_orbs: 3,
        gold: 1500,
    };    
    progress.increase_progress(blessings_won, video.duration);
}, false);
