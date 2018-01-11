let sonnetDiv = document.getElementById("sonnet").innerHTML;

function sonnetLength() {
    var length = sonnetDiv.length;
console.log(length,"works");
sonnetDiv
}

function sonnetIndex() {
    var index = sonnetDiv.indexOf("orphans");
    console.log(index,"index");
}

function sonnetReplace() {
    var replace = sonnetDiv.replace("winter", "yuletide");
    console.log(replace, "replace");
}





sonnetReplace();
sonnetIndex();
sonnetLength();