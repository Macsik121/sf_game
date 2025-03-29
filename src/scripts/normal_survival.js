const video = document.getElementById('normal_survival_gameplay');
const green_orbs = 4, gold = 1350;

if (!areLocationsQuality) video.src = '/bad_quality_locations/location_survival_norm.mp4';

function calc_depending_on_time(value) {
    return Number(
        Math.round(
            video.currentTime / video.duration * value
        )
    );
}

window.addEventListener('beforeunload', () => {
    const blessings_won = {
        green_orbs: calc_depending_on_time(green_orbs),
        gold: calc_depending_on_time(gold),
    };
    progress.increase_progress(blessings_won, video.currentTime);
});

video.addEventListener('ended', () => {
    progress.increase_progress({ green_orbs, gold, }, video.duration);
});
