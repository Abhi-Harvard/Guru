function btntoggle(stat){
           if(stat.className == "button on") {
              stat.className="button off";
           } else {
              stat.className="button on";
           }
        }
/*function btx(btn){
    var x = document.getElementById(btn);
    if(x.clicked == true){
        x.style.backgroundColor = "#f44336"
        x.clicked = false
    }
    else{
        x.style.backgroundColor = "#4CAF50"
        x.clicked = true
    }
}*/

function stoggle(stat){
    var cx = document.getElementById(stat);
    var c = document.getElementsByClassName('button');
    var i;
    if(cx.checked == true){
        for(i=0;i<c.length;i++)
            c[i].className="button on"
    }
    else {
        for(i=0;i<c.length;i++)
            c[i].className="button off"
    }
}
