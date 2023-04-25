const ans = document.getElementById("ans")
const ans1 = document.getElementById("ans1")
const ans2 = document.getElementById("ans2")
function isMyFormValid() {
    if (ans.value == "Fantasmagorie" || ans.value == "fantasmagorie") alert("Chúc mừng, phần thưởng của bạn đây Hint -> 13[.-]")
    else alert("Sai rồi thử lại nào...")
}

function isMyFormValid1() {
    if (ans1.value == "45963158850") alert("Chúc mừng, phần thưởng của bạn đây Hint -> 12[.---]")
    else alert("Sai rồi thử lại nào...")
}

function isMyFormValid2() {
    if (ans2.value == "527") alert("Chúc mừng, phần thưởng của bạn đây Hint -> 8[.]")
    else alert("Sai rồi thử lại nào...")
}
