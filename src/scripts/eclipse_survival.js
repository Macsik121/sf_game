const video = document.getElementById('eclipse_survival_gameplay');
const green_orbs = 17, gold = 1490;

if (!areLocationsQuality) video.src = '/bad_quality_locations/location_survival_eclpse.mp4';

function calc_depending_on_time(value) {
    return Number(
        Math.round(
            video.currentTime / video.duration * value
        )
    );
}

window.addEventListener('beforeunload', () => {
    progress.increase_progress({
        green_orbs: calc_depending_on_time(green_orbs),
        gold: calc_depending_on_time(gold),
    }, video.currentTime);
});

video.addEventListener('ended', () => {
    progress.increase_progress({ green_orbs, gold, }, video.currentTime);
});
