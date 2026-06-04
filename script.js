// Script for MovieProject
document.addEventListener('DOMContentLoaded', function() {
    // Example: Dynamically add movie items to the movie list
    const movieList = document.querySelector('.movie-list');
    const movies = [
        { title: 'Inception', year: 2010, rating: '8.8' },
        { title: 'The Shawshank Redemption', year: 1994, rating: '9.3' },
        { title: 'The Godfather', year: 1972, rating: '9.2' },
        { title: 'Pulp Fiction', year: 1994, rating: '8.9' },
        { title: 'The Dark Knight', year: 2008, rating: '9.0' }
    ];

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Year: ${movie.year}</p>
            <p>Rating: ${movie.rating}</p>
        `;
        movieList.appendChild(movieItem);
    });

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // In a real application, you would send this to a server
        alert(`Login attempted for user: ${username}`);
        // For demo, we just show an alert
        loginForm.reset();
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        // In a real application, you would send this to a server
        alert(`Message sent from: ${email}`);
        contactForm.reset();
    });
});