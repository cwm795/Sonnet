let sonnetDiv = document.getElementById("sonnet").innerHTML;

function sonnetLength() {
    var length = sonnetDiv.length;
console.log(length,"works");
}

function sonnetIndex() {
    var index = sonnetDiv.indexOf("orphans");
    console.log(index,"index");
}





sonnetIndex();
sonnetLength();