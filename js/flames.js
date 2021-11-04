const flames = (flamesInput1, flamesInput2) => {
    // VARIABLES
    const person1 = flamesInput1.value;
    const person2 = flamesInput2.value;
    const flamesArr = ['Friends', 'Lovers', 'Aquaintances', 'Married', 'Enemies', 'Strangers'];
    let flameObj = {};

    // HTML ELEMENTS
    const msg = document.createElement('div');
    msg.setAttribute('id', 'flamesAlert');
    let alertmsg = '';

    // IF EMEPTY STRING
    if(person1 === '' || person2 === ''){
        alertmsg = 'Please fill in all the fields';
        msg.classList.add('alert', 'alert-danger', 'mx-3', 'mb-3', 'text-justify');

        setTimeout(function(){
            msg.classList.remove('alert', 'alert-danger', 'mx-3', 'mb-3', 'text-justify');
            msg.remove();
        }, 1500);

    }else{
        // IF NOT EMPTY STRING
        const name1arr = person1.toLowerCase().split(" ").join("").split("");
        const name2arr = person2.toLowerCase().split(" ").join("").split("");
        
        /**
         * Store each letter in the variable flameObj and count their occurences.
         * If there is already a similar letter stored, increment its value.
         * Else, assign 1 as its value.
         */
        // FIRST PERSON 
        name1arr.forEach(function(char){
            if(flameObj[char]){
                flameObj[char]++;
            }else{
                flameObj[char] = 1;
            }
        });

        // SECOND PERSON
        name2arr.forEach(function(char2){
            if(flameObj[char2]){
                flameObj[char2]++;
            }else{
                flameObj[char2] = 1;
            }
        });

        /**
         * Filter the objects (letters) with more than one occurence,
         * then get their total
         */
        const sum = Object.values(flameObj).filter(val => val > 1).reduce((total, num) => total + num, 0);

        /**
         * To see which letter the sum stops, we must get the remainder
         * of the sum and length of the acronym FLAMES (in which its equivalent meanings
         * are stored in an array named flamesArr). 
         */
        const size = flamesArr.length;
        function remainder(){ 
            let index = sum % size;
            if(index > size){
                // If the remainder is larger than the array size, then perform recursion
                remainder();
            }else if(index <= size){
                // Else, if the remainder is smaller than or equal to the array size, then return the result
                return index;
            }
        }

        // Call remainder function to get index
        const ctr = remainder();

        if(ctr === 0){
            /**
             * If the remainder is 0, then the count stops at the last letter, 
             * or in this case, last array index (length - 1)
             */
            alertmsg = flamesArr[size - 1];

        }else{
            /**
             * Else, if the remainder is not zero, then the count stops at the
             * remainder minus 1
             */
            alertmsg = flamesArr[ctr-1];
        }

        msg.classList.add('alert', 'alert-success', 'mx-3', 'mb-3', 'text-justify');
        
        setTimeout(function(){
            msg.remove();
        }, 3000);
    }

    // ATTACH MESSAGE
    // Append text node
    let txtnode = document.createTextNode(alertmsg);
    // Append to div
    msg.appendChild(txtnode);
    document.querySelector('#flames-card').appendChild(msg);
};

export default flames;