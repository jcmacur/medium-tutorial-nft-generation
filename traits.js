const COMMON_MAX_RARITY = 50; //Starts from 1
const UNCOMMON_MAX_RARITY = 75;
const RARE_MAX_RARITY = 95;
const LEGENDARY_MAX_RARITY = 100;

const randomElement = (list) => {
    const _random = Math.floor(Math.random() * list.length);
    return list[_random];
}

const getBackground = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Lava', 'Forest'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Mountain', 'Aqua'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Psycho', 'Snow'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Galaxy'
        ]);
    }
}

const getBodyAndHead = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Normal'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Normal'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Alien', 'Zombie'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Gold'
        ]);
    }
}

const getOutfit = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Gap', 'Hoodie', 'Tanktop', 'Lumberjack'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Shirt with holes'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Blue Jacket', 'Red Jacket'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Pink Hoodie'
        ]);
    }
}

const getNose = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Common'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Common'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Common'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Common'
        ]);
    }
}

const getMouth = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Happy', 'Surprise', 'Serious'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Full Beard','Moustache',
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
             'Lips', 'Twisted'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Lock Beard', 
        ]);
    }
}

const getEyes = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Chill', 'Angry'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Surprise'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
             'Shame'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Focus'
        ]);
    }
}

const getSunglasses = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Empty'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Empty', 'Pirate Patch'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
             'Cateyes', 'Aviator'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Thug Sunglasses'
        ]);
    }
}

const getHeadwear = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Empty'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Empty', 'Blue Bandana', 'Red Bandana', 
            'Sailor', 'Purple Hat', 'Wizard', 'Cowboy'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
             'Purple Punk', 'Pink Punk', 'Bowler', 'Backwards Camo'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Leaves', 'Rasta'
        ]);
    }
}

module.exports = {
    getBackground,
    getBodyAndHead,
    getOutfit,
    getNose,
    getMouth,
    getEyes,
    getSunglasses,
    getHeadwear
}