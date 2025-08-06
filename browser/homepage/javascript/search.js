function search() {
  var query = document.getElementById("searchBar").value;
  window.location.href = "engine.html?q=" + encodeURIComponent(query);
}
