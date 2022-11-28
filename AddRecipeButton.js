//variables

let totalNumber
let newRecipe
let isNewRecipe = true
let noRecentRecipe = true

//Arrays

const recipeList = [];
const recentList = [];



// Main Button Function

document.getElementById("AddRecipe").onclick = function(){

    newRecipe = document.getElementById("UserInput").value;
  
    recipeList.forEach(checkForDouble);                       // Check Element for double with function   

    recentList.forEach(checkForRecent);                       // Check Element if used in the last week

    addToList();                                              // Adding
    
    console.log(recipeList);
    
    displayMessage();                                         // Show message

    reset();                                                  // Reset to default    
   
}

function addToList(){
    if(isNewRecipe == true && newRecipe != 0 && noRecentRecipe == true){ // Add the Element if conditions are met
        recipeList.push(newRecipe);
//      console.log(isNewRecipe);
    } 
}

function displayMessage(){

     if (newRecipe != "" && isNewRecipe == true){
        document.getElementById("wasAdded").innerHTML = "Sie haben " + newRecipe + 
    " zu Ihren Gerichten hinzugefügt."
    }
    else if (newRecipe != "") {
        document.getElementById("wasAdded").innerHTML = "Das Gericht befindet sich bereits in Ihrer Liste."
    }
    else {
        document.getElementById("wasAdded").innerHTML = ""
    }
}

function reset(){
    document.getElementById("UserInput").value = "";
    isNewRecipe = true;                                       // make true again as default
    noRecentRecipe = true;
}

// Function to check for doubles

function checkForDouble(value){           
    if (newRecipe == value ){
        isNewRecipe = false;
    }

}

// no Repetition in one Week 

function checkForRecent(value){
    if (newRecipe == value){
        noRecentRecipe = false;
    }

}