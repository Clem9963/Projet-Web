function initConnect(){
    var login = document.getElementById('login');
    var password = document.getElementById('password');
    if(login.value.length > 0 && password.value.length > 0){
        var xhr = new XMLHttpRequest();
        var form = new FormData();
        form.append('username', login.value);
        form.append('userpwd', password.value);

        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                var newWindow = window.open();
                newWindow.document.write(xhr.responseText);
            }
        }


        xhr.open('POST', '../htbin/login.py');
        xhr.send(form);
    }
    else {

    }
}