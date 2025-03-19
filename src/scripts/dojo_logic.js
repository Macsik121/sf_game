const video = document.getElementById('dojo_gameplay') || document.getElementById('lynx_claws_train_gameplay');
const sensei_respect = 1;

window.addEventListener('beforeunload', () => {
    const sensei_respect_calculated = 
        Number(
            (video.currentTime / video.duration * sensei_respect)
                .toFixed(2)
        );

    progress.increase_progress({
        sensei_respect: sensei_respect_calculated,
    });
});

video.addEventListener('ended', () => {
    progress.increase_progress({ sensei_respect, });
});
