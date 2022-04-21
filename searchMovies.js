let searchText;
let searchMovie;
let count = 0;
let btn = document.getElementById("clickBtn");
const key = config.API_KEY;

console.log("Hello from search");

async function getsearch(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data.results);

  const main = document.querySelector("main");
  const startRow = document.createElement("div");
  startRow.classList.add("row", "m-3");
  main.appendChild(startRow);

  for (let i = 0; i < data.results.length; i++) {
    let obj = data.results[i];

    // Fetch variables data

    let searchid = obj.id;
    let searchTitle = obj.original_title;
    let searchPoster = obj.poster_path;
    let searchReleaseDate = obj.release_date;
    let searchVoteAvg = obj.vote_average;
    const pathImageUrl = "https://image.tmdb.org/t/p/original/";
    let imgUrl = pathImageUrl + searchPoster;
    let errorImg = "../images/placeholder.jpg";

    if (searchPoster == null) {
      imgUrl = errorImg;
    }

    const main = document.querySelector("main");
    const movieElement = document.createElement("div");
    movieElement.classList.add("col-sm-4", "mb-3");

    movieElement.innerHTML = `
<div class="card">
  <div
    class="card-header text-center"
    style="background-color: rgb(93, 95, 185)"
  >
    ${searchTitle}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0 text-center">
      <p class="text-center">ID: ${searchid}</p>
      <img
        src="${imgUrl}" id="imgSource"
        class="img img-fluid rounded"
       
      />
      <div class="text-center"><a href="#">Take a peak!</a></div>
      <p class="text-center">Release Date: ${searchReleaseDate}</p>
      <p class="text-center">Vote (Avg) : ${searchVoteAvg}</p>
    </blockquote>
  </div>
</div>
`;
    startRow.appendChild(movieElement);
  }
}

function getValue() {
  searchText = document.getElementById("myInput").value;
  if (searchText == undefined) {
    // alert(`Inside undefined: Value: ${searchText}`);
    // alert(`Inside undefined: Value1: ${searchMovie}`);
  } else {
    clickBtn.onclick = function () {
      count++;
      alert(`Count Times: ${count}`);
    };
    // alert(`Outside undefined: Value: ${searchText}`);
    // alert(`Outside undefined: Value1: ${searchMovie}`);
    searchMovie =
      "https://api.themoviedb.org/3/search/movie?api_key=" +
      key +
      "&language=en-US&query=" +
      searchText;
    getsearch(searchMovie);
  }
}

function reset() {
  location.reload();
}