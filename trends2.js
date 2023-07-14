// Event listener for genre links
document.addEventListener('DOMContentLoaded', function() {
    // Get all genre links
    const genreLinks = document.querySelectorAll('nav ul li a');
  
    // Add event listener to each genre link
    genreLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Get the target section ID from the link's href attribute
        const targetSectionId = link.getAttribute('href').substring(1);
  
        // Scroll to the target section
        scrollToSection(targetSectionId);
      });
    });
  
    const searchInput = document.getElementById('searchInput');
  
    // Add event listener to hide the placeholder text when the input is clicked
    searchInput.addEventListener('click', function() {
      searchInput.placeholder = '';
    });
  
    // Function to scroll to a section
    function scrollToSection(sectionId) {
      const targetSection = document.getElementById(sectionId);
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  
    
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
    const moviesSection = document.querySelector('.section-container:nth-child(2) .section-content');
    moviesSection.innerHTML = '';
  
    if (Array.isArray(movieData) && movieData.length > 0) {
      const movie = movieData[0]; // Get the first movie from the array
  
      const movieElement = createMovieElement(movie);
      moviesSection.appendChild(movieElement);
    } else {
      const noDataMessage = document.createElement('p');
      noDataMessage.textContent = 'Coming soon';
      moviesSection.appendChild(noDataMessage);
    }
  }
  
  
  function createMovieElement(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
  
    const posterImg = document.createElement('img');
    posterImg.src = 'https://trendsserver.onrender.com/movies' + movie.poster_path; // Concatenate the base URL with the relative path
    posterImg.alt = movie.title;
  
    const titleHeading = document.createElement('h2');
    titleHeading.textContent = movie.title;
  
    movieElement.appendChild(posterImg);
    movieElement.appendChild(titleHeading);
  
    return movieElement;
  }

  // Get the "Movies" link element
const moviesLink = document.querySelector('nav ul li a[href="#movies"]');

// Add event listener to the "Movies" link
moviesLink.addEventListener('click', function(event) {
  event.preventDefault();

  // Get the blurred section
  const blurredSection = document.querySelector('.blurred-section');

  // Show the blurred section
  blurredSection.classList.add('show-section');

  // Fetch all movies
  fetchMovies().then(function(movieData) {
    // Update the blurred section with the movie data
    updateBlurredSection(movieData);
  });
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

  
  
  // Call the fetchMovies function to initiate the API request
  fetchMovies();
  
  // Fetch player data from JSON server
  async function fetchPlayers() {
  try {
    const response = await fetch('https://trendsserver.onrender.com/players');
    const data = await response.json();
  
    console.log('Retrieved player data:', data);
  
    // Update web app's content with the player data
    updatePlayers(data);
  } catch (error) {
    console.error('Error fetching player data:', error);
  }
  }
  
  function updatePlayers(playerData) {
    const playersContainer = document.querySelector('.section-container:nth-child(1) .section-content');
    playersContainer.innerHTML = '';
  
    if (Array.isArray(playerData) && playerData.length > 0) {
      const playersList = document.createElement('ul');
      playersList.classList.add('players-list');
  
      playerData.forEach(function (player) {
        const playerItem = createPlayerItem(player);
        playersList.appendChild(playerItem);
      });
  
      playersContainer.appendChild(playersList);
    } else {
      const noDataMessage = document.createElement('p');
      noDataMessage.textContent = 'Coming soon';
      playersContainer.appendChild(noDataMessage);
    }
  }
  
  function createPlayerItem(player) {
    const playerItem = document.createElement('li');
    playerItem.classList.add('player-item');
  
    const playerName = player.name;
  
    const playerNameElement = document.createElement('p');
    playerNameElement.textContent = playerName;
  
    const playerImage = document.createElement('img');
    playerImage.src = player.img;
    playerImage.alt = playerName;
  
    const playerTeamElement = document.createElement('p');
    playerTeamElement.textContent = `Team: ${player.team}`;
  
    playerItem.appendChild(playerImage);
    playerItem.appendChild(playerNameElement);
    playerItem.appendChild(playerTeamElement);
  
    return playerItem;
  }
  
  fetchPlayers();
  
  // Fetch musician data from JSON server
  async function fetchMusicians() {
  try {
    const response = await fetch('https://trendsserver.onrender.com/musicians');
    const data = await response.json();
  
    console.log('Retrieved musician data:', data);
  
    // Update musician data in the Musicians section
    displayMusicians(data);
  } catch (error) {
    console.error('Error fetching musician data:', error);
  }
  }
  
  // Function to display musicians in the Musicians section
  function displayMusicians(musicianData) {
    const musiciansContainer = document.querySelector('.section-container:nth-child(3) .section-content');
    musiciansContainer.innerHTML = '';
  
    if (musicianData && Array.isArray(musicianData) && musicianData.length > 0) {
      const musiciansList = document.createElement('ul');
      musiciansList.classList.add('musicians-list');
  
      musicianData.forEach(function (musician, index) {
        const musicianItem = createMusicianItem(musician, index + 1);
        musiciansList.appendChild(musicianItem);
      });
  
      musiciansContainer.appendChild(musiciansList);
    } else {
      const noDataMessage = document.createElement('p');
      noDataMessage.textContent = 'Coming soon';
      musiciansContainer.appendChild(noDataMessage);
    }
  }
  
  function createMusicianItem(musician, index) {
    const musicianItem = document.createElement('li');
    musicianItem.classList.add('musician-item');
  
    const musicianName = musician.name;
  
    const indexElement = document.createElement('p');
    indexElement.textContent = `#${index}`;
  
    const musicianNameElement = document.createElement('h2');
    musicianNameElement.textContent = musicianName;
  
    const musicianImage = document.createElement('img');
    musicianImage.src = musician.img;
    musicianImage.alt = musicianName;
  
    const musicianTeamElement = document.createElement('p');
    musicianTeamElement.textContent = `Team: ${musician.team}`;
  
    musicianItem.appendChild(indexElement);
    musicianItem.appendChild(musicianNameElement);
    musicianItem.appendChild(musicianImage);
    musicianItem.appendChild(musicianTeamElement);
  
    return musicianItem;
  }
     
  fetchMusicians();
  
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
  
  
  
  