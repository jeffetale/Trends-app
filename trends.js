// Event listener for genre links
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');

  // Add event listener to hide the placeholder text when the input is clicked
  searchInput.addEventListener('click', function() {
    searchInput.placeholder = '';
  });
});

// Fetch movie data from JSON server
async function fetchMovies() {
  try {
    const response = await fetch('https://trendsserver.onrender.com/movies');
    const data = await response.json();

    console.log('Retrieved movie data:', data);

    // Update movies in the Movies section
    updateMovies(data);
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
}

// Function to update movies in the Movies section
function updateMovies(movieData) {
  const moviesSection = document.querySelector('.section-container.movies-container .section-content');
  moviesSection.innerHTML = '';

  if (Array.isArray(movieData) && movieData.length > 0) {
    const moviesContainer = document.createElement('div');
    moviesContainer.classList.add('movies-container');

    movieData.forEach(function(movie) {
      const movieElement = createMovieElement(movie);
      moviesContainer.appendChild(movieElement);
    });

    moviesSection.appendChild(moviesContainer);
  } else {
    const noDataMessage = document.createElement('p');
    noDataMessage.textContent = 'No movies found';
    moviesSection.appendChild(noDataMessage);
  }
}

function createMovieElement(movie) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');

  const posterImg = document.createElement('img');
  posterImg.src = movie.poster_path;
  posterImg.alt = movie.title;

  const titleHeading = document.createElement('h2');
  titleHeading.textContent = movie.title;

  movieElement.appendChild(posterImg);
  movieElement.appendChild(titleHeading);

  return movieElement;
}

// Fetch player data from JSON server
async function fetchPlayers() {
  try {
    const response = await fetch('https://trendsserver.onrender.com/players');
    const data = await response.json();

    console.log('Retrieved player data:', data);

    // Update players in the Players section
    updatePlayers(data);
  } catch (error) {
    console.error('Error fetching player data:', error);
  }
}

// Function to update players in the Players section
function updatePlayers(playerData) {
  const playersSection = document.querySelector('.section-container.nba-container .section-content');
  playersSection.innerHTML = '';

  if (Array.isArray(playerData) && playerData.length > 0) {
    const playersContainer = document.createElement('div');
    playersContainer.classList.add('players-container');

    playerData.forEach(function(player) {
      const playerElement = createPlayerElement(player);
      playersContainer.appendChild(playerElement);
    });

    playersSection.appendChild(playersContainer);
  } else {
    const noDataMessage = document.createElement('p');
    noDataMessage.textContent = 'No players found';
    playersSection.appendChild(noDataMessage);
  }
}

function createPlayerElement(player) {
  const playerElement = document.createElement('div');
  playerElement.classList.add('player');

  const playerImg = document.createElement('img');
  playerImg.src = player.image;
  playerImg.alt = player.name;

  const playerName = document.createElement('h2');
  playerName.textContent = player.name;

  playerElement.appendChild(playerImg);
  playerElement.appendChild(playerName);

  return playerElement;
}

// Fetch musician data from JSON server
async function fetchMusicians() {
  try {
    const response = await fetch('https://trendsserver.onrender.com/musicians');
    const data = await response.json();

    console.log('Retrieved musician data:', data);

    // Update musicians in the Musicians section
    displayMusicians(data);
  } catch (error) {
    console.error('Error fetching musician data:', error);
  }
}

// Function to display musicians
function displayMusicians(musicianData) {
  const musiciansSection = document.querySelector('.section-container.musicians-container .section-content');
  musiciansSection.innerHTML = '';

  if (Array.isArray(musicianData) && musicianData.length > 0) {
    const musiciansContainer = document.createElement('div');
    musiciansContainer.classList.add('musicians-container');

    musicianData.forEach(function(musician) {
      const musicianElement = createMusicianElement(musician);
      musiciansContainer.appendChild(musicianElement);
    });

    musiciansSection.appendChild(musiciansContainer);
  } else {
    const noDataMessage = document.createElement('p');
    noDataMessage.textContent = 'No musicians found';
    musiciansSection.appendChild(noDataMessage);
  }
}

