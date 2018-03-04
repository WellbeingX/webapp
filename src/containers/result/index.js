import React from 'react';
import PropTypes from 'prop-types';

	function Result(answers) {
		var result=[];
		var index;

		//Normalization to 1 bad to 5 good
		//Comparison

		// 8 Sleep
		// 0 is good, 7 is bad
		index=8;
		console.log('esame');
		console.log(answers[index-1][1]);
		console.log(answers[index-1][1]==='0');
		switch (answers[index-1][1]){
			case '0':
				result=[...result, ['sleep',5]];
				break;
			case '1':
				result=[...result, ['sleep',4]];
				break;
			case '2':
				result=[...result, ['sleep',3]];
				break;
			case '3':
				result=[...result, ['sleep',2]];
				break;
			default:
				result=[...result, ['sleep',1]];
		}

		// 6 Exercise
		// 0 is bad, 7 is good
		index=6;
		switch (answers[index-1][1]){
			case '0':
				result=[...result, ['exercise',1]];
				break;
			case '1':
				result=[...result, ['exercise',2]];
				break;
			case '2':
				result=[...result, ['exercise',3]];
				break;
			case '3':
				result=[...result, ['exercise',4]];
				break;
			default:
				result=[...result, ['exercise',5]];
		}

		// 7 Nutrition
		index = 7;
		switch (answers[index-1][1]){
			case '1':
				result=[...result, ['nutrition',1]];
				break;
			case '2':
				result=[...result, ['nutrition',2]];
				break;
			case '3':
				result=[...result, ['nutrition',3]];
				break;
			case '4':
				result=[...result, ['nutrition',4]];
				break;
			default:
				result=[...result, ['nutrition',5]];
		}

		// 10 Purpose
		// 0 is bad, 7 is good
		index = 10;
		switch (answers[index-1][1]){
			case '4':
				result=[...result, ['purpose',2]];
				break;
			case '5':
				result=[...result, ['purpose',3]];
				break;
			case '6':
				result=[...result, ['purpose',4]];
				break;
			case '7':
				result=[...result, ['purpose',5]];
				break;
			default:
				result=[...result, ['purpose',1]];
		}

		// 9 Loneliness
		// 1 is good, 5 is bad, 6 to avoid
		index = 9;
		switch (answers[index-1][1]){
			case '1':
				result=[...result, ['loneliness',5]];
				break;
			case '2':
				result=[...result, ['loneliness',4]];
				break;
			case '3':
				result=[...result, ['loneliness',3]];
				break;
			case '4':
				result=[...result, ['loneliness',2]];
				break;
			default:
				result=[...result, ['loneliness',1]];
		}
		console.log(result);

		result.sort(function(a,b ){return a[1]-b[1]});
		console.log(result[0] +" " + result[1] +" "+ result[2] )

		return ( [ result[0],result[1],result[2] ]);
	}

	Result.propTypes = {
		quizResult: PropTypes.string.isRequired,
	};

	export default Result;
