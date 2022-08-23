const searchInput = document.querySelector('#search input');
const searchIcon = document.querySelector('#search svg');

searchInput.onkeyup = (event) => {
  if (event.keyCode === 13) {
    openSearchPage();
  }
};

searchIcon.onclick = openSearchPage;

function openSearchPage() {
  const query = searchInput.value;
    // document.location.href = `/search/${query}`;
  alert(query);
}

