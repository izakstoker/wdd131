// Update the current year in the element with id "currentyear"
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

// Update the last modified date in the element with id "lastModified"
document.getElementById("lastModified").innerHTML = "Last modified on " + document.lastModified;