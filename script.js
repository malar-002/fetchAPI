document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

   
    
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Signup successfully!');
    
    window.location.href = 'home.html';

    document.getElementById('signupUsername').value = ''; 
    document.getElementById('signupPassword').value = '';

   
});




document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;



    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
        alert("Login Successfully!");
        window.location.href = 'home.html';

        document.getElementById('signupUsername').value = ''; 
        document.getElementById('signupPassword').value = '';

       
    } else {
        alert("Incorrect username or password. Please try again.");
    }

});




document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {
        
        data.forEach(comment => {
            var card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${comment.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${comment.email}</h6>
                    <p class="card-text">${comment.body}</p>
                </div>
            `;

            document.getElementById('cardContainer').appendChild(card);
        });
    })
    .catch(error => console.error('Error:', error));
    
});



    