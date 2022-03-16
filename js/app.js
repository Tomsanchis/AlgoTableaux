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

export const string = (entry) => {
    let temp = [];
    for (let i = 0; i < entry.length; i++) {
        if  (typeof entry[i] === 'number') {
            temp.push(entry[i]);
        }
    }
    return temp;
}

export const tbpairimpair =(entry) => {
    let temp = [[],[]];
    for (let i = 0; i < entry.length; i++) {
        // let index = entry[i] % 2
        // temp[index].push(entry[i])
        if (entry[i] % 2 === 0) {
            temp[0].push(entry[i]);
        } else {
            temp[1].push(entry[i]);
        }
    }
    return temp;
}

export const double = (entry, arr) => {
    let temp = [];
    for (let i = 0; i < entry.length; i++) {
        if (arr.includes(entry[i]) && !temp.includes(entry[i])) {
            temp.push(entry[i]);
        }
    }
    return temp;
}