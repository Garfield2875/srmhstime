const oneStart = [7,25];
const oneEnd = [8,48];
const homeStart = [8,54];
const homeEnd = [9,24];
const twoStart = [9,30];
const twoEnd = [10,53];
const lunchStartA = [10,59];
const lunchEndA = [11,29];
const threeStartA = [11,32];
const threeEndA = [12,56];
const lunchStartB = [11,43];
const lunchEndB = [12,10];
const threeStartB1 = [10,59];
const threeEndB1 = [11,39];
const threeStartB2 = [12,13];
const threeEndB2 = [12,56];
const fourStart = [1,2];
const fourEnd = [2,25];
let period = "Error no Period";

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

function checkPeriod() { 
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let time = h + ":" + m + ":" + s;
    if (h > 12) {h = h - 12};
    if (h < oneStart[0] && m < oneStart[1]) {h = h - oneStart[0]; m = m - oneStart[1]; period = "Before First Period";}
    else if (h < oneEnd[0] && m < oneEnd[1]) {h = h - oneEnd[0]; m = m - oneEnd[1]; period = "Left in First Period";}
    else if (h < homeStart[0] && m < homeStart[1]) {h = h - homeStart[0]; m = m - homeStart[1]; period = "Before Homeroom"};


}