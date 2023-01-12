export const getRandomRGB = () => {
    const num = Math.round(0xffffff * Math.random());

    const r = num >> 16;
    const g = (num >> 8) & 255;
    const b = num & 255;

    return `rgb(${r}, ${g}, ${b})`;
};

export const getRandomPastelHSL = () => {
    return `hsla(${~~(360 * Math.random())}, 70%, 70%, 0.8)`;
};

export const getDiffBetweenTwoDatesInDays = (date, compareDate) => {
    const DAY_UNIT_IN_MILLISECONDS = 24 * 3600 * 1000;

    const diffInMilliseconds =
        new Date(date).getTime() - new Date(compareDate).getTime();
    const diffInDays = diffInMilliseconds / DAY_UNIT_IN_MILLISECONDS;

    if (diffInDays < 0) {
        return diffInDays;
    }
};
