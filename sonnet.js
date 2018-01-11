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


function sonnetReplaceAll() {
    var replace = sonnetDiv.replace("winter", "yuletide");
    var replaceThe = replace.replace(/the/g,"a large");
    var newString = document.getElementById("sonnet").innerHTML = `<p>${replaceThe}</p>`;
}


sonnetReplaceAll();
sonnetIndex();
sonnetLength();