function createMusicianElement(musician) {
  const musicianElement = document.createElement('div');
  musicianElement.classList.add('musician');

  const musicianImg = document.createElement('img');
  musicianImg.src = musician.image;
  musicianImg.alt = musician.name;

  const musicianName = document.createElement('h2');
  musicianName.textContent = musician.name;

  musicianElement.appendChild(musicianImg);
  musicianElement.appendChild(musicianName);

  return musicianElement;
}

fetchMusicians();
fetchMovies();
fetchPlayers();

// Get the "Movies" link element
const moviesLink = document.querySelector('nav ul li a[href="#movies"]');

// Add event listener to the "Movies" link
moviesLink.addEventListener('click', async (event) => {
  event.preventDefault();

  // Get the blurred section
  const blurredSection = document.querySelector('.blurred-section');

  // Show the blurred section
  blurredSection.classList.add('show-section');

  // Fetch all movies
  try {
    const movieData = await fetchMovies();
    // Update the blurred section with the movie data
    updateBlurredSection(movieData);
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
});

// Function to update the blurred section with movie data
function updateBlurredSection(movieData) {
  const blurredContent = document.querySelector('.blurred-section .section-content');
  blurredContent.innerHTML = '';

  if (Array.isArray(movieData) && movieData.length > 0) {
    const moviesContainer = document.createElement('div');
    moviesContainer.classList.add('movies-container');

    movieData.forEach(function(movie) {
      const movieElement = createMovieElement(movie);
      moviesContainer.appendChild(movieElement);
    });

    blurredContent.appendChild(moviesContainer);
  } else {
    const noDataMessage = document.createElement('p');
    noDataMessage.textContent = 'No movies found';
    blurredContent.appendChild(noDataMessage);
  }
}

// Get the "Players" link element
const playersLink = document.querySelector('nav ul li a[href="#nba"]');

// Add event listener to the "Players" link
playersLink.addEventListener('click', async (event) => {
  event.preventDefault();

  // Get the blurred section
  const blurredSection = document.querySelector('.blurred-section');

  // Show the blurred section
  blurredSection.classList.add('show-section');

  // Fetch player data
  try {
    const playerData = await fetchPlayers();
    // Update the blurred section with the player data
    updateBlurredSection(playerData);
  } catch (error) {
    console.error('Error fetching player data:', error);
  }
});

// Get the "Musicians" link element
const musiciansLink = document.querySelector('nav ul li a[href="#music"]');

// Add event listener to the "Musicians" link
musiciansLink.addEventListener('click', async (event) => {
  event.preventDefault();

  // Get the blurred section
  const blurredSection = document.querySelector('.blurred-section');

  // Show the blurred section
  blurredSection.classList.add('show-section');

  // Fetch musician data
  try {
    const musicianData = await fetchMusicians();
    // Update the blurred section with the musician data
    updateBlurredSection(musicianData);
  } catch (error) {
    console.error('Error fetching musician data:', error);
  }
});


  
  // Get all the section containers
  const sectionContainers = document.querySelectorAll('.section-container');
  
  // Add event listener to each section link
  sectionContainers.forEach(function (sectionContainer) {
    const sectionLink = sectionContainer.querySelector('.section-link');
    const sectionContent = sectionContainer.querySelector('.section-content');
  
    sectionLink.addEventListener('click', function (event) {
      event.preventDefault();
  
      // Remove the enlarged class from all section containers
      sectionContainers.forEach(function (container) {
        container.classList.remove('enlarged-section');
      });
  
      // Remove the show-section class from all section contents
      sectionContainers.forEach(function (container) {
        container.querySelector('.section-content').classList.remove('show-section');
      });
  
      // Add the enlarged class to the clicked section container
      sectionContainer.classList.add('enlarged-section');
  
      // Show only the clicked section content
      sectionContent.classList.add('show-section');
  
      // Check if the clicked section container has the "nba-container" class
      if (sectionContainer.classList.contains('nba-container')) {
        // Fetch and update NBA player data
        fetchPlayers().then(function (playerData) {
          updatePlayers(playerData);
        });
      } else if (sectionContainer.classList.contains('movies-container')) {
        // Fetch and update movies data
        fetchMovies().then(function (movieData) {
          updateMovies(movieData);
        });
      } else if (sectionContainer.classList.contains('musicians-container')) {
        // Fetch and update musician data
        fetchMusicians().then(function (musicianData) {
          displayMusicians(musicianData);
        });
      }
    });
  });
  
  
  
  