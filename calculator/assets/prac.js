

function myFun(){  
    
    let a = parseInt(document.getElementById("number").value);
    let b = parseInt(document.getElementById("numbers").value);
    if(a!==NaN && b!==NaN){
        document.getElementById("result").innerHTML=a+b;

    }
    else {
        document.getElementById("result").innerHTML="toon utga bichn vv!";
    }
   
}
function myFun2(){
    let a = parseInt(document.getElementById("number").value);
    let b = parseInt(document.getElementById("numbers").value);
    document.getElementById("result").innerHTML=a-b;

}
function myFun3(){
    let a = parseInt(document.getElementById("number").value);
    let b = parseInt(document.getElementById("numbers").value);
    document.getElementById("result").innerHTML=a/b;

}
function myFun4(){
    let a = parseInt(document.getElementById("number").value);
    let b = parseInt(document.getElementById("numbers").value);
    document.getElementById("result").innerHTML=a*b;

}
function myFun5(){
    let a = parseInt(document.getElementById("number").value);
    let b = parseInt(document.getElementById("numbers").value);
    document.getElementById("result").innerHTML=a**b;

}

function myFun6(){
    let a = document.getElementById("number").value="";
    let b = document.getElementById("numbers").value="";
    document.getElementById("result").innerHTML= "0";
    


}
