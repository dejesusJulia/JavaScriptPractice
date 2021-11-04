/**
 * Import modules
 */
import palindrome from "./palindrome.js";
import leapYear from "./leapyear.js";
import primeOrComposite from "./composite.js";
import flames from "./flames.js";

/**
 * PALINDROME VARIABLES
 */
const palInput = document.querySelector("#palindromeInput");
const palOutput = document.querySelector("#palindromeOutput");
const palBtn = document.querySelector("#palBtn");
const palReset = document.querySelector("#resetpalbtn")

/**
 * LEAP YEAR VARIABLES
 */
const leapYearInput = document.querySelector("#inputYear");
const leapYearBtn = document.querySelector("#leapYear-btn");
const leapYearReset = document.querySelector("#leapResetBtn")

/**
 * PRIME OR COMPOSITE VARIABLES
 */
const compositeInput = document.querySelector('#primeInput');
const compositeBtn = document.querySelector("#prime-btn");
const compositeReset = document.querySelector("#primeReset-btn");

/**
 * FLAMES VARIABLES
 */
const flamesInput1 = document.querySelector("#person1Name");
const flamesInput2 = document.querySelector("#person2Name");
const flamesBtn = document.querySelector("#submitFlames");
const flamesReset = document.querySelector("#resetFlames");

/**
 * Functions (For resetting the input fields) 
 */
const resetOneField = (fieldOne) =>{
    if(fieldOne.value == ""){
        // If field is empty
        fieldOne.classList.add("is-invalid");

        setTimeout(() => {
            fieldOne.classList.remove("is-invalid");
        }, 3000);
    }else{
        // If field is not empty
        fieldOne.value = "";
    }
};

const resetTwoFields = (fieldOne, fieldTwo) => {
    if(fieldOne.value == "" || !fieldTwo.readOnly && fieldTwo.value == ""){
        // If the first field is empty
        fieldOne.classList.add("is-invalid");
        // If second field is fillable and empty
        if(!fieldTwo.readOnly && fieldTwo.value == ""){
            fieldTwo.classList.add("is-invalid");

            setTimeout(() => {
                fieldTwo.classList.remove("is-invalid");
            }, 3000);
        }
    
        setTimeout(() => {
            fieldOne.classList.remove("is-invalid");
        }, 3000);
    }else{
        // If fields are not empty
        fieldOne.value = "";
        fieldTwo.value = "";
        
    }
};

/**
 * Event Listeners
 */
palBtn.addEventListener("click", () => {palindrome(palInput, palOutput)});
palReset.addEventListener("click", () => {resetTwoFields(palInput, palOutput)});

leapYearBtn.addEventListener("click", () => {leapYear(leapYearInput)});
leapYearReset.addEventListener("click", () => {resetOneField(leapYearInput)});

compositeBtn.addEventListener("click", () => {primeOrComposite(compositeInput)});
compositeReset.addEventListener("click", () => {resetOneField(compositeInput)});

flamesBtn.addEventListener("click", () => { flames(flamesInput1, flamesInput2) });
flamesReset.addEventListener("click", () => {resetTwoFields(flamesInput1, flamesInput2)});