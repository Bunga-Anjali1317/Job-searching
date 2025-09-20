const APPLIED_KEY = "appliedJobs";
let appliedJobs = JSON.parse(localStorage.getItem(APPLIED_KEY)) || [];
console.log(appliedJobs);
if (appliedJobs.length === 0) {
    document.getElementById("appliedcards").innerHTML = "<p>No Applied Jobs.</p>";
}
const jobsContainer = document.getElementById('appliedcards');
appliedJobs.forEach(jobId => {
    const jobsContainer1 = document.getElementById('appliedcards');
    const job = listedJobs.find(j => j.id == jobId);
    if (job) {
        const jobElement = document.createElement('a');
        jobElement.href = 'job.html';
        jobElement.target = '_self';
        jobElement.className = 'job-item-card';
        jobElement.setAttribute("data-job-id", job.id);
        jobElement.addEventListener("click", (e) => {
            const jobId = e.currentTarget.getAttribute("data-job-id");
            localStorage.setItem("selectedJobTitle", jobId);
        });
        jobsContainer1.appendChild(jobElement);

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
        } else {
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
        } else if (job.postedDate.toLowerCase().includes('day')) {
            jobDate.style.backgroundColor = '#ffc10791'; // Yellow color for posts within a few days
        } else {
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
    } else {
        console.warn(`Job is not found in listedJobs.`);
    }
}); 

//profile card js functionalities
const profileBioCard = document.querySelector('.profile-bio-card');
document.querySelector('.profile-button').addEventListener('click',() =>{
    profileBioCard.classList.toggle('display');
});

document.querySelector('.into').addEventListener('click', () => {
    profileBioCard.classList.add('display');
});