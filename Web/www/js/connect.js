document.getElementById('connexionForm').addEventListener('submit', function(e){
    var username = document.forms['connect'].elements["username"].value;
    var userpwd = document.forms['connect'].elements["userpwd"].value;
    var xhr = new XMLHttpRequest();
    var form = new FormData();
    if(username.length > 0) form.append('username', username);
    if(userpwd.length  > 0) form.append('userpwd', userpwd);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.forms['connect'].elements["username"].value = "";
            document.forms['connect'].elements["userpwd"].value = "";
            document.getElementById("greetingMessage").textContent = xhr.responseText;
        }
    }

    xhr.open('POST', '../htbin/login.py');
    xhr.send(form);

    e.preventDefault();
});