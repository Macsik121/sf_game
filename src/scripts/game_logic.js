// Progress class is loaded from .html file
// Real Progress class in Progress.js file

const areLocationsQuality = false;

class UIProgress extends Progress {
    constructor(...args) {
        super(...args);

        this.increase_progress = this.increase_progress.bind(this);
        this.load_progress = this.load_progress.bind(this);
        this.save_progress = this.save_progress.bind(this);
        this.update_resources_visually = this.update_resources_visually.bind(this);
        this.fix_boss_defeat = this.fix_boss_defeat.bind(this);
    }
    // called after each fight
    increase_progress(resources, time_played = 0, progress_gained = 1) {
        for (const resource in resources) {
            this.resources[resource] = Number(
                (this.resources[resource] + resources[resource])
                    .toFixed(2)
            );
        }
     // if  time played is less than required, the progress is not to increase
        if (time_played >= 25) {
            this.progress += progress_gained;
            let str_to_show = `Your progress is ${this.progress}`;
            // if (this.progress < 7) str_to_show += '. You need to have progress = 7 at least to defeat eagle, boss guard.';
            // if (this.progress >= 7 && ) str_to_show += '. You can defeat eagle now to have progress = 6 to defeat eagle.';
            // if (this.progress < 7) str_to_show += '. You need to have progress = 6 to defeat eagle.';
            alert(str_to_show);
        }

        this.update_resources_visually();
        this.save_progress();
    }
    // fix boss defeat
    fix_boss_defeat(boss_name = '') {
        if (!this.bosses_defeated.includes(boss_name))
            this.bosses_defeated
                .push(
                    boss_name.toLowerCase()
                );
    }
    // locally store progress
    async save_progress() {
        // JSON.stringify(progress), а не this,
        // потому что при уходе со страницы (window.onbeforeunload) выполняется старая версия save_progress,
        // когда прогресс ещё не загружен,
        // т.е. window.onbeforeunload присвается save_progress экзмемпляра с нулевыми значениями
        // e.g. happens the following:
        // progress = new UIProgress() *нулевые поля*
        // window.onbeforeunload = progress.save_progress *метод будет сохранять нулевые значения*
        const res = await fetch('/save-progress', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(progress),
        });
        localStorage.setItem("progress", JSON.stringify(progress));
    }
    // refresh html according to most relevant progress information out of local storage
    update_resources_visually() {
        const resourcesElements = document.querySelectorAll(".resource-amount");
        // order of the elements on the page MATTERS!!!
        resourcesElements[0].innerHTML = this.resources.green_orbs;
        resourcesElements[1].innerHTML = this.resources.red_orbs;
        resourcesElements[2].innerHTML = this.resources.purple_orbs;
        resourcesElements[3].innerHTML = this.resources.gold;
        resourcesElements[4].innerHTML = this.resources.sensei_respect;
    }
    // load progress from local storage
    load_progress() {
        const progress_saved = JSON.parse(localStorage.getItem("progress"));
        
        if (progress) {
            progress = new UIProgress(progress_saved);
            
            progress.update_resources_visually();
        }
    }
    reset_progress() {
        progress = new Progress();
        localStorage.clear();
    }
}

const videos = document.querySelectorAll('video');
for (const video of videos) {
    video.addEventListener('ended', function() {
        video.currentTime = 0;
        video.play();
    });
}

let progress = new UIProgress();

window.addEventListener('load', progress.load_progress);
window.addEventListener('beforeunload', progress.save_progress);
window.progress = progress;
