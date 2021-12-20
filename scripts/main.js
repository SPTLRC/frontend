fetch("http://localhost:8888")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        document.body.innerHTML += "<h3>" + data.movie.Title + "</h3>";
        document.body.innerHTML += "<p><ul><li>Réalisateur : " + data.movie.Director + "</li><li>Genre : " + data.movie.Major_Genre +  "</li></ul></p>";
    })
    .catch (function (err) {
        console.log(err);
    });