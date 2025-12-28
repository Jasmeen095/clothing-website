

function scrollToShop(){
    document.getElementById("collection").scrollIntoView()({
        behaviour:"smooth"
    });
}

let count=0;

function addCart(){
    count++;
    document.getElementById("cart-count").innerText=count;
}