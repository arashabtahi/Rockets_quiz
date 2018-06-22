function submitAnswers(){

	var total = 5 ;
	var score = 0 ;

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	
	if(q1 == undefined || q1 == ""){
		alert("You missed question 1");
		return false;
	}
    if(q2 == undefined || q2 == ""){
		alert("You missed question 2" );
		return false;
	}
	if(q3 == undefined || q3 == ""){
		alert("You missed question 3" );
		return false;
	}
	if(q4 == null || q4 == ""){
		alert("You missed question 4" );
		return false;
    }
	if(q5 == null || q5 == ""){
		alert("You missed  question 5" );
		return false;
	}


	

	if(q1 == 'c'){
		score += 1
	}

	if(q2 == 'b'){
		score += 1
	}

	if(q3 == 'd'){
		score += 1
	}

	if(q4 == 'b'){
		score += 1
	}

	if(q5 == 'c'){
		score += 1
	}

	alert('your score is ' + score);

	

   
	
   	
   	var res = document.getElementById("results");
   	res.innerHTML = "<h3>You socred <span> "+score+"</span> out of <span>"+total+"</span>&nbsp;&nbsp;<a href='answer.html'>Click Here For The Answers</a></h3> ";
   	alert("You scored "+score+" out of " +total);

   	return false

   	
   	


}