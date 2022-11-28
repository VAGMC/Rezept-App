let randomIndexNumber
let notInRecent = true

document.getElementById("RandomRecipe").onclick = function(){

    randomIndexNumber =  Math.floor(Math.random()*recipeList.length);
    
    document.getElementById("Result").innerHTML = "Heute gibt es "      // Display result
    + recipeList[randomIndexNumber] + "! :)";                           

    recentList.forEach(checkIfInRecentList);      	                    // Check if in recentList already

    addToRecent();                                                      // Add Result to recent list
    
    console.log(recentList);
    
    updateRecentList();                                                 // Remove last dish from recent list

    notInRecent = true;                                                 // Reset 
}


// Check if in recentList already

function checkIfInRecentList(value){                                   

    if (recipeList[randomIndexNumber] == value){
        notInRecent = false;
    }   

}


// Add to recentList

function addToRecent(){
    
    if (notInRecent == true){
        recentList.push(recipeList[randomIndexNumber]);                     
    }

}


//keep recentList as the last 7 results

function updateRecentList(){

    if (recentList.length == 7){
        recentList.shift();
    }
}


// Bestätigen Button hinzufügen