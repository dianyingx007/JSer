function quicksort(arr){
    function sort(start,end){
        var ele=arr[start];
        if(start<end){
            var i=start,j=end;
            for(;i<j;){
                for(;i<j;j--){
                    if(arr[j]<ele){
                        arr[i++]=arr[j];
                        break;
                    }
                }
                for(;i<j;i++){
                    if(arr[i]>ele){
                        arr[j--]=arr[i];
                        break;
                    }
                }
            }
            arr[i]=ele;
            sort(start,i-1);
            sort(i+1,end);
        }
    }
    sort(0,arr.length-1);
    return arr;
}
var arr=[8,5,37,8,4,6,7,88,42,1];
console.log(quicksort(arr));