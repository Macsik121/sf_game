<<<<<<< HEAD
const video = document.getElementById('dojo_gameplay') || document.getElementById('lynx_claws_train_gameplay');
const sensei_respect = 1;

window.addEventListener('beforeunload', () => {
    const sensei_respect_calculated = 
        Number(
            (video.currentTime / video.duration * sensei_respect)
                .toFixed(2)
        );

    window.progress.increase_progress({
        sensei_respect: sensei_respect_calculated,
    });
});

video.addEventListener('ended', () => {
    window.progress.increase_progress({ sensei_respect, });
});
=======

>>>>>>> c53316f76e43eb455e378f09513e1a8614ecbdcb
