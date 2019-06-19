function getRepositories() {
  const req = new XMLHttpRequest();
  const username = document.getElementById('username').value
  req.addEventListener('load', displayRepositories);
  req.open('GET', 'https://api.github.com/users/' + username +'/repos');
  req.send();
}

function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
        r.name +
        ' - <a href="#" data-repo="' +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
  .join('')
  }</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  const name = el.dataset.repo;
  const username = document.getElementById('username').value
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', 'https://api.github.com/repos/' + username + name + '/commits');
  req.send();
}

function displayCommits() {

}

function getBranches() {

}
function displayBranches() {

}
