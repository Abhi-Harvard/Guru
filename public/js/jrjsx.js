/*SingleButtonToggle*/
function btntoggle(stat){
    if(stat.className == "button on") {
        stat.className="button off";
    } else {
        stat.className="button on";
    }
}

/*UniversalAttendanceSwitch*/
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

/*UniversalDisableSwitch*/
/*function udstoggle(stat){
    //var bx = document.getElementById(stat);
    //var cx = document.getElementById('chswitch1');
    var c = document.getElementsByClassName('button');
    var i;
    //if(bx.checked == true){
        if(stat.className == "chbx1"){
            for(i=0;i<c.length;i++)
                c[i].className="button disable"

        }
    //}
    else {
        for(i=0;i<c.length;i++)
            c[i].className="button off"
    }
}*/

function udstoggle(stat){
    
}
