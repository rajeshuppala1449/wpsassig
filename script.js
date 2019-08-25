var b=5;
var e=7;
var p=11;

function add_background(){
let i=document.getElementById('mytab');
let r=i.insertRow(b);
b=b+1;
e=e+1;
p=p+1;
r.innerHTML="<td colspan=4>Name of Board:<input type=text name=board/>Course:<input type=text name=course/>CGPA:<input type=text name=cgpa/>Year of Passing:<input type=text name=yop/></td>";
}

function add_experience(){
    let i=document.getElementById('mytab');
    let r=i.insertRow(e);
    e=e+1;
    p=p+1;
    r.innerHTML="<td colspan=3>Job Profile:<input type=text name=profile/>Experience:<input type=text name=experience/>Accomplishments:<input type=text name=accomp/></td>"
}

function add_projets(){
    let i=document.getElementById('mytab');
    let r=i.insertRow(p);
    p=p+1;
    r.innerHTML="<td colspan=2>Project:<input type=text name=project/>Year:<input type=text name=year/></td>"
}


