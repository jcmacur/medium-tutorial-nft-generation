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