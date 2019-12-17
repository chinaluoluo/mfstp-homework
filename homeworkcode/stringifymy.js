let json = { "a": { "aa": 1, "bb": 2 }, "b": "bbb", "c": 3, "d": true, "f": false, "g": [5, 6, 7], "n": null };

function mystringify(json) {
    let res = '';
    if (json == null)
        return null;
    if (Array.isArray(json)) {
        let res = '[';
        for (let i in arr) {
            i = "" + i;
            res = res + i + ',';
        }
        res = res.substr(0, res.length - 1) + ']';
        return res;
    } else {
        let res = '{'
        Object.keys(json).forEach(function(key) {
            res += key;
            let value = '';
            if (typeof(json[key]) == "object")
                value = mystringify(json[key]);
            else
                value = json[key] + "";
            console.log(value);
            res = res + ':';
            res += value;
            res = res + ',';
        });
        res = res.substr(0, res.length - 1) + '}';
        return res;
    }
    return res;
}
console.log(mystringify(json))