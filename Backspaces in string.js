https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/solutions/javascript

    function cleanString(s) {
        let arr = [];
        for(let i = 0; i < s.length; i++){
            if(s[i] !== '#'){
                arr.push(s[i])
            }else arr.pop();
        }
        return arr.join('');
    }