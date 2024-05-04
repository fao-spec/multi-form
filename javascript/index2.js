function myFunction2() {
    location.replace('index-3.html');
}

function myFunction3() {
    location.replace('index-4.html');
}

function myFunction4() {
    location.replace('index-5.html');
}

function backBtn2() {
    location.replace('index.html');
}

function backBtn3() {
    location.replace('index-2.html');
}

function backBtn4() {
    location.replace('index-3.html');
}



function changeBtn() {
    location.replace('index-2-yearly.html');
}


function myFunctionYear2() {
    location.replace('index-3-yearly.html');
}

function myFunctionYear3() {
    location.replace('index-4-yearly.html');
}

function myFunctionYear4() {
    location.replace('index-5.html');
}

function backBtnYear2() {
    location.replace('index.html');
}

function backBtnYear3() {
    location.replace('index-2-yearly.html');
}

function backBtnYear4() {
    location.replace('index-3-yearly.html');
}


function validateForm() {
    let nameJs = document.querySelector('.name-js').value;
    let emailJs = document.querySelector('.email-js').value;
    let telJs = document.querySelector('.tel-js').value;
    console.log(nameJs);
    console.log(emailJs);
    console.log(telJs);

    if (nameJs === '' || nameJs === null) {
        document.querySelector('.requirement-js').innerHTML = 'This field is required';
    }

    if (emailJs === '' || emailJs === null) {
        document.querySelector('.requirement-js2').innerHTML = 'This field is required';
    }

    if (telJs === '' || emailJs === null) {
        document.querySelector('.requirement-js3').innerHTML = 'This field is required';
    }else {
        location.replace('index-2.html');
    }
}


function toggleButton() {
    location.replace('index-2-yearly.html');
}

function toggleButton2() {
    location.replace('index-2.html');
}

function pickButton1() {
    document.querySelector('.right-btn1').style.backgroundColor = 'rgb(242, 242, 247)';
    document.querySelector('.right-div1').checked = true;
}

function pickButton2() {
    document.querySelector('.right-btn5').style.backgroundColor = 'white';
    document.querySelector('.right-div2').checked = false;
}

function pickButton3() {
    document.querySelector('.right-btn6').style.backgroundColor = 'white';
    document.querySelector('.right-div3').checked = false;
}

function pickButton(pickIt) {
    if (pickIt === 'First') {
        document.querySelector('.right-btn1').style.backgroundColor = 'rgb(242, 242, 247)';
        document.querySelector('.right-div1').checked = true;
    }else if (pickIt === 'Second') {
        document.querySelector('.right-btn5').style.backgroundColor = 'rgb(242, 242, 247)';
        document.querySelector('.right-btn6').style.backgroundColor = 'white';
        document.querySelector('.right-div3').checked = false;
        document.querySelector('.right-div2').checked = true;
    }else if (pickIt === 'Third') {
        document.querySelector('.right-btn6').style.backgroundColor = 'rgb(242, 242, 247)';
        document.querySelector('.right-btn5').style.backgroundColor = 'white';
        document.querySelector('.right-div2').checked = false;
        document.querySelector('.right-div3').checked = true;
    }
    localStorage.setItem('pickIt', JSON.stringify(pickIt));
}

let playerMove = JSON.parse(localStorage.getItem('playerMove'));
let pickIt = JSON.parse(localStorage.getItem('pickIt'));
if (pickIt === 'First') {
    let serviceElement1 = document.querySelector('.service-js')
    let service1 = serviceElement1.innerHTML
    service1 = 'Online Service'
    document.querySelector('.service-js').innerHTML = `${service1}`;

    let costElement4 = document.querySelector('.cost-js')
    let cost4 = costElement4.innerHTML
    cost4 = '$10/yr'
    document.querySelector('.cost-js').innerHTML = `${cost4}`;
}

if (pickIt === 'Second') {
    if (playerMove === 'First') {
        let costElement7 = document.querySelector('.cost-main-js4')
        let cost7 = costElement7.innerHTML
        cost7 = '+$120'
        document.querySelector('.cost-main-js4').innerHTML = `${cost7}`;  
    }else if (playerMove === 'Second') {
        let costElement8 = document.querySelector('.cost-main-js4')
        let cost8 = costElement8.innerHTML
        cost8 = '+$150'
        document.querySelector('.cost-main-js4').innerHTML = `${cost8}`;  
    }else if (playerMove === 'Third') {
        let costElement9 = document.querySelector('.cost-main-js4')
        let cost9 = costElement9.innerHTML
        cost9 = '+$180'
        document.querySelector('.cost-main-js4').innerHTML = `${cost9}`;  
    }

    let serviceElement1 = document.querySelector('.service-js')
    let service1 = serviceElement1.innerHTML
    service1 = 'Online Service'
    document.querySelector('.service-js').innerHTML = `${service1}`;

    let costElement4 = document.querySelector('.cost-js')
    let cost4 = costElement4.innerHTML
    cost4 = '$10/yr'
    document.querySelector('.cost-js').innerHTML = `${cost4}`;

    let serviceElement2 = document.querySelector('.service-js2')
    let service2 = serviceElement2.innerHTML
    service2 = 'Larger Storage'
    document.querySelector('.service-js2').innerHTML = `${service2}`;

    let costElement5 = document.querySelector('.cost-js2')
    let cost5 = costElement5.innerHTML
    cost5 = '$20/yr'
    document.querySelector('.cost-js2').innerHTML = `${cost5}`;
}

