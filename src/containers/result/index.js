import React from 'react';
import PropTypes from 'prop-types';

	function Result(answers) {
		var result=[];
		var index;

		//Normalization to 1 bad to 5 good
		//Comparison
		console.log(answers[8][0]);
		// 8 Sleep
		// 0 is good, 7 is bad
		index=8;
		if(answers[index][1]<1)result=[...result, ['sleep',5]];
		else if (answers[index][1]<2)result=[...result, ['sleep',4]];
		else if (answers[index][1]<3)result=[...result, ['sleep',3]];
		else if (answers[index][1]<4)result=[...result, ['sleep',2]];
		else result=[...result, ['sleep',1]];
		console.log('queto è Result');
		console.log(result);

		// 6 Exercise
		// 0 is bad, 7 is good
		index=6;
		if(answers[index][1]===0)result=[...result, ['exercise',1]];
		else if (answers[index][1]===1)result=[...result, ['exercise',2]];
		else if (answers[index][1]===2)result=[...result, ['exercise',3]];
		else if (answers[index][1]===3)result=[...result, ['exercise',4]];
		else result=[...result, ['exercise',5]];

		// 7 Nutrition
		index = 7;
		result = [...result, ['nutrition', answers[index][1] ]];

		// 10 Purpose
		// 0 is bad, 7 is good
		index = 10;
		if(answers[index][1]<3)result=[...result, ['purpose',1]];
		else if (answers[index][1]<4)result=[...result, ['purpose',2]];
		else if (answers[index][1]<=5)result=[...result, ['purpose',3]];
		else if (answers[index][1]<=6)result=[...result, ['purpose',4]];
		else if (answers[index][1]<=7)result=[...result, ['purpose',5]];


		// 9 Loneliness
		// 1 is good, 5 is bad, 6 to avoid
		index = 9;
		if(answers[index][1]===1)result=[...result, ['loneliness',5]];
		else if (answers[index][1]===2)result=[...result, ['loneliness',4]];
		else if (answers[index][1]===3)result=[...result, ['loneliness',3]];
		else if (answers[index][1]===4)result=[...result, ['loneliness',2]];
		else if (answers[index][1]===5)result=[...result, ['loneliness',1]];

		console.log(result);

		result.sort(function(a,b ){return a[1]-b[1]});
		console.log(result[0] +" " + result[1] +" "+ result[2] )

		return ( [ result[0],result[1],result[2] ]);
	}

	Result.propTypes = {
		quizResult: PropTypes.string.isRequired,
	};

	export default Result;
