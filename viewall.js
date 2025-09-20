const jobsContainer = document.querySelector('.all-jobs-container');

// Filter toggle functionality
function toggleFilter() {
    const filterPanel = document.getElementById('filterPanel');
    if (!filterPanel) return;

    // On mobile, move the panel to appear just under the mobile filter button
    if (window.matchMedia('(max-width: 575px)').matches) {
        const mobileBtn = document.querySelector('.filter-toggle-btn-mobile');
        if (mobileBtn && filterPanel.previousElementSibling !== mobileBtn) {
            mobileBtn.insertAdjacentElement('afterend', filterPanel);
        }
    }

    filterPanel.classList.toggle('show');
}

// Sync filter values between sidebar and mobile panel
function syncFilters() {
    const filters = ['category', 'type', 'location', 'experience', 'salary'];
    
    filters.forEach(filter => {
        const sidebarElement = document.getElementById(`filter-${filter}-sidebar`);
        const panelElement = document.getElementById(`filter-${filter}`);
        
        if (sidebarElement && panelElement) {
            // Sync from sidebar to panel
            sidebarElement.addEventListener('change', () => {
                panelElement.value = sidebarElement.value;
                if (filter === 'salary') {
                    document.getElementById('salary-value').textContent = '$' + sidebarElement.value;
                }
            });
            
            // Sync from panel to sidebar
            panelElement.addEventListener('change', () => {
                sidebarElement.value = panelElement.value;
                if (filter === 'salary') {
                    document.getElementById('salary-value-sidebar').textContent = '$' + panelElement.value;
                }
            });
        }
    });
}

// Initialize filter sync when page loads
document.addEventListener('DOMContentLoaded', syncFilters);
function displayJobs() {
    const filteredJobs = filterJobs();
    console.log(filteredJobs);
    console.log(jobFilters);
    jobsContainer.innerHTML = "";
   filteredJobs.forEach(job => {
        const jobElement = document.createElement('a');
        jobElement.href = 'job.html';
        jobElement.target = '_self';
        jobElement.className = 'job-item-card';
        jobElement.setAttribute("data-job-id", job.id);
        jobElement.addEventListener("click", (e) => {
            const jobId = e.currentTarget.getAttribute("data-job-id");
            localStorage.setItem("selectedJobTitle", jobId);
        });
        jobsContainer.appendChild(jobElement);

        const jobTitleContainer = document.createElement('div');
        jobTitleContainer.className = 'job-title-container';
        jobElement.appendChild(jobTitleContainer);

        const jobTitleContentCard = document.createElement('div');
        jobTitleContentCard.className = 'job-title-content-card';
        jobTitleContainer.appendChild(jobTitleContentCard);

        const jobTitle = document.createElement('h3');
        jobTitle.className = 'job-title';
        jobTitle.textContent = job.title;
        jobTitleContentCard.appendChild(jobTitle);

        const jobCompany = document.createElement('p');
        jobCompany.className = 'job-company';
        jobCompany.textContent = job.company;
        jobTitleContentCard.appendChild(jobCompany);

        const jobLogo = document.createElement('div');
        jobLogo.className = 'job-logo';
        jobTitleContainer.appendChild(jobLogo);

        const logo = document.createElement('i');
        logo.classList.add('fas', 'fa-building');
        jobLogo.appendChild(logo);

        const jobDetails = document.createElement('div');
        jobDetails.className = 'job-details';
        jobElement.appendChild(jobDetails);

        const jobLocation = document.createElement('div');
        jobLocation.className = 'job-loc-detail';
        jobDetails.appendChild(jobLocation);

        const locationIcon = document.createElement('i');
        if (job.location.toLowerCase() === 'remote' || job.location.toLowerCase() === 'work from home') {
            locationIcon.classList.add('fas', 'fa-home', 'icon');
        }else {
            locationIcon.classList.add('fas', 'fa-map-marker-alt', 'icon');
        }
        jobLocation.appendChild(locationIcon);
        
        const locationText = document.createElement('span');
        locationText.textContent = job.location;
        jobLocation.appendChild(locationText);

        const jobExperienceAndSalary = document.createElement('div');
        jobExperienceAndSalary.className = 'job-detail';
        jobDetails.appendChild(jobExperienceAndSalary);

        const jobExperience = document.createElement('div');
        jobExperience.className = 'experience';
        jobExperienceAndSalary.appendChild(jobExperience);

        const experienceIcon = document.createElement('i');
        experienceIcon.classList.add('fas', 'fa-briefcase', 'icon');
        jobExperience.appendChild(experienceIcon);

        const experienceText = document.createElement('span');
        experienceText.textContent = job.experience;
        jobExperience.appendChild(experienceText);

        const jobSalary = document.createElement('div');
        jobSalary.className = 'salary';
        jobExperienceAndSalary.appendChild(jobSalary);

        const salaryIcon = document.createElement('i');
        salaryIcon.classList.add('fas', 'fa-dollar-sign', 'icon');
        jobSalary.appendChild(salaryIcon);

        const salaryText = document.createElement('span');
        salaryText.textContent = job.salary;
        jobSalary.appendChild(salaryText);

        const jobTypeAndDate = document.createElement('div');
        jobTypeAndDate.className = 'job-date-type';
        jobElement.appendChild(jobTypeAndDate);
        
        const jobDate = document.createElement('div');
        jobDate.className = 'job-date';
        if (job.postedDate.toLowerCase() === 'just now' || job.postedDate.toLowerCase() === 'few hours ago') {
            jobDate.style.backgroundColor = '#28a74676'; // Green color for recent posts
        }else if (job.postedDate.toLowerCase().includes('day')) {
            jobDate.style.backgroundColor = '#ffc10791'; // Yellow color for posts within a few days
        }else {
            jobDate.style.backgroundColor = '#6e696990'; // Red color for older posts
        }
        jobTypeAndDate.appendChild(jobDate);

        const dateIcon = document.createElement('i');
        dateIcon.classList.add('fas', 'fa-clock', 'icon');
        jobDate.appendChild(dateIcon);

        const dateText = document.createElement('span');
        dateText.textContent = job.postedDate;
        dateText.style.color = '#fff';
        jobDate.appendChild(dateText);

        const jobType = document.createElement('div');
        jobType.className = 'job-type';
        jobTypeAndDate.appendChild(jobType);

        const typeIcon = document.createElement('i');
        typeIcon.classList.add('fas', 'fa-briefcase', 'icon');
        jobType.appendChild(typeIcon);

        const typeText = document.createElement('span');
        typeText.textContent = job.type;
        typeText.style.color = '#fff';
        jobType.appendChild(typeText);
    });
}
let jobFilters = {
    query: '',
    category: 'All',
    location: 'All',
    type: 'All',
    experience: 'All',
    salary: [0, 150000]
};


