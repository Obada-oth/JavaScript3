export const getRepos = async UItemplate => {
  try {
    let response = await fetch(
      'https://api.github.com/orgs/HackYourFuture/repos?per_page=100',
    );
    let repos = await response.json();
    repos.forEach(repo => {
      const option = document.createElement('option');
      option.innerText = repo.name;
      option.value = repo.name;
      UItemplate.selectRepo.appendChild(option);
    });
  } catch {
    UItemplate.main.innerHTML = `
        
    <p class="error">Network request failed</p>
    `;
    UItemplate.selectRepo.style.display = 'none';
  }
};
