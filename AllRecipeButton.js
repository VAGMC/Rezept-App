'use strict';

document.getElementById("all-recipes").onclick = function () {

    clearTexts();
    // clear user messages

    if (recipeList.length != 0) {
        document.getElementById("recipe-list").innerHTML = recipeList.join("<br>");
    } else {
        document.getElementById("recipe-list").innerHTML = "Sie haben noch keine Rezepte gespeichert.";
    }
}