// Filter jobs based on selected criteria   
function filterJobs() {
    return listedJobs.filter(job => {
        const title = (job.title || '').toLowerCase();
    // Use title as category since job.category does not exist
        const category = (job.title || '').toLowerCase();
        const location = (job.location || '').toLowerCase();
        const type = (job.type || '').toLowerCase();
        const experience = (job.experience || '').toLowerCase();
        const query = (jobFilters.query || '').toLowerCase();
        const filterCategory = (jobFilters.category || '').toLowerCase();
        const filterLocation = (jobFilters.location || '').toLowerCase();
        const filterType = (jobFilters.type || '').toLowerCase();
        const filterExperience = (jobFilters.experience || '').toLowerCase();

        // Parse salary string: "$81,063 - $108,702" => [81063, 108702]
        let minSalary = 0, maxSalary = 0;
        if (typeof job.salary === 'string') {
            const match = job.salary.match(/\$([\d,]+)\s*-\s*\$([\d,]+)/);
            if (match) {
                minSalary = parseInt(match[1].replace(/,/g, ''));
                maxSalary = parseInt(match[2].replace(/,/g, ''));
            }
        } else if (typeof job.salary === 'number') {
            minSalary = maxSalary = job.salary;
        }
        const filterMinSalary = jobFilters.salary[0];
        const filterMaxSalary = jobFilters.salary[1];

        const matchesQuery = title.includes(query);
        const matchesCategory = jobFilters.category === 'All' || category.includes(filterCategory);
        const matchesLocation = jobFilters.location === 'All' || location.includes(filterLocation);
        const matchesType = jobFilters.type === 'All' || type.includes(filterType);
        const matchesExperience = jobFilters.experience === 'All' || experience.includes(filterExperience);
        const matchesSalary = minSalary >= filterMinSalary && maxSalary <= filterMaxSalary;
        return matchesQuery && matchesCategory && matchesLocation && matchesType && matchesExperience && matchesSalary;
    });
}
// Event listeners for filter changes
document.querySelector('.search-bar').addEventListener('input', (e) => {
    jobFilters.query = e.target.value;
    displayJobs();
}
);
document.getElementById('filter-category').addEventListener('change', (e) => {
    jobFilters.category = e.target.value;
    displayJobs();
});
document.getElementById('filter-location').addEventListener('change', (e) => {
    jobFilters.location = e.target.value;
    displayJobs();
});
document.getElementById('filter-type').addEventListener('change', (e) => {
    jobFilters.type = e.target.value;
    displayJobs();
});
document.getElementById('filter-experience').addEventListener('change', (e) => {
    jobFilters.experience = e.target.value;
    displayJobs();
});
document.getElementById('filter-salary').addEventListener('input', (e) => {
    jobFilters.salary = [0, parseInt(e.target.value)];
    document.getElementById('salary-value').textContent = `$${e.target.value}`;
    displayJobs();
});

// Initial display of jobs

displayJobs();

//profile card js functionalities
const profileBioCard = document.querySelector('.profile-bio-card');
document.querySelector('.profile-button').addEventListener('click',() =>{
    profileBioCard.classList.toggle('display');
});

document.querySelector('.into').addEventListener('click', () => {
    profileBioCard.classList.add('display');
});