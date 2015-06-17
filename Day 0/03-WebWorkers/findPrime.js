self.addEventListener("message", onMessageFromMain);

function onMessageFromMain(range){
var rangeStr = range.data;
console.log(rangeStr.primeFrom);
console.log(rangeStr.primeTo);

var from = parseInt(rangeStr.primeFrom,10);
var to = parseInt(rangeStr.primeTo,10);

calcPrime(from,to);
}


function calcPrime(from,to)
{
var beginNum = from;
var endNum = to;
var primeNumbs = new Array();
var ctr = beginNum;
    while(ctr<=endNum)
    {
        if(isPrime(ctr)==true)
        {
            primeNumbs[primeNumbs.length] = ctr;
        }
        ctr = ctr+1;

    }

    if (primeNumbs.length == 0){
       document.getElementById('divMessages').innerHTML = "There were no prime no within the range.";
    }

    else {
        outputPrimeNums(primeNumbs);
    }

}

function isPrime(num)
{
var flag = true;
for(var i=2; i<=Math.ceil(num/2); i++)
{
    if((num%i)==0)
    {
        flag = false;
        break;
    }
}
return flag;    
}

function outputPrimeNums(primes){
var html = "<h2>Prime Numbers</h2>";
for (i=0;i<primes.length;i++){
        html += primes[i] + "<br/>";
    }
    
    console.log(html);
            self.postMessage(html);

//document.getElementById('divMessages').innerHTML = html;
}

