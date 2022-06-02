let ageSub = document.querySelector('#ageSub');
let ageAdd = document.querySelector('#ageAdd');
let ageValue = document.querySelector('.ageValue');
let contain = document.querySelector('.container')

let weightSub = document.querySelector('#weightSub');
let weightAdd = document.querySelector('#weightAdd');
let weightValue = document.querySelector('.weightValue');

let heightSub = document.querySelector('#heightSub');
let heightAdd = document.querySelector('#heightAdd');
let heightValue = document.querySelector('.heightValue');

let submit = document.querySelector('.submit');

let bmii = document.querySelector('.bmi');
let category = document.querySelector('.category');
let bmiDetails = document.querySelector('.bmiDetail');
let print = document.querySelector('.print');
let container = document.querySelector('.container');
let resultPage = document.querySelector('.resultPage');

let ageVal = 0;
let weightVal = 0;
let heightVal = 0;
let bmi = 0;

ageSub.addEventListener('click', sub)
ageAdd.addEventListener('click', add)
weightSub.addEventListener('click', sub2)
weightAdd.addEventListener('click', add2)
heightSub.addEventListener('click', sub3)
heightAdd.addEventListener('click', add3)
submit.addEventListener('click', bmiCalculate)
print.addEventListener('click', () => {window.print(); location.reload(); bmi = 0;});

//Methods to adding age, weight and height values....
function sub(){
    ageVal--;
    ageValue.innerHTML = `${ageVal} YRS`;
}
function sub2(){
    weightVal--;
    weightValue.innerHTML = `${weightVal} LB`;
}

function sub3(){
    heightVal--;
    heightValue.innerHTML = `${heightVal} CM`;
}

function add(){
    ageVal += 5;
    ageValue.innerHTML = `${ageVal} YRS`;
}
function add2(){
    weightVal += 10;
    weightValue.innerHTML = `${weightVal} LB`;
}

function add3(){
    heightVal += 10;
    heightValue.innerHTML = `${heightVal} CM`;
}

//Method to calculate bmi ---> Formular = weight / height ** 2...
function bmiCalculate(){
    let weight = weightVal / 2.20462262185;
    let height = heightVal / 100;

    let bmiCalc = weight / (height * height);
    bmi = bmiCalc;
    bmi = bmi.toFixed(2);

    container.style.display = 'none';
    resultPage.style.display = 'block';
    bmii.innerHTML = bmi;
    
    if(bmi < 18.50){
        category.innerHTML = "Low";
        bmiDetails.innerHTML = `Low BMI range: ${bmi} Low health consequences `
    }
    else if(bmi >= 18.50 && bmi <= 24.99){
        category.innerHTML = "Normal";
        bmiDetails.innerHTML = `Normal BMI range: ${bmi} Average health consequences`
    }
    else{
        if(bmi >= 25.00 && bmi <= 29.99){
        category.innerHTML = "Pre-Obese";
        bmiDetails.innerHTML = `Pre-Obese BMI range: ${bmi} Increased health consequences`
       } 
       else if(bmi >= 30.00 && bmi <= 34.99){
        category.innerHTML = "Obese class 1";
        bmiDetails.innerHTML = `Obese class 1 BMI range: ${bmi} Moderate health consequences`
      }
      else if(bmi >= 35.00 && bmi <= 39.99){
        category.innerHTML = "Obese class 2";
        bmiDetails.innerHTML = `Obese class 2 BMI range: ${bmi} Severe health consequences`
     }else{
        category.innerHTML = "Obese class 3";
        bmiDetails.innerHTML = `Obese class 3 BMI range: ${bmi} Very Severe health consequences`
     }  
}

}