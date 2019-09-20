
document.getElementById('Mad-Lib-Btn').addEventListener('click', result1);

function result1(){
    let input1 = document.getElementById("in1").value;
    let input2 = document.getElementById("in2").value;
    let input3 = document.getElementById("in3").value;
    let input4 = document.getElementById("in4").value;
    let input5 = document.getElementById("in5").value;
    document.getElementById('answer').innerHTML = "There are too many " + input1 + " " + input2 + " on this " + input3 + " airplane! , I screamed.  Somebody has to " + input4 + " on the " + input5 + " to solve this problem!";
}
