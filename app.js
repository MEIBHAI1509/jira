// Get the input field, button, and anchor tag elements
const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');
const myAnchor = document.getElementById('myAnchor');


// Function to check input value and enable/disable the button
userInput.addEventListener('input', function() {
    const inputValue = userInput.value;

    // If the input is not empty and is a number, enable the button
    if (inputValue && !isNaN(inputValue)) {
        submitButton.disabled = false;
        document.getElementById('message').textContent = `Searching for GP20M-${inputValue}`;
    } else {
        submitButton.disabled = true;
        document.getElementById('message').textContent = `Waiting for ticket number ${inputValue}`;
    }
});
// Function to handle the button click event
submitButton.addEventListener('click', function() {
    const inputValue = userInput.value;

    if (inputValue) {

        myAnchor.href = 'https://ghme.atlassian.net/browse/GP20M-' + encodeURIComponent(inputValue);
        myAnchor.click();
        userInput.value = '';
        submitButton.disabled = true;
        document.getElementById('message').textContent = `Redirecting to jira ticket GP20M-${inputValue}`;
    }
});
