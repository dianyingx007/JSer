function sum(){
    var sumnum=0;
    var flag=0;
    function sumone(arr){
        if(flag===0){
            if(arr.length<=1){
                sumnum=arr[0]
                flag=1;
                return sumone;
            }else{
                sumnum=arr[0]+arr[1];
                return sumnum;
            }
        }else {
            sumnum+=arr;//注意：此处第二次传入的不是arguments，是number 3
            flag=0;
            return sumnum;
        }
    }
    return sumone(arguments);
}
console.log(sum(2,3));
console.log(sum(2)(3));