//url地址转对象
var url='http://www.baidu.com/index.html?id=dianying&key0=gg';

function url2obj(url){
    var reg=/(\w+)=(\w+)/g;
    var obj={};
    var arr;
    while((arr=reg.exec(url))!==null){
        obj[arr[1]]=arr[2];
    }
    return obj;
}
console.log('方法一：');
console.log(url2obj(url));//{ id: 'dianying', key0: 'gg' }

function url2obj2(url){
    var index=url.indexOf('?');
    var obj={};
    if(index!==-1){
        var arr=url.slice(index+1).split('&');
        for(var i=0;i<arr.length;i++){
            var url_kv=arr[i].split('=');
            obj[url_kv[0]]=url_kv[1];
        }
    }
    return obj;
}
console.log('方法二：');
console.log(url2obj2(url));//{ id: 'dianying', key0: 'gg' }
/*当url为http://xx.com?ii时，即没有=时，会出现只有key，没有value*/