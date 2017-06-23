$(document).ready(function(){
	$('#twilio-form').submit(function(){
		var recipient = $('#phoneNumber').val();
		var message = $('#message').val();
		console.log('Sending a message to ' + recipient)
		console.log('Sending the message ' + message)

		accountSid = '<your sid>'	
		secret = '<your secret>'
		var twilio = 'https://api.twilio.com/2010-04-01/Accounts/'+accountSid+'/Messages.json';
		message = {
			To: recipient,
			From: '+15005550006',
			Body: message
		}
		
		encoded = $.param(message)
		console.log('Sending message ' + JSON.stringify(message))
		console.log('After encoding its ' + encoded)
		
		var completeHandler = function (response) {
			console.log(response);
		}

		var errorHandler = function (response) {
			console.log(response)
		}

		$.post({
			url: twilio,
			data: encoded,
			success: completeHandler,
			error: errorHandler,
			headers: { 'Authorization': 'Basic ' + btoa(accountSid + ":" + secret)}
		})
	});
});




