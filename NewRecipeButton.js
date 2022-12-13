'use strict';

// variables

let randomIndexNumber
let numRecent = 0
let maxRecentRecipes = 4;

// Main button function

document.getElementById("random-recipe").onclick = function () {

    clearTexts();
    // clear user messages

    displayResult();
    // Display possible result

    addToRecent();
    // Add result to recent list

    updateRecentList();
    // Remove last dish from recent list

}

// creating a result

function displayResult() {

    randomIndexNumber = Math.floor(Math.random() * recipeList.length);
    // Generate random recipeList index number

    numRecent = 0;
    // Reset before checking 

    recentList.forEach(checkIfInRecentList);
    // Check if in recentList already and increment numRecent by one if it is

    if (recipeList.length === 0) {
        document.getElementById("result").innerHTML = "Sie müssen zuerst Gerichte hinzufügen."
        return;
        // no recipes given

    } else if (numRecent === 0) {
        document.getElementById("result").innerHTML = "Heute gibt es " + recipeList[randomIndexNumber] + "! :)"
        // display result message

    } else if (numRecent != 0 && recipeList.length <= maxRecentRecipes && recipeList.length <= recentList.length) {
        document.getElementById("result").innerHTML = "Sie müssen erst mehr Gerichte hinzufügen."
        return;
        // special case: less saved recipes than maxRecentRecipes, result was recent and no other results are possible anymore 

    } else {
        displayResult();
        return;
        // result was recent, so repeat function

    }

}


// Check if in recentList already

function checkIfInRecentList(recentListEntry) {

    if (recipeList[randomIndexNumber] == recentListEntry) {
        numRecent += 1;
    }

}


// Add to recentList

function addToRecent() {

    if (numRecent == 0) {
        recentList.unshift(recipeList[randomIndexNumber]);
        // console.log(recentList);
    }

}


//keep recentList leght at maxRecentRecipes

function updateRecentList() {

    if (recentList.length === maxRecentRecipes) {
        recentList.pop();
        // console.log(recentList);
    }

}
