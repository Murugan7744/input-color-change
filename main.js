function colorchange( ){
    var a=document.getElementById("color");
     var b=a.value;
            a.style.backgroundColor=b;

}

function back(){
        var c=document.getElementById("change");
        var d=c.value;
    var z=document.getElementsByTagName("body");
           z[0].style.backgroundColor=d;
}

function changefont(){
    var x=document.getElementsByTagName("p");
            x[0].style.fontSize="35px";

}