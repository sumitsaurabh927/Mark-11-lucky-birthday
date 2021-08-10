var luckygif = document.querySelector(".lucky")
var unluckygif = document.querySelector(".unlucky")

luckygif.style.display = "none"
unluckygif.style.display = "none"

var dateofbirth = document.querySelector(".dateofbirth")
// console.log(dob);
var luckyNumber = document.querySelector(".luckynumber")
// console.log(luckyNum);

var btn = document.querySelector(".calculation")

var output = document.querySelector(".heading")

var main=document.querySelector(".main")
main.style.display="none"
var privacy=document.querySelector(".privacymsg")
var btnPrivacy=document.querySelector(".privacy")
btnPrivacy.addEventListener("click",magic)

function magic(){
    main.style.display="block"
    privacy.style.display="none"
}


btn.addEventListener("click", checkLuck);


function checkLuck() {
    var dob = dateofbirth.value;
    var luckyNum = luckyNumber.value;
    var sum = findSum(dob);
    compare(sum, luckyNum)
}

function findSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index))
    }
    console.log(sum);
    return sum;
}

function compare(sum, luckyNum) {

    if (luckyNumber.value === '' || dateofbirth.value === '') {
        output.innerText = 'Input missing'
    } else if (Number(luckyNumber.value) === 0 || Math.sign(Number(luckyNumber.value)) === -1) {
        output.innerText = 'Lucky Number can not be 0 or negative!';
    } else if (sum % luckyNum === 0) {
        // console.log("lucky")
        unluckygif.style.display = "none"

        luckygif.style.display = "block"

        output.innerText = "It's your lucky day!!!"
    } else {
        // console.log("unlucky");
        luckygif.style.display = "none"

        unluckygif.style.display = "block"
        output.innerText = "You shouldn't belive in luck so much!"
    }
}