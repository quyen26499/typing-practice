function start(){
    document.getElementById("typing").disabled = false;
    if(s == -1){
        clearTimeout(timeout);
        //alert("time out");
        submit();
        return false;
    }
    document.getElementById('s').innerText = s.toString();
    timeout = setTimeout(function(){
        s--;
        start();
    },1000);

}

