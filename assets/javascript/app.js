
 var timeLeft = 60;
 var timer = setInterval(function(){
 	timeLeft--;
 	document.getElementById('quiz-time-left').innerHTML = timeLeft +  ' seconds remaining...';
   	  if(timeLeft <=0){   
      clearInterval(timer);
      document.getElementById('quiz-time-left').innerHTML = 'TIMES UP!';
	}
 },1000);


var check = function(){
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var question10 = document.quiz.question10.value;
var correct = 0;
var incorrect = 0;
var unanswered =0;

	if (question1 === '1926') {
		correct++;
	}
	else if (question1 === '') {
		unanswered++;
	}
	else {
		incorrect++;
	}
	if (question2 === 'San Francisco') {
		correct++;
	}
	else if (question2 === '') {
		unanswered++;
	}
	else {
		incorrect++;
	}
	if (question3 === 'left') {
		correct++;
	}
	else if (question3 === '') {
		unanswered++;
	}
	else {
		incorrect++;
	}
	if (question4 === 'The Jungle Book') {
		correct++;
	}
	else if (question4 === '') {
		unanswered++;
	}
	else {
		incorrect++;
	}
	if (question5 === '1,000') {
		correct++;
	}
	else if (question5 === '') {
		unanswered++;
	}
	else {
		incorrect++;
	}
	if (question6 === 'Space Mountain') {
		correct++;
	}
	else if (question6 === '') {
		unanswered++;
	}
	else {
		incorrect++;
	}
	if (question7 === '80,000') {
		correct++;
	}
	else if (question7 === '') {
		unanswered++;
	}
	else {
		incorrect++;
	}
	if (question8 === 'Dumbo') {
		correct++;
	}
	else if (question8 === '') {
		unanswered++;
	}
	else {
		incorrect++;
	}
	if (question9 === 'Beauty and the Beast') {
		correct++;
	}
	else if (question9 === '') {
		unanswered++;
	}
	else {
		incorrect++;
	}
	if (question10 === 'Snow White') {
		correct++;
	}
	else if (question10 === '') {
		unanswered++;
	}
	else {
		incorrect++;
	}
	//if(document.getElementById('button').clicked == true) || (timeLeft <= 0) {
	document.getElementById('score').style.visibility = 'visible';
	document.getElementById('number_correct').innerHTML = 'You got ' + correct + ' correct';
	document.getElementById('number_incorrect').innerHTML = 'You got ' + incorrect + ' incorrect';
	document.getElementById('number_unanswered').innerHTML = 'Questions unanswered: ' + unanswered;	
//}
};
