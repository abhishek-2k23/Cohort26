/** * 1. SELECTION 
 * We use getElementById for speed on unique items.
 */
const orgInput = document.getElementById('org-input');
const searchBtn = document.getElementById('search-btn');
const repoGrid = document.getElementById('repo-grid');
const detailPanel = document.getElementById('detail-panel');
const contribList = document.getElementById('contributors-list');
const closeBtn = document.getElementById('close-panel');

/** * 2. FETCHING REPOS (Async/Await)
 */
async function getRepos() {
    const org = orgInput.value.trim();
    if (!org) return alert("Please enter an organization name");

    repoGrid.innerHTML = "<p>Loading repositories...</p>";

    try {
        const response = await fetch(`https://api.github.com/orgs/${org}/repos?sort=updated&per_page=20`);
        
        // INTERVIEW TIP: Always check response.ok! 404/500 won't trigger catch()
        if (!response.ok) throw new Error("Organization not found or API Limit reached");

        const repos = await response.json();
        renderRepos(repos);
    } catch (error) {
        repoGrid.innerHTML = `<p style="color:red">${error.message}</p>`;
    }
}

/** * 3. MANIPULATION & PERFORMANCE
 * Using DocumentFragment to avoid multiple Reflows.
 */
function renderRepos(repos) {
    repoGrid.innerHTML = ""; // Clear grid
    const fragment = document.createDocumentFragment();

    repos.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'repo-card';
        
        // INTERVIEW TIP: Use data-attributes for event delegation
        card.setAttribute('data-repo-name', repo.name);

        // textContent for safety, innerHTML for controlled structure
        card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available'}</p>
            <div style="margin-top:15px; font-size: 0.9rem;">
                <span>⭐ ${repo.stargazers_count}</span> | 
                <span>🍴 ${repo.forks_count}</span>
            </div>
            <button class="view-btn" style="margin-top:15px; width:100%">View Contributors</button>
        `;
        fragment.appendChild(card);
    });

    repoGrid.appendChild(fragment); // Single UI Update!
}

/** * 4. EVENT DELEGATION
 * Instead of 20 listeners for 20 buttons, we use 1 on the parent.
 */
repoGrid.addEventListener('click', async (e) => {
    if (e.target.classList.contains('view-btn')) {
        const card = e.target.closest('.repo-card');
        const repoName = card.getAttribute('data-repo-name');
        const org = orgInput.value.trim();

        fetchContributors(org, repoName);
    }
});

/** * 5. TRAVERSING & FETCHING CONTRIBUTORS
 */
async function fetchContributors(org, repo) {
    contribList.innerHTML = "Loading...";
    detailPanel.classList.remove('hidden');

    try {
        const res = await fetch(`https://api.github.com/repos/${org}/${repo}/contributors?per_page=5`);
        const data = await res.json();

        contribList.innerHTML = data.map(user => `
            <div class="contributor-item">
                <img src="${user.avatar_url}" alt="${user.login}">
                <strong>${user.login}</strong>
            </div>
        `).join('');
    } catch (err) {
        contribList.innerHTML = "Failed to load contributors.";
    }
}

// Event Listeners
searchBtn.addEventListener('click', getRepos);
closeBtn.addEventListener('click', () => detailPanel.classList.add('hidden'));

// Allow Enter key to trigger search
orgInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getRepos();
});