// QUESTION NO 03
var cities = ["karachi", "lahore", "islamabad", "quetta"];

console.log(cities);

// QUESTION NO 04
var numbers = [10, 20, 15, 5];

console.log(numbers);

// QUESTION NO 05
var state = [true, false];

console.log(state);

// QUESTION NO 06
var userData = ["Hammad", 19, true, "Karachi"];

console.log(userData);

// QUESTION NO 07
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write("<h2> Qualifications : </h2>")
document.write("<b> 1) " + qualifications[0] + "</b><br>");
document.write("<b> 2) " + qualifications[1] + "</b><br>");
document.write("<b> 3) " + qualifications[2] + "</b><br>");
document.write("<b> 4) " + qualifications[3] + "</b><br>");
document.write("<b> 5) " + qualifications[4] + "</b><br>");
document.write("<b> 6) " + qualifications[5] + "</b><br>");
document.write("<b> 7) " + qualifications[6] + "</b><br>");
document.write("<b> 8) " + qualifications[7] + "</b><br>");

// QUESTION NO 08
var students = ["Michael", "John", "Tony"];
var scores = [437, 183, 372];

var totalMarks = 500;

var Percentage1 = (scores[0] / totalMarks) * 100;
document.write("<br> Score of " + students[0] + " is <b>" + scores[0] + "</b>. Percantage : <b>" + Percentage1 + "%</b>");

var Percentage2 = (scores[1] / totalMarks) * 100;
document.write("<br> Score of " + students[1] + " is <b>" + scores[1] + "</b>. Percantage : <b>" + Percentage2 + "%</b>");

var Percentage3 = (scores[2] / totalMarks) * 100;
document.write("<br> Score of " + students[2] + " is <b>" + scores[2] + "</b>. Percantage : <b>" + Percentage3 + "%</b>");

// QUESTION NO 09
var colors = ["Red", "Green", "Blue"];
document.write("<br><br><b> Initial Colors: </b> " + colors);

var startColor = prompt("Which color do you want to add at the beginning?");
colors.unshift(startColor);
document.write("<br><b> After adding color at beginning : </b>" + colors);

var endColor = prompt("Which color do you want to add at the end?");
colors.push(endColor);
document.write("<br><b> After adding color at end : </b>" + colors);

colors.unshift("Purple", "Orange");
document.write("<br><b> After adding two more colors at beginning : </b>" + colors);

colors.shift();
document.write("<br><b> After deleting first color : </b>" + colors);

colors.pop();
document.write("<br><b> After deleting last color : </b>" + colors);

// QUESTION NO 13
var fifo = [];

fifo.push("Ali");
fifo.push("Ahmed");
fifo.push("Tony");
fifo.push("Hammad");

document.write("<br><br><b> Values Added : </b>" + fifo);
document.write("<br><b> First Out : </b>" + fifo.shift());
document.write("<br><b> Second Out : </b>" + fifo.shift());
document.write("<br><b> Remaining Values : </b>" + fifo);

// QUESTION NO 14
var lifo = [];

lifo.push("Book 1");
lifo.push("Book 2");
lifo.push("Book 3");
lifo.push("Book 4");

document.write("<br><br><b> Values Stored : </b>" + lifo);
document.write("<br><b> First Out : </b>" + lifo.pop());
document.write("<br><b> Second Out : </b>" + lifo.pop());
document.write("<br><b> Remaining Values : </b>" + lifo);

// QUESTION NO 15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Tecno", "Infinix"];

document.write("<br><br> <select>");
document.write("<option>" + manufacturers[0] + "</option>");
document.write("<option>" + manufacturers[1] + "</option>");
document.write("<option>" + manufacturers[2] + "</option>");
document.write("<option>" + manufacturers[3] + "</option>");
document.write("<option>" + manufacturers[4] + "</option>");
document.write("<option>" + manufacturers[5] + "</option>");
document.write("</select>");