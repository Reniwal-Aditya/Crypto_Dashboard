var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");



var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=inr",
    "method": "GET",
    "headers": {}    
}

$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.inr.toLocaleString('en-IN');
    eth.innerHTML = response.ethereum.inr.toLocaleString('en-IN');
    doge.innerHTML = response.dogecoin.inr.toLocaleString('en-IN');
});