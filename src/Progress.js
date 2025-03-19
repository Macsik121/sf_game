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
        this.bosses_defeated = [];
    }
    resources;
    progress;
    bosses_defeated;
}


module.exports = Progress;