if (pickIt === 'Third') {
    if(playerMove === 'First') {
        let costElement7 = document.querySelector('.cost-main-js4')
        let cost7 = costElement7.innerHTML
        cost7 = '+$130'
        document.querySelector('.cost-main-js4').innerHTML = `${cost7}`;
    }else if (playerMove === 'Second') {
        let costElement8 = document.querySelector('.cost-main-js4')
        let cost8 = costElement8.innerHTML
        cost8 = '+$160'
        document.querySelector('.cost-main-js4').innerHTML = `${cost8}`;  
    }else if (playerMove === 'Third') {
        let costElement9 = document.querySelector('.cost-main-js4')
        let cost9 = costElement9.innerHTML
        cost9 = '+$190'
        document.querySelector('.cost-main-js4').innerHTML = `${cost9}`;  
    }

    let serviceElement1 = document.querySelector('.service-js')
    let service1 = serviceElement1.innerHTML
    service1 = 'Online Service'
    document.querySelector('.service-js').innerHTML = `${service1}`;

    let costElement4 = document.querySelector('.cost-js')
    let cost4 = costElement4.innerHTML
    cost4 = '$10/yr'
    document.querySelector('.cost-js').innerHTML = `${cost4}`;

    let serviceElement3 = document.querySelector('.service-js3')
    let service3 = serviceElement3.innerHTML
    service3 = 'Customizable Profile'
    document.querySelector('.service-js3').innerHTML = `${service3}`;

    let costElement6 = document.querySelector('.cost-js3')
    let cost6 = costElement6.innerHTML
    cost6 = '$30/yr'
    document.querySelector('.cost-js3').innerHTML = `${cost6}`;
}

let serviceElement4 = document.querySelector('.service-js4')
    let service4 = serviceElement4.innerHTML
    service4 = 'Total(per month)'
    document.querySelector('.service-js4').innerHTML = `${service4}`;

    // let costElement7 = document.querySelector('.cost-main-js4')
    // let cost7 = costElement7.innerHTML
    // cost7 = ''
    // document.querySelector('.cost-main-js4').innerHTML = `${cost7}`;
    
if(playerMove === 'First') {
    let planElement1 = document.querySelector('.plan-js')
    let plan1 = planElement1.innerHTML
    plan1 = 'Arcade(Yearly)'
    document.querySelector('.plan-js').innerHTML = `${plan1}`;

    let costElement1 = document.querySelector('.cost-main-js')
    let cost1 = costElement1.innerHTML
    cost1 = '$90/yr'
    document.querySelector('.cost-main-js').innerHTML = `${cost1}`;
}else if(playerMove === 'Second') {
    let planElement1 = document.querySelector('.plan-js')
    let plan1 = planElement1.innerHTML
    plan1 = 'Advanced(Yearly)'
    document.querySelector('.plan-js').innerHTML = `${plan1}`;

    let costElement1 = document.querySelector('.cost-main-js')
    let cost1 = costElement1.innerHTML
    cost1 = '$120/yr'
    document.querySelector('.cost-main-js').innerHTML = `${cost1}`
}else if(playerMove === "Third") {
    let planElement1 = document.querySelector('.plan-js')
    let plan1 = planElement1.innerHTML
    plan1 = 'Pro(yearly)'
    document.querySelector('.plan-js').innerHTML = `${plan1}`;

    let costElement1 = document.querySelector('.cost-main-js')
    let cost1 = costElement1.innerHTML
    cost1 = '$150/yr'
    document.querySelector('.cost-main-js').innerHTML = `${cost1}`
}

function planButton(playerMove) {
    if(playerMove === 'First') {
        document.querySelector('.right-btn1').style.backgroundColor = 'rgb(242, 242, 247)';
        document.querySelector('.right-btn2').style.backgroundColor = 'white';
        document.querySelector('.right-btn3').style.backgroundColor = 'white';
    }else if(playerMove === 'Second') {
        document.querySelector('.right-btn1').style.backgroundColor = 'white';
        document.querySelector('.right-btn2').style.backgroundColor = 'rgb(242, 242, 247)';
        document.querySelector('.right-btn3').style.backgroundColor = 'white';
    }else if (playerMove === 'Third') {
        document.querySelector('.right-btn1').style.backgroundColor = 'white';
        document.querySelector('.right-btn2').style.backgroundColor = 'white';
        document.querySelector('.right-btn3').style.backgroundColor = 'rgb(242, 242, 247)';
    }
    localStorage.setItem('playerMove', JSON.stringify(playerMove));
}
// planButton(playerMove);




document.querySelector('.right-div1').addEventListener('click', () => {
    if (document.querySelector('.right-btn4').style.backgroundColor === 'rgb(242, 242, 247)') {
        document.querySelector('.right-btn4').style.backgroundColor = 'white';
    }else  {
    document.querySelector('.right-btn4').style.backgroundColor = 'rgb(242, 242, 247)';
    }
})

document.querySelector('.right-div2').addEventListener('click', () => {
    if (document.querySelector('.right-btn5').style.backgroundColor === 'rgb(242, 242, 247)') {
        document.querySelector('.right-btn5').style.backgroundColor = 'white';
    }else  {
    document.querySelector('.right-btn5').style.backgroundColor = 'rgb(242, 242, 247)';
    }
})

document.querySelector('.right-div3').addEventListener('click', () => {
    if (document.querySelector('.right-btn6').style.backgroundColor === 'rgb(242, 242, 247)') {
        document.querySelector('.right-btn6').style.backgroundColor = 'white';
    }else  {
    document.querySelector('.right-btn6').style.backgroundColor = 'rgb(242, 242, 247)';
    }
})
