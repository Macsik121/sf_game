const video = document.getElementById('eclipse_survival_gameplay');
const green_orbs = 17, gold = 1490;

function calc_depending_on_time(value) {
    return Number(
        Math.round(
            video.currentTime / video.duration * value
        )
    );
}

window.addEventListener('beforeunload', () => {
    window.progress.increase_progress({
        green_orbs: calc_depending_on_time(green_orbs),
        gold: calc_depending_on_time(gold),
    }, video.currentTime);
});

video.addEventListener('ended', () => {
    window.progress.increase_progress({ green_orbs, gold, }, video.currentTime);
});
