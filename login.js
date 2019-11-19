var attempt = 3; 
function validate(){
var Username = document.getElementById("Username").value;
var Password = document.getElementById("password").value;
if ( Username == "KEPALASEKOLAH" && Password == "KEPALASEKOLAH"){
window.location = "KEPALASEKOLAHHOMEPAGE.html";
return false;
}
else if ( Username == "GURU" && Password == "GURU"){
window.location = "GURUHOMEPAGE.html"; 
return false;
}
else if ( Username == "SISWA" && Password == "SISWA"){
window.location = "SISWAHOMEPAGE.html"; 
return false;
}
else if ( Username == "TENAGAUSAHA" && Password == "TENAGAUSAHA"){
window.location = "TUHOMEPAGE.html"; 
return false;
}
else{
attempt --;
alert("Login Failed "+attempt+" attempt;");
if( attempt == 0){
document.getElementById("Username").disabled = true;
document.getElementById("Password").disabled = true;
document.getElementById("Login").disabled = true;
return false;
}
}
}