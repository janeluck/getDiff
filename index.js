var Immutable = require('immutable'),
    diff = require('immutablediff'),
    fs = require('fs')

// 读取json数据转存为immutable数据结构格式
var map1 = Immutable.fromJS(JSON.parse(fs.readFileSync('data_old.json'))),
    map2 = Immutable.fromJS(JSON.parse(fs.readFileSync('data_new.json')))

// 输出比较结果
fs.writeFile('difference.json', JSON.stringify(diff(map1, map2).toJS()))