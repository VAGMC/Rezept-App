// variables

let randomIndexNumber
let numRecent = 0


// Main button function

document.getElementById("RandomRecipe").onclick = function(){
    
    displayResult();                                                    // Display possible result
    
    addToRecent();                                                      // Add Result to recent list
        
    updateRecentList();                                                 // Remove last dish from recent list
    
}

// creating a result

function displayResult(){  
    
    randomIndexNumber =  Math.floor(Math.random()*recipeList.length);   // Generate random recipeList index number
    numRecent = 0;                                                      // Reset before checking 
    recentList.forEach(checkIfInRecentList);      	                    // Check if in recentList already    

    if (numRecent == 0){
        document.getElementById("Result").innerHTML = "Heute gibt es " + recipeList[randomIndexNumber] + "! :)"
    }
  
    else if (numRecent != 0 && recentList.length < recipeList.length){
        displayResult();
        return;
    }  
    else if(numRecent != 0 && recipeList.length < 7 && recipeList.length >= recentList.length){
        document.getElementById("Result").innerHTML = "Sie müssen erst mehr Gerichte hinzufügen."
        return;
    }
    else {
        displayResult();
        return;
    }

}



// Check if in recentList already

function checkIfInRecentList(value){                                   

    if (recipeList[randomIndexNumber] == value){
    numRecent += 1;
    }   
  
}


// Add to recentList

function addToRecent(){
    
    if (numRecent == 0){
        recentList.push(recipeList[randomIndexNumber]);                     
    }

}


//keep recentList as the last 7 results

function updateRecentList(){

    if (recentList.length == 8){
        recentList.shift();
    }

}
