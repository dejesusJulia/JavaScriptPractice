const palindrome = (palindromeInput, palindromeOutput) => {

    if(palindromeInput === ''){
        // If input is empty
        palindromeInput.classList.add('is-invalid');
    }else{

        // Enable Input Field for Output
        palindromeOutput.disabled = false;

        // Original word
        let palOrig = palindromeInput.value.toLowerCase().split(' ').join('');
        // Reversed word
        let palWord = palindromeInput.value.toLowerCase().split(' ').join('').split('').reverse().join('');
        
        // Insert value on input field
        palindromeOutput.value = palWord;

        // Output readonly
        palindromeOutput.readOnly = true;

        // Display message
        const msg = document.createElement('div');
        msg.setAttribute('id', 'palindromeAlert');

        // Alert Popup
        const popup = (color, alertmsg) => {
            msg.classList.add('alert', color, 'mx-3', 'mb-3', 'text-center');
            const textnode = document.createTextNode(alertmsg);
            msg.appendChild(textnode);
        };

        // PALINDROME TESTING || WORD COMPARISON
        if(palOrig === palWord){
            // If it is a palindrome
            popup("alert-success", "It's a palindrome!");
        }else{
            // If it NOT a palindrome
            popup("alert-danger", "It's not a palindrome!");
        }
        document.querySelector('#palindrome-card').appendChild(msg);

        // Set time out for msg
        setTimeout(() => {
            msg.remove();
        }, 1500);
    }
};

export default palindrome;