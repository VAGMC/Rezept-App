let randomIndexNumber
let numRecent = 0

document.getElementById("RandomRecipe").onclick = function(){

    
    
    displayResult();
    
    if (document.getElementById("Result").innerHTML == ""){
        console.log("reset")
        displayResult();
    }
    
    addToRecent();                                                      // Add Result to recent list
    
    console.log(recentList);
    
    updateRecentList();                                                 // Remove last dish from recent list
    
}

// creating a result

function displayResult(){  
    
    randomIndexNumber =  Math.floor(Math.random()*recipeList.length);
    numRecent = 0;                                                      // Reset before checking 
    recentList.forEach(checkIfInRecentList);      	                    // Check if in recentList already
    console.log(numRecent);
    
    if (numRecent == 0){
        console.log("läuft");
        document.getElementById("Result").innerHTML = "Heute gibt es " + recipeList[randomIndexNumber] + "! :)"
    }
    else if(numRecent != 0 && recipeList.length < 7) {
        console.log("läfut auch");
        document.getElementById("Result").innerHTML = "Sie müssen erst mehr Gerichte hinzufügen."
        return;
    }
    else {
        console.log("ja perfekt");
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


// Bestätigen Button hinzufügen