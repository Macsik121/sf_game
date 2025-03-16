class Resources {
    constructor({
        green_orbs = 0,
        red_orbs = 0,
        purple_orbs = 0,
        gold = 0,
        sensei_respect = 0,
    } = {}) {
        this.green_orbs = green_orbs;
        this.red_orbs = red_orbs;
        this.purple_orbs = purple_orbs;
        this.gold = gold;
        this.sensei_respect = sensei_respect;
    }
    green_orbs;
    red_orbs;
    purple_orbs;
    gold;
    sensei_respect;
}

class Progress {
    constructor(resources = new Resources()) {
        this.resources = resources;
        this.progress = 0;
        this.increase_progress = this.increase_progress.bind(this);
        
        this.load_progress = this.load_progress.bind(this);
        this.save_progress = this.save_progress.bind(this);
        this.update_resources_visually = this.update_resources_visually.bind(this);
    }
    resources;
    progress;
    // called after each fight
    increase_progress(resources) {
        for (const resource in resources)
            this.resources[resource] += resources[resource];

        this.save_progress();
        this.update_resources_visually();
    }
    // locally store progress
    save_progress() {
        localStorage.setItem("progress", JSON.stringify(this));
    }
    // refresh html according to most relevant progress information out of local storage
    update_resources_visually() {
        const resourcesElements = document.querySelectorAll(".resource-amount");
        // order of the elements on the page MATTERS!!!
        resourcesElements[0].innerHTML = this.resources.green_orbs;
        resourcesElements[1].innerHTML = progress.resources.red_orbs;
        resourcesElements[2].innerHTML = progress.resources.purple_orbs;
        resourcesElements[3].innerHTML = progress.resources.gold;
        resourcesElements[4].innerHTML = progress.resources.sensei_respect;
    }
    // load progress from local storage
    load_progress() {
        const progress = JSON.parse(localStorage.getItem("progress"));
        console.log(this);
        
        if (progress) {
            for (const resource in progress.resources) {
                this.resources[resource] = progress.resources[resource];
            }
            this.progress = progress.progress;
            this.update_resources_visually();
        }
    }
}

const progress = new Progress();

window.onload = progress.load_progress;
window.onbeforeunload = progress.save_progress;
window.progress = progress;
