(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
	click++;
	console.log(click);
	console.log($nameText.val());
	// checkArray.push($nameText.val());
	if ($nameText.value === 'd') {
		$nameError.css({ display: 'block' });
	}
}

$button.on('click', onButtonClick);
// console.log(checkArray);

// <a href="#" id="submit-button">
// 			<div class="button">
// 				<div class="submit">Submit</div>
// 			</div>
// 		</a>

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map