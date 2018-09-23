let str = 'PAYPALISHIRING';

function cover (s, numRows) {
	let len = s.length;
	if(len <= numRows ) return s;
	if(numRows === 1) return s;
	let result = '', len2;
	let i = 0, j = 2*numRows  - 2 - i, cu = numRows;

	let loop = function(p) {
		if(s.charAt(p)) {
			result += s.charAt(p);
			if(j - i !== 0) {
			  loop(p + j - i);
			} else {
				loop(p + 2*numRows - 2); 
			}
		}
	}

	while(cu-- > 0) {
		if(j - i !== 0) {
		  result += s.charAt(i);
		}
		loop(j);
		i++;
		j = 2*numRows  - 2 - i; 
	}
	return result;
	
}

console.log(cover(str, 4));