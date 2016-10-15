//01背包 物品可分割
var line=[10,100,50,30,7,34,87,100];//(物品总重量，物品总价值)循环
var w=50;//最大重量
var per = [];//保存物品每重量的价值
var v = [];//保存每个金属重量
var maxvalue = 0;//结果
for (var i = 0; i < line.length / 2; i++) {
    v.push(parseInt(line[2 * i]));//赛码网......
    per.push(parseInt(line[2 * i + 1]) / v[i]);
}
while (w > 0) {
    var max = Math.max.apply(null, per);
    var index = per.indexOf(max);
    if (w > v[index]) {
        maxvalue += max * v[index];
        w -= v[index];
    } else {
        maxvalue += w * max;
        w = 0;
    }
    per.splice(index, 1);
    v.splice(index, 1);
    if (per.length === 0) {
        break;
    }
}
console.log(Math.round(maxvalue*10)/10);//保留以为小数