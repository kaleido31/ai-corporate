function identityCheck() {
const correctCode = "123";
let userCode = prompt("Prove Your Identity...");
if (userCode===correctCode) {
    alert("SUCCESS!!!")
    document.getElementById("main").style.display="block";
    document.getElementById("vFail").style.display="none";
} else {
    document.getElementById("main").style.display="none";
    alert("FAILED!!! RELOAD TO TRY AGAIN")
}

}
window.onload=identityCheck;