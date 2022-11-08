lis_1 = document.getElementById("f");
lis_2 = document.getElementById("om");
li_1 = document.getElementById("ft");
li_2 = document.getElementById("cp");
let c = 0;
li_1.onclick = function() {
    lis_1.style.display = "block";
    c++;
    if (c == 2) {
        lis_1.style.display = "none";
        c = 0;
    }
}
li_2.onclick = function() {
    lis_2.style.display = "block";
    c++;
    if (c == 2) {
        lis_2.style.display = "none";
        c = 0;
    }
}