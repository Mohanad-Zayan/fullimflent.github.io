document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve form values
    const tokenInput = document.getElementById('tokenInput');

    const urlParams = new URLSearchParams(window.location.search);

    const token = urlParams.get('x-amzn-marketplace-token');

    if (token) {
        tokenInput.value = token;
        console.log(token);
    }

    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let organization = document.getElementById('organization').value;
    let password = document.getElementById('password').value;
    let passwordRepeat = document.getElementById('password_repeat').value;
    let tokenValue = document.getElementById('tokenInput').value;

    // send post req by axios to 


    const endpoint  = "http://localhost:3000/api/auth/signup" ; 
      
    const requestBody = {
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
        organization: organization,
        tier: "enterprise"
    };

    // Prepare the headers
    const headers = {
        'x-amzn-marketplace-token': tokenValue
    };
    axios.post(endpoint, requestBody, { headers })
    .then(response => {
        // Handle the response (e.g., show a success message)
        console.log(response.data);
    })
    .catch(error => {
        // Handle errors (e.g., display an error message)
        console.error(error);
    });


});




// endpoint 
//     http://localhost:3000/api/auth/signup

// headers 
//     x-amzn-marketplace-token

// request body 
// {
//     "password":"Pa$word01-*",
//     "firstName":"mohanad",
//     "lastName": "zayan",
//     "email" : "test.temp20001@gmail.com" , 
//     "organization": "newmohanadOrgg",
//     "tier":"enterprise"
// }