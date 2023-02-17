const oneStart = 26700;
const oneEnd = 31680;
const homeStart = 32040;
const homeEnd = 33840;
const twoStart = 34200;
const twoEnd = 39180;
const lunchStartA = 39540;
const lunchEndA = 41340;
const threeStartA = 41520;
const threeEndA = 46560;
const lunchStartB = 42180;
const lunchEndB = 43800;
const threeStartB1 = 39540;
const threeEndB1 = 41940;
const threeStartB2 = 43980;
const threeEndB2 = 46560;
const fourStart = 46920;
const fourEnd = 51900;
var period = "Error no Period";

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if (h > 12) {h = h - 12};
    let time = h + ":" + m + ":" + s;
    document.getElementById('txt').innerHTML =  time;
    document.getElementById('txt2').innerHTML =  time;
    setTimeout(startTime, 1000);
    }

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
    }

/*
function checkPeriod() { 




}
*/

function checkPeriod() { 
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let totals = (h * 3600) + (m * 60) + s;
    let times = 0
    period = "Error no Period";
    if (totals < oneStart) {times = oneStart - totals; period = "Before School";}
    else if (totals < oneEnd) {times = oneEnd - totals; period = "Left of 1st Period";}
    else if (totals < homeStart) {times = homeStart - totals; period = "Before Homeroom";}
    else if (totals < homeEnd) {times = homeEnd - totals; period = "Left of Homeroom";}
    else if (totals < twoStart) {times = twoStart - totals; period = "Before 2nd Period";}
    else if (totals < twoEnd) {times = twoEnd - totals; period = "Left of 2nd Period";}
    else if (totals < lunchStartA) {times = lunchStartA - totals; period = "Before Lunch";}
    else if (totals < lunchEndA) {times = lunchEndA - totals; period = "Left of Lunch";}
    else if (totals < threeStartA) {times = threeStartA - totals; period = "Before 3rd Period";}
    else if (totals < threeEndA) {times = threeEndA - totals; period = "Left of 3rd Period";}
    else if (totals < lunchStartB) {times = lunchStartB - totals; period = "Before Lunch";}
    else if (totals < lunchEndB) {times = lunchEndB - totals; period = "Left of Lunch";}
    else if (totals < threeStartB1) {times = threeStartB1 - totals; period = "Before 3rd Period";}
    else if (totals < threeEndB1) {times = threeEndB1 - totals; period = "Left of 3rd Period";}
    else if (totals < threeStartB2) {times = threeStartB2 - totals; period = "Before 3rd Period";}
    else if (totals < threeEndB2) {times = threeEndB2 - totals; period = "Left of 3rd Period";}
    else if (totals < fourStart) {times = fourStart - totals; period = "Before 4th Period";}
    else if (totals < fourEnd) {times = fourEnd - totals; period = "Left of 4th Period";}
    else {times = oneStart - totals; period = "After School";}

    times = ((times-(times%3600))/3600) + ":" + ((times-(times%60))/60) + ":" + times%60;
    document.getElementById('timeleft').innerHTML = times;
    document.getElementById('period').innerHTML = period;
    setTimeout(checkPeriod, 1000);

    }
