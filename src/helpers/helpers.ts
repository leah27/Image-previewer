export const reverseObjectKeys = (obj: object) => {
    let arr: Array<any> = []
    let newObj: Array<any> = []

    for (let key in obj) {
        if (obj === sessionStorage) {
            let n = sessionStorage.length;
            while (n--) {
                let key: string | any = sessionStorage.key(n)
                if (/foo/.test(key)) {
                    sessionStorage.removeItem(key);
                }
                arr.push(key)
            }
        }
        arr.push(key)
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        newObj[arr[i]] = []
    }

    return newObj
}

// export const mergeObjects = (arr) => arr.reduce(function(result, current) {
//     return Object.assign(result, current);
//   }, {})

export const top5Values = (obj: object) => {
    if(obj && Object.values(obj).length > 0 && Object.getPrototypeOf(obj) === Object.prototype){
        let entries = Object.entries(obj);
        let top5= entries.slice(-5);
        return top5.reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    } 
} 