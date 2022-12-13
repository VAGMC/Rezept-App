'use strict';

document.getElementById("recent-recipes").onclick = function () {
    // clear user messages
    clearTexts();

    if (recentList.length != 0) {
        document.getElementById("recipe-list").innerHTML = recentList.join("<br>");
    } else {
        document.getElementById("recipe-list").innerHTML = "Sie haben noch keine Rezepte verwendet.";
    }
}