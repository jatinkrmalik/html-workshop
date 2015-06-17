function doWork(){
    for(var i=0; i<10000; i++)
        for(var j=0; j<10000; j++)
            for(var k=0; k<100; k++)
            {}
}
self.addEventListener("message", onMessageFromMain);
function onMessageFromMain(evtArg){
    //console.log(document.getElementById("txtMain"));
    var data = evtArg.data;
    if (data === "start"){
        doWork();
        self.postMessage("finished");
        console.log("work done");
    } else {
        console.log("unknown message", data);
    }
}

