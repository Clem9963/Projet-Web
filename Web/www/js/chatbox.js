document.getElementById('chatbox').addEventListener('click', function(e){
	var x = document.getElementById("chatbox");
	if (x.className === "chatbox") {
		x.className = "chatboxActive";
	} else {
		x.className = "chatbox";
	}
});

document.getElementById('chatForm').addEventListener('click', function(e){
	e.stopPropagation();
});

/*document.getElementById('chatForm').addEventListener('submit', function(e){
	var form = new FormData();
	var msg = document.forms['chat'].elements["chatmsg"].value;
	if(msg.length > 0) form.append('msg', msg);

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == XMLHttpRequest.DONE) {
			document.forms['chat'].elements["chatmsg"].value = "";
			var obj = JSON.parse(xhr.response);
			if(obj.num == -1)
				alert(obj.msg);
			else// if(obj.num == 0)
				document.getElementById("chatReturnedMsg").textContent = obj.msg;
				
		}
	}

	xhr.open('POST', '../htbin/chatsend.py');
	xhr.send(form);

	e.preventDefault();
});*/

$(function() {
    afficheConversation();
      
    $('#chatForm').submit(function(e) {
		e.preventDefault();

        var message = $('#chatmsg').val();
		$.post('../htbin/chatsend.py', {'msg': message}, function(data) {

			

			$('#chatmsg').val('');
			if(data.num == -1)
				alert(data.msg);
			else
				$("#chatReturnedMsg").text(data.msg);

			afficheConversation();
		});
    });

    function afficheConversation() {
		$.get('../htbin/chatget.py', function(data) {

			
			var isScrolledToBottom = $('#chatbox')[0].scrollHeight - $('#chatbox').scrollTop() == $('#chatbox').innerHeight();

			$("#conversation").empty();

			var line, date, time, user, msg;
			$.each(data, function(index, message) {
				line = document.createElement('div');
				line.className = "chatMessage";

				date = document.createElement('div');
				date.className = "chatDate";
				date.append(message.date);
				time = document.createElement('div');
				time.className = "chatTime";
				time.append(message.time);
				user = document.createElement('div');
				user.className = "chatUser";
				user.append(message.user);
				msg = document.createElement('div');
				msg.className = "chatmsg";
				msg.append(message.msg);

				line.append(date);
				line.append(time);
				line.append(user);
				line.append(msg);

				$("#conversation").append(line);
			});

			if(isScrolledToBottom)
				$('#chatbox').scrollTop($('#chatbox')[0].scrollHeight - $('#chatbox').innerHeight())
		});
    }
      
    //setInterval(afficheConversation, 4000);
  });
