function output(str){
    console.log(str);
}

output(typeof (function(){output("Hello world!");})());//Hello world! undefined