document.addEventListener('DOMContentLoaded', function() {
    const jobsContainer = document.querySelector('.jobs-container');
    const listedJobs = [
        {
        "id": 1,
        "title": "Frontend Developer",
        "company": "Lopez and Sons",
        "location": "Markborough, MS",
        "type": "Internship",
        "experience": "Entry-level",
        "postedDate": "just now",
        "salary": "$81,063 - $108,702",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a Frontend Developer, you will create user-friendly web interfaces that deliver seamless experiences.",
        "responsibilities": [
            "Develop responsive web pages using HTML, CSS, and JavaScript",
            "Collaborate with designers to turn mockups into functional code",
            "Optimize applications for maximum speed and scalability",
            "Maintain code quality and ensure cross-browser compatibility"
        ],
        "requirements": [
            "2+ years of experience in frontend development",
            "Strong knowledge of HTML5, CSS3, and JavaScript",
            "Experience with React or Angular",
            "Understanding of responsive design principles"
        ],
        "skills": [
            "HTML5, CSS3, JavaScript (ES6+)",
            "React.js / Angular",
            "Responsive design",
            "Git/GitHub",
            "Problem-solving & debugging"
        ],
        "aboutCompany": "Tucker Inc is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 2,
        "title": "Backend Developer",
        "company": "Richardson and Sons",
        "location": "Josephton, MA",
        "type": "Internship",
        "experience": "Senior-level",
        "postedDate": "just now",
        "salary": "$61,379 - $106,830",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a Backend Developer, you will design and build scalable server-side applications.",
        "responsibilities": [
            "Develop and maintain APIs and database systems",
            "Work closely with frontend developers to integrate services",
            "Ensure data security and compliance with best practices",
            "Troubleshoot and debug backend issues"
        ],
        "requirements": [
            "5+ years of experience in backend development",
            "Proficiency in Node.js, Python, or Java",
            "Strong database knowledge (MySQL, MongoDB, PostgreSQL)",
            "Experience with cloud platforms (AWS, GCP, or Azure)"
        ],
        "skills": [
            "Node.js / Python / Java",
            "RESTful APIs & GraphQL",
            "SQL & NoSQL databases",
            "AWS / GCP / Azure",
            "Microservices architecture"
        ],
        "aboutCompany": "Maldonado-Jacobs is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 3,
        "title": "Data Scientist",
        "company": "Mcconnell Ltd",
        "location": "Port Cynthiaview, AK",
        "type": "Contract",
        "experience": "Mid-level",
        "postedDate": "few hours ago",
        "salary": "$95,637 - $118,333",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a Data Scientist, you will analyze large datasets and build predictive models to drive business insights.",
        "responsibilities": [
            "Collect, clean, and preprocess data for analysis",
            "Build machine learning models to solve business problems",
            "Visualize data and present findings to stakeholders",
            "Collaborate with cross-functional teams for data-driven decisions"
        ],
        "requirements": [
            "3+ years of experience in data science or analytics",
            "Proficiency in Python, R, or SQL",
            "Experience with machine learning libraries (scikit-learn, TensorFlow, PyTorch)",
            "Strong statistical knowledge and problem-solving skills"
        ],
        "skills": [
            "Python / R / SQL",
            "Machine learning (scikit-learn, TensorFlow, PyTorch)",
            "Data visualization (Matplotlib, Seaborn, Plotly)",
            "Statistical modeling",
            "Critical thinking & communication"
        ],
        "aboutCompany": "Wilson, Morales and Perkins is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 4,
        "title": "Frontend Developer",
        "company": "Miller Group",
        "location": "Smithberg, IA",
        "type": "Part-time",
        "experience": "Senior-level",
        "postedDate": "3 days ago",
        "salary": "$92,732 - $105,319",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a Frontend Developer, you will create user-friendly web interfaces that deliver seamless experiences.",
        "responsibilities": [
            "Develop responsive web pages using HTML, CSS, and JavaScript",
            "Collaborate with designers to turn mockups into functional code",
            "Optimize applications for maximum speed and scalability",
            "Maintain code quality and ensure cross-browser compatibility"
        ],
        "requirements": [
            "2+ years of experience in frontend development",
            "Strong knowledge of HTML5, CSS3, and JavaScript",
            "Experience with React or Angular",
            "Understanding of responsive design principles"
        ],
        "skills": [
            "HTML5, CSS3, JavaScript (ES6+)",
            "React.js / Angular",
            "Responsive design",
            "Git/GitHub",
            "Problem-solving & debugging"
        ],
        "aboutCompany": "Wallace Inc is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 5,
        "title": "DevOps Engineer",
        "company": "Welch-Erickson",
        "location": "Grantside, AZ",
        "type": "Internship",
        "experience": "Entry-level",
        "postedDate": "few hours ago",
        "salary": "$55,868 - $102,280",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a DevOps Engineer, you will improve CI/CD pipelines and manage cloud infrastructure for scalable deployments.",
        "responsibilities": [
            "Design and maintain CI/CD pipelines",
            "Manage cloud infrastructure (AWS, GCP, or Azure)",
            "Automate deployment and monitoring processes",
            "Ensure system reliability and performance"
        ],
        "requirements": [
            "5+ years of experience as a DevOps Engineer",
            "Proficiency with Docker and Kubernetes",
            "Strong scripting skills (Bash, Python, or PowerShell)",
            "Experience with monitoring tools (Prometheus, Grafana, ELK stack)"
        ],
        "skills": [
            "Docker & Kubernetes",
            "CI/CD (Jenkins, GitHub Actions, GitLab CI)",
            "AWS / GCP / Azure",
            "Infrastructure as Code (Terraform, Ansible)",
            "Monitoring (Prometheus, Grafana, ELK stack)"
        ],
        "aboutCompany": "King-Middleton is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    }
    ];
    listedJobs.forEach(job => {
        const jobElement = document.createElement('a');
        jobElement.href = 'job.html';
        jobElement.target = '_blank';
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
});

//profile card js functionalities
const profileBioCard = document.querySelector('.profile-bio-card');
document.querySelector('.profile-button').addEventListener('click',() =>{
    profileBioCard.classList.toggle('display');
});

document.querySelector('.into').addEventListener('click', () => {
    profileBioCard.classList.add('display');
});
