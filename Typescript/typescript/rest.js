// let person: { student: boolean; age: number } = { student: true, age: 20 };
const maxFunc = (...parmas) => {
    let maxs = 0;
    parmas.forEach((i) => {
        if (maxs < i) {
            maxs = i;
        }
    });
    return maxs;
};
console.log(maxFunc(1, 2, 3, 4, 5, 6, 76, 44, 33));
const ddd = [40, "wine", false];
