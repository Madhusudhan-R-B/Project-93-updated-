function adduser(){
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location.replace("room_page.html");
}