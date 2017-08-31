var Immutable = require('immutable')
var diff = require('immutablediff')
var fs = require('fs')

var map1 = Immutable.fromJS(JSON.parse(fs.readFileSync('data_old.json')))
var map2 = Immutable.fromJS(JSON.parse(fs.readFileSync('data_new.json')))

fs.writeFile('difference.json', JSON.stringify(diff(map1, map2).toJS()),  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
});