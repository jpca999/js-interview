// find the max chars inside the string provided

function findMaxChars(string) {
  const	charMap = {};
	let max = 0;
	let maxChar = '';

		for( let char of string ){  // for string / array we use of
			if ( charMap[char] ) {
				charMap[char] ++;
			}
			else {
				charMap[char] = 1;
			}
		}

		console.log('22-  charMap = ', charMap );
		// give the character that is max times repeated ?

		for( let char in charMap ){  // for obj we use in
			if ( charMap[char] > max ) {
				 max = charMap[char];
				 console.log(' 22 - max = ' ,  max );
				 maxChar = char;
				 console.log(' 25 - maxChar = ' ,  maxChar );
			}
			else {
				charMap[char] = 1;
			}
		}



}

findMaxChars('Hello There!');
