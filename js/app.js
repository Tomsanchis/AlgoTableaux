export const min = (entry) => {
    let m = Math.min(...entry);
    return m;
}

export const moy = (entry) => {
    let temp = 0;
    for (let i = 0; i < entry.length; i++) {
        temp += entry[i];
    }
    return temp / entry.length;
}
