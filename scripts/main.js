'use strict';

var $errorMessage = $('.error-message');
var $button = $('#submit-button');

var $nameError = $('#name-error');
var $nameText = $('#name-text');

var $emailError = $('#email-error');
var $emailText = $('#email-text');

var $websiteError = $('#website-error');
var $websiteText = $('#website-text');

var $messageError = $('#message-error');
var $messageText = $('#message-text');

var click = 0;


function onButtonClick() {
	click++
	console.log(click);
	console.log($nameText.val());
	// checkArray.push($nameText.val());
	if($nameText.value === 'd') {
		($nameError).css({display: 'block'});
	}
}

$button.on('click', onButtonClick);
// console.log(checkArray);




// <a href="#" id="submit-button">
// 			<div class="button">
// 				<div class="submit">Submit</div>
// 			</div>
// 		</a>
