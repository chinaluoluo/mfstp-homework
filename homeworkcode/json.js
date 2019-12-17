let json = '{ "a": { "aa": 1, "bb": 2 }, "b": "bbb", "c": 3, "d": true, "f": false, "g": [5, 6, 7], "n": null }';
let i = 0;

function parseValue() {
    i = jumpspace(); //跳过空格和换行
    console.log(json[i])
    if (json[i] == "{") {
        return parseObject();
    } else if (json[i] == "[") {
        return parseArray();
    } else if (json[i] == '"') {
        return parseString();
    } else if (json[i] == 't' || json[i] == 'f') {
        return parseBoolean();
    } else if (json[i] == 'n') {
        return parseNull();
    } else if (isNumber()) {
        return parseNumber;
    } else {
        throw new Error("12331132")
    }
}

function parseObject() {
    let res = {};
    i++; //跳过 { 
    while (json[i] != '}') {
        i = jumpspace(); //跳过空格和换行
        let key = null;
        if (json[i] == '"') {
            i++; //跳过前引号
            key = parseString();
        }
        i = jumpspace(); //跳过空格和换行
        i++; //跳过冒号
        i = jumpspace(); //跳过空格和换行
        let value = parseValue();
        res[key] = value;
        i = jumpspace(); //跳过空格和换行
        if (json[i] == ',')
            i++; //跳过逗号
        i = jumpspace(); //跳过空格和换行
    }
    i++; //跳过 }
    return res;
}

function parseString() {
    let res = "";
    i = jumpspace(); //跳过空格和换行
    while (json[i] != '"') {
        res += json[i];
    }
    i++; //跳过后引号
    return res;
}

function parseBoolean() {
    let s4 = json.substr(i, 4);
    let s5 = json.substr(i, 5)
    if (s4 == "true") {
        i += 4;
        return true;
    }
    if (s5 == "false") {
        i += 5;

        return false;
    }
    throw new Error("解析出错boolean");
}

function isNumber() {
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'e', '+', '-'].some(j => json[i] == j);
}

function parseNumber() {
    let res = '';
    while (isNumber()) {
        res += json[i];
        i++;
    }
    return parseFloat(res);
}

function parseArray() {
    let res = [];
    i++; //跳过 [
    while (json[i] != ']') {
        i = jumpspace(); //跳过空格和换行
        value = parseValue();
        res.push(value);
        i = jumpspace(); //跳过空格和换行
        if (json[i] == ',')
            i++;
        i = jumpspace(); //跳过空格和换行
    }
    return res;
}

function parseNull() {
    let s = json.substr(i, 4);
    if (s == "null") {
        i += 4;
        return null;
    }
    throw new Error("解析出错null")
}

function jumpspace() {
    while (json[i] == '\t' || json[i] == '\n') {
        i++;
    }
    return i;
}

function parsejson() {
    i = 0;
    return parseValue();
}
console.log(parsejson());