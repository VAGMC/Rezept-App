'use strict';

//variables

let totalNumber
let newRecipe
let isNewRecipe = true
let noRecentRecipe = true

//Arrays

const recipeList = [];
const recentList = [];

// Main Button Function

document.getElementById("add-recipe").onclick = function () {

    clearTexts();
    // clear user messages

    newRecipe = document.getElementById("user-input").value;

    recipeList.forEach(checkForDouble);
    // Check Element for double with function   

    recentList.forEach(checkForRecent);
    // Check Element if used in the last week

    addToList();
    // Adding

    displayMessage();
    // Show message

    reset();
    // Reset to default    

}


function addToList() {
    if (isNewRecipe == true && newRecipe != "" && noRecentRecipe == true) {
        // Add the Element if conditions are met

        recipeList.push(newRecipe);
    }

}


function displayMessage() {

    if (newRecipe != "" && isNewRecipe == true) {
        document.getElementById("was-added").innerHTML = "Sie haben " + newRecipe +
            " zu Ihren Gerichten hinzugefügt."
        // Display "added" message
    }
    else if (newRecipe != "") {
        document.getElementById("was-added").innerHTML = "Das Gericht befindet sich bereits in Ihrer Liste."
        // Display "repetition" message
    }
    else {
        document.getElementById("was-added").innerHTML = "Sie müssen ein Rezept angeben."
        // Back to default 
    }

}


function reset() {
    document.getElementById("user-input").value = "";
    isNewRecipe = true;
    // make true again as default

    noRecentRecipe = true;

}


// Function to check for doubles

function checkForDouble(value) {
    if (newRecipe == value) {
        isNewRecipe = false;
    }

}


// no Repetition in one Week 

function checkForRecent(value) {
    if (newRecipe == value) {
        noRecentRecipe = false;
    }

}

// clear Texts

function clearTexts() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("recipe-list").innerHTML = "";
    document.getElementById("was-added").innerHTML = "";
}