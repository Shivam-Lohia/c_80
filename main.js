student_name = [];
function submit() {
    var display=[];
    for( var j=1;j<=4;j++) { 
        var name= document.getElementById("name_of_the_student_"+j).value;
        console.log(name);
        student_name.push(name);
    }
    console.log(student_name);
    var length=student_name.length;
    console.log(length);
    for(var k=0;k < length;k++)
    {
        display.push("<h4> NAME-"+student_name[k]+"</h4>");
        console.log(display);
    }
    console.log(display);
    document.getElementById("display_name_with_commas").innerHTML=display;
    var remove=display.join("");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
