let search = document.getElementById("search");
let movieDetail = document.getElementById("movieDetail");

search.addEventListener("click", function() {
    // let movieName = document.getElementById("search").value;

    fetch("https://www.omdbapi.com/?${}&apikey=2ebdf898")
        .then(res => res.json())
        .then(data => {
            if (data.res === "True") {
                movieDetail.innerHTML = ""`
                    <h2>${data.Title}</h2>
                    <p>Year: ${data.Year}</p>
                    <p>Genre: ${data.Genre}</p>
                    <p>Director: ${data.Director}</p>
                    <p>Plot: ${data.Plot}</p>
                    <img src="${data.Poster}" alt="Movie Poster">
                `;
            } else {
                movieDetail.innerHTML = `<p>${data.Error}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            movieDetail.innerHTML = `<p>Error fetching data. Please try again.</p>`;
        });
});