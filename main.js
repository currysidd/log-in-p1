function logIn(){
name=document.getElementById("email").value
localStorage.setItem("email",name)
window.location="chatpage.html"
}