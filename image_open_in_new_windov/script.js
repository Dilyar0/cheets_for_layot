let images = document.getElementById("images");

images.style.width = "200px"
images.style.height = "200px"

window.onload = () => {
    document.getElementById("lin").onclick = function() {
        window.open("../img/Screenshot_2021-07-31-16-42-04-884_com.instagram.android.jpg", "", "width = 700px", "height= 700px")
        return false;
    }
}