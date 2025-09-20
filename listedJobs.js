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
    },
    {
        "id": 6,
        "title": "Data Scientist",
        "company": "Barrett Group",
        "location": "North Tinachester, VT",
        "type": "Contract",
        "experience": "Mid-level",
        "postedDate": "few hours ago",
        "salary": "$71,748 - $114,700",
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
        "aboutCompany": "Anderson-Brady is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 7,
        "title": "UI/UX Designer",
        "company": "Miller-Robinson",
        "location": "Patriciaview, IA",
        "type": "Full-time",
        "experience": "Senior-level",
        "postedDate": "2 days ago",
        "salary": "$54,154 - $89,514",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Leblanc-Lucero is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 8,
        "title": "Backend Developer",
        "company": "Whitaker-Edwards",
        "location": "North Katherine, VT",
        "type": "Full-time",
        "experience": "Mid-level",
        "postedDate": "2 days ago",
        "salary": "$80,821 - $125,336",
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
        "aboutCompany": "Brown-Mitchell is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 9,
        "title": "Backend Developer",
        "company": "Smith, Lee and Rhodes",
        "location": "West Jillianchester, FL",
        "type": "Internship",
        "experience": "Entry-level",
        "postedDate": "few hours ago",
        "salary": "$85,010 - $106,819",
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
        "aboutCompany": "Ellis, Moreno and Scott is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 10,
        "title": "Data Scientist",
        "company": "Hodges, Simon and Conway",
        "location": "Lake Johnhaven, AZ",
        "type": "Full-time",
        "experience": "Entry-level",
        "postedDate": "just now",
        "salary": "$62,734 - $79,356",
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
        "aboutCompany": "Reynolds, Scott and Guzman is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 11,
        "title": "Frontend Developer",
        "company": "Carter, Singleton and Alexander",
        "location": "Lake Melanie, OK",
        "type": "Internship",
        "experience": "Mid-level",
        "postedDate": "2 days ago",
        "salary": "$55,894 - $86,714",
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
        "aboutCompany": "Bell-Martin is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 12,
        "title": "Data Scientist",
        "company": "Cohen, Roth and Brown",
        "location": "South Michael, VT",
        "type": "Contract",
        "experience": "Mid-level",
        "postedDate": "3 days ago",
        "salary": "$84,494 - $118,780",
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
        "aboutCompany": "Evans, Brown and Garcia is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 13,
        "title": "Backend Developer",
        "company": "Young, Anderson and Baker",
        "location": "South Lisaport, CA",
        "type": "Part-time",
        "experience": "Mid-level",
        "postedDate": "3 days ago",
        "salary": "$66,275 - $84,854",
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
        "aboutCompany": "Rodriguez Ltd is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 14,
        "title": "UI/UX Designer",
        "company": "Delgado-Wallace",
        "location": "Franklinburgh, ID",
        "type": "Part-time",
        "experience": "Mid-level",
        "postedDate": "just now",
        "salary": "$50,898 - $76,399",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Gay-Richardson is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 15,
        "title": "Frontend Developer",
        "company": "Dickerson-Owen",
        "location": "New Andrew, NC",
        "type": "Part-time",
        "experience": "Entry-level",
        "postedDate": "2 days ago",
        "salary": "$74,019 - $96,216",
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
        "aboutCompany": "Aguirre-Simmons is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 16,
        "title": "DevOps Engineer",
        "company": "Chen-Hernandez",
        "location": "Scottberg, WI",
        "type": "Full-time",
        "experience": "Senior-level",
        "postedDate": "few hours ago",
        "salary": "$78,986 - $101,765",
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
        "aboutCompany": "Leonard, Johnson and Hamilton is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 17,
        "title": "Data Scientist",
        "company": "Payne PLC",
        "location": "Marshalltown, VA",
        "type": "Part-time",
        "experience": "Mid-level",
        "postedDate": "few hours ago",
        "salary": "$96,379 - $116,117",
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
        "aboutCompany": "Walsh, Vaughn and Miller is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 18,
        "title": "Frontend Developer",
        "company": "Lynch, Vazquez and Lam",
        "location": "Port Shannon, MI",
        "type": "Internship",
        "experience": "Entry-level",
        "postedDate": "2 days ago",
        "salary": "$61,654 - $79,012",
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
        "aboutCompany": "Stewart Group is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 19,
        "title": "UI/UX Designer",
        "company": "Chen, Tyler and Stone",
        "location": "New Scottchester, IA",
        "type": "Full-time",
        "experience": "Entry-level",
        "postedDate": "few hours ago",
        "salary": "$89,156 - $116,209",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Leonard-Lopez is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 20,
        "title": "Data Scientist",
        "company": "Nguyen, Solomon and Alvarez",
        "location": "Lake Cody, NE",
        "type": "Part-time",
        "experience": "Senior-level",
        "postedDate": "just now",
        "salary": "$69,722 - $114,775",
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
        "aboutCompany": "Murphy Inc is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 21,
        "title": "Backend Developer",
        "company": "Watson, Castaneda and Tucker",
        "location": "Port Crystal, MS",
        "type": "Internship",
        "experience": "Entry-level",
        "postedDate": "3 days ago",
        "salary": "$78,779 - $104,341",
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
        "aboutCompany": "Taylor, Robinson and Flynn is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 22,
        "title": "Backend Developer",
        "company": "Williams-Garcia",
        "location": "Romeroton, CO",
        "type": "Part-time",
        "experience": "Mid-level",
        "postedDate": "2 days ago",
        "salary": "$75,549 - $104,621",
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
        "aboutCompany": "Carr-Robinson is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 23,
        "title": "DevOps Engineer",
        "company": "Lamb, Garcia and Williams",
        "location": "Lake Ritamouth, DC",
        "type": "Internship",
        "experience": "Mid-level",
        "postedDate": "2 days ago",
        "salary": "$66,081 - $91,116",
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
        "aboutCompany": "Williams and Sons is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 24,
        "title": "DevOps Engineer",
        "company": "Davis-Chen",
        "location": "North Amyfurt, NE",
        "type": "Full-time",
        "experience": "Senior-level",
        "postedDate": "just now",
        "salary": "$83,226 - $121,938",
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
        "aboutCompany": "Moreno-Perkins is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 25,
        "title": "Data Scientist",
        "company": "Hanna-Montes",
        "location": "South Edwardshire, UT",
        "type": "Full-time",
        "experience": "Entry-level",
        "postedDate": "just now",
        "salary": "$65,108 - $111,144",
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
        "aboutCompany": "Wolf, Pope and Flores is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 26,
        "title": "Frontend Developer",
        "company": "Carter, Gibson and Lowe",
        "location": "East Rachelberg, LA",
        "type": "Full-time",
        "experience": "Entry-level",
        "postedDate": "just now",
        "salary": "$84,274 - $119,150",
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
        "aboutCompany": "Hawkins and Sons is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 27,
        "title": "UI/UX Designer",
        "company": "Fernandez, Fletcher and Thompson",
        "location": "Heathborough, OH",
        "type": "Contract",
        "experience": "Senior-level",
        "postedDate": "3 days ago",
        "salary": "$76,069 - $114,438",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Mcpherson-Harper is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 28,
        "title": "UI/UX Designer",
        "company": "Saunders-Smith",
        "location": "Jennaland, NM",
        "type": "Internship",
        "experience": "Entry-level",
        "postedDate": "2 days ago",
        "salary": "$66,883 - $92,780",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Green Inc is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 29,
        "title": "UI/UX Designer",
        "company": "Hall-Hawkins",
        "location": "Smithchester, FL",
        "type": "Part-time",
        "experience": "Mid-level",
        "postedDate": "1 day ago",
        "salary": "$73,761 - $84,638",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Clarke Group is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 30,
        "title": "Frontend Developer",
        "company": "Cardenas-Leon",
        "location": "Terryport, MS",
        "type": "Part-time",
        "experience": "Senior-level",
        "postedDate": "2 days ago",
        "salary": "$90,311 - $103,308",
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
        "aboutCompany": "Wright-Jones is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 31,
        "title": "Data Scientist",
        "company": "Guerrero-Long",
        "location": "Michelleburgh, KS",
        "type": "Contract",
        "experience": "Senior-level",
        "postedDate": "just now",
        "salary": "$71,171 - $108,196",
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
        "aboutCompany": "Higgins-Anderson is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 32,
        "title": "UI/UX Designer",
        "company": "Abbott, Bell and Huff",
        "location": "South Rachel, NV",
        "type": "Part-time",
        "experience": "Senior-level",
        "postedDate": "1 day ago",
        "salary": "$68,821 - $98,376",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Clark-Reed is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 33,
        "title": "UI/UX Designer",
        "company": "Johnson-Griffin",
        "location": "Susantown, PA",
        "type": "Internship",
        "experience": "Entry-level",
        "postedDate": "2 days ago",
        "salary": "$85,055 - $114,036",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Whitney, Hernandez and Chang is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 34,
        "title": "DevOps Engineer",
        "company": "Marshall-Walker",
        "location": "Martinezborough, MT",
        "type": "Internship",
        "experience": "Senior-level",
        "postedDate": "2 days ago",
        "salary": "$87,051 - $121,876",
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
        "aboutCompany": "Tate-Cole is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 35,
        "title": "Backend Developer",
        "company": "Jenkins-Pitts",
        "location": "Patrickstad, OK",
        "type": "Part-time",
        "experience": "Mid-level",
        "postedDate": "3 days ago",
        "salary": "$87,923 - $136,473",
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
        "aboutCompany": "Hampton-Fuentes is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 36,
        "title": "Backend Developer",
        "company": "Webster Inc",
        "location": "South Lisafurt, AR",
        "type": "Internship",
        "experience": "Entry-level",
        "postedDate": "3 days ago",
        "salary": "$95,766 - $117,550",
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
        "aboutCompany": "Richardson-Miller is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 37,
        "title": "DevOps Engineer",
        "company": "Morgan, Collins and Hernandez",
        "location": "Brownbury, MD",
        "type": "Internship",
        "experience": "Mid-level",
        "postedDate": "few hours ago",
        "salary": "$69,819 - $106,283",
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
        "aboutCompany": "Wood LLC is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 38,
        "title": "Backend Developer",
        "company": "Mcmillan, Snyder and Pham",
        "location": "East Andrea, NM",
        "type": "Part-time",
        "experience": "Mid-level",
        "postedDate": "just now",
        "salary": "$94,542 - $125,804",
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
        "aboutCompany": "Nolan, King and Decker is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 39,
        "title": "Backend Developer",
        "company": "Hartman, Peterson and Pratt",
        "location": "West William, WY",
        "type": "Internship",
        "experience": "Senior-level",
        "postedDate": "2 days ago",
        "salary": "$97,699 - $131,329",
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
        "aboutCompany": "Bush-Mccarty is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 40,
        "title": "Backend Developer",
        "company": "Smith Inc",
        "location": "South Robert, PA",
        "type": "Full-time",
        "experience": "Senior-level",
        "postedDate": "2 days ago",
        "salary": "$91,829 - $105,951",
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
        "aboutCompany": "Greene Ltd is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 41,
        "title": "Frontend Developer",
        "company": "Foster PLC",
        "location": "Timothychester, SD",
        "type": "Full-time",
        "experience": "Entry-level",
        "postedDate": "2 days ago",
        "salary": "$68,027 - $79,004",
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
        "aboutCompany": "Jones, Martinez and Hill is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 42,
        "title": "UI/UX Designer",
        "company": "Miller-Jones",
        "location": "North Markstad, AL",
        "type": "Contract",
        "experience": "Entry-level",
        "postedDate": "2 days ago",
        "salary": "$98,443 - $135,708",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Parker, Rodriguez and English is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 43,
        "title": "DevOps Engineer",
        "company": "Jackson and Sons",
        "location": "East Elizabethfort, VA",
        "type": "Part-time",
        "experience": "Senior-level",
        "postedDate": "just now",
        "salary": "$89,374 - $115,127",
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
        "aboutCompany": "Andrews-Hart is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 44,
        "title": "DevOps Engineer",
        "company": "Castillo, Chase and Moore",
        "location": "Levyland, NV",
        "type": "Internship",
        "experience": "Mid-level",
        "postedDate": "just now",
        "salary": "$68,392 - $106,434",
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
        "aboutCompany": "Wilson, Kline and Romero is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 45,
        "title": "DevOps Engineer",
        "company": "Maldonado, Cummings and Logan",
        "location": "Lake Meganmouth, MD",
        "type": "Full-time",
        "experience": "Entry-level",
        "postedDate": "few hours ago",
        "salary": "$74,554 - $95,276",
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
        "aboutCompany": "Ross and Sons is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 46,
        "title": "DevOps Engineer",
        "company": "Long LLC",
        "location": "North George, NV",
        "type": "Full-time",
        "experience": "Entry-level",
        "postedDate": "few hours ago",
        "salary": "$85,041 - $116,572",
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
        "aboutCompany": "Short-Everett is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 47,
        "title": "DevOps Engineer",
        "company": "Walker Ltd",
        "location": "Smithfort, GA",
        "type": "Part-time",
        "experience": "Senior-level",
        "postedDate": "2 days ago",
        "salary": "$85,012 - $130,941",
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
        "aboutCompany": "Frank, Larson and Rios is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 48,
        "title": "Frontend Developer",
        "company": "Peterson, Harris and Hartman",
        "location": "Port Jeremyhaven, NM",
        "type": "Contract",
        "experience": "Entry-level",
        "postedDate": "3 days ago",
        "salary": "$58,603 - $95,656",
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
        "aboutCompany": "Becker-Jones is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 49,
        "title": "Backend Developer",
        "company": "Davis LLC",
        "location": "Lake Patrick, KY",
        "type": "Contract",
        "experience": "Entry-level",
        "postedDate": "2 days ago",
        "salary": "$94,141 - $106,982",
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
        "aboutCompany": "Horton-Morrison is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 50,
        "title": "Data Scientist",
        "company": "Tran, Jackson and Hinton",
        "location": "Port Staceyville, SC",
        "type": "Part-time",
        "experience": "Entry-level",
        "postedDate": "2 days ago",
        "salary": "$79,146 - $123,691",
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
        "aboutCompany": "Macias-Collins is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 51,
        "title": "DevOps Engineer",
        "company": "Rice PLC",
        "location": "East James, ME",
        "type": "Internship",
        "experience": "Senior-level",
        "postedDate": "1 day ago",
        "salary": "$54,452 - $91,439",
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
        "aboutCompany": "Ramirez Inc is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 52,
        "title": "Backend Developer",
        "company": "May-Young",
        "location": "Oliverfort, MA",
        "type": "Full-time",
        "experience": "Entry-level",
        "postedDate": "few hours ago",
        "salary": "$74,777 - $90,713",
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
        "aboutCompany": "Roberts, Campbell and Bonilla is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 53,
        "title": "UI/UX Designer",
        "company": "Roth-Montoya",
        "location": "Sparksfort, KY",
        "type": "Internship",
        "experience": "Mid-level",
        "postedDate": "few hours ago",
        "salary": "$67,865 - $103,916",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Phelps-Newman is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 54,
        "title": "Data Scientist",
        "company": "Cruz-Johnson",
        "location": "Port Garyfort, IA",
        "type": "Full-time",
        "experience": "Entry-level",
        "postedDate": "just now",
        "salary": "$56,966 - $80,814",
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
        "aboutCompany": "Steele and Sons is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 55,
        "title": "DevOps Engineer",
        "company": "Sullivan, Wilson and Terry",
        "location": "Richardport, OH",
        "type": "Full-time",
        "experience": "Senior-level",
        "postedDate": "few hours ago",
        "salary": "$95,445 - $119,951",
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
        "aboutCompany": "Smith Group is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 56,
        "title": "Data Scientist",
        "company": "Cooper Ltd",
        "location": "Phamtown, TN",
        "type": "Contract",
        "experience": "Senior-level",
        "postedDate": "3 days ago",
        "salary": "$85,136 - $103,299",
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
        "aboutCompany": "Castillo, Conner and Glass is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 57,
        "title": "Backend Developer",
        "company": "Mack, Alexander and Miller",
        "location": "Clarkport, CO",
        "type": "Internship",
        "experience": "Senior-level",
        "postedDate": "1 day ago",
        "salary": "$94,342 - $140,714",
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
        "aboutCompany": "Jenkins, Price and Jackson is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 58,
        "title": "Frontend Developer",
        "company": "Meyer-Wagner",
        "location": "Richardshaven, VA",
        "type": "Contract",
        "experience": "Entry-level",
        "postedDate": "few hours ago",
        "salary": "$97,010 - $144,416",
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
        "aboutCompany": "Martin, Stewart and Pollard is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 59,
        "title": "Frontend Developer",
        "company": "Hernandez, Moore and Hernandez",
        "location": "Lake Davidport, VA",
        "type": "Internship",
        "experience": "Senior-level",
        "postedDate": "just now",
        "salary": "$76,015 - $109,718",
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
        "aboutCompany": "Braun-Barnett is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 60,
        "title": "Frontend Developer",
        "company": "Wilcox Group",
        "location": "South Jason, GA",
        "type": "Full-time",
        "experience": "Entry-level",
        "postedDate": "3 days ago",
        "salary": "$51,849 - $96,341",
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
        "aboutCompany": "Schultz Inc is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 61,
        "title": "Backend Developer",
        "company": "Kelley, Russell and Clark",
        "location": "Lake Wendy, MO",
        "type": "Full-time",
        "experience": "Senior-level",
        "postedDate": "3 days ago",
        "salary": "$71,072 - $88,143",
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
        "aboutCompany": "Dougherty-Hartman is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 62,
        "title": "DevOps Engineer",
        "company": "Wilson, Frazier and Perkins",
        "location": "Perryport, WY",
        "type": "Part-time",
        "experience": "Mid-level",
        "postedDate": "1 day ago",
        "salary": "$77,746 - $104,530",
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
        "aboutCompany": "Oconnor-Turner is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 63,
        "title": "UI/UX Designer",
        "company": "Williams and Sons",
        "location": "New Stephanie, NC",
        "type": "Contract",
        "experience": "Mid-level",
        "postedDate": "3 days ago",
        "salary": "$61,185 - $100,671",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Garcia-Mcneil is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 64,
        "title": "DevOps Engineer",
        "company": "Thomas-Bentley",
        "location": "Millerborough, CA",
        "type": "Contract",
        "experience": "Mid-level",
        "postedDate": "few hours ago",
        "salary": "$50,251 - $86,694",
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
        "aboutCompany": "Hart and Sons is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 65,
        "title": "Backend Developer",
        "company": "Williams, Dixon and Miller",
        "location": "Port Chad, TX",
        "type": "Contract",
        "experience": "Senior-level",
        "postedDate": "just now",
        "salary": "$87,753 - $124,561",
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
        "aboutCompany": "York-Mccall is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 66,
        "title": "Frontend Developer",
        "company": "Keller Inc",
        "location": "Chasemouth, SC",
        "type": "Internship",
        "experience": "Mid-level",
        "postedDate": "2 days ago",
        "salary": "$99,254 - $112,332",
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
        "aboutCompany": "Bonilla, Davis and Flores is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 67,
        "title": "DevOps Engineer",
        "company": "Gray, Moss and Perez",
        "location": "East Jocelynside, VT",
        "type": "Full-time",
        "experience": "Mid-level",
        "postedDate": "2 days ago",
        "salary": "$97,935 - $115,163",
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
        "aboutCompany": "Johnson, Smith and Joseph is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 68,
        "title": "Data Scientist",
        "company": "Newton, Wells and Bishop",
        "location": "New Jenniferton, NH",
        "type": "Internship",
        "experience": "Entry-level",
        "postedDate": "1 day ago",
        "salary": "$63,862 - $74,178",
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
        "aboutCompany": "Leon, Sanders and Navarro is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 69,
        "title": "UI/UX Designer",
        "company": "Mitchell Inc",
        "location": "Tammymouth, AR",
        "type": "Internship",
        "experience": "Mid-level",
        "postedDate": "few hours ago",
        "salary": "$98,420 - $145,442",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Hopkins and Sons is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 70,
        "title": "Frontend Developer",
        "company": "Combs-Taylor",
        "location": "Lake Nicole, PA",
        "type": "Contract",
        "experience": "Entry-level",
        "postedDate": "3 days ago",
        "salary": "$86,301 - $110,033",
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
        "aboutCompany": "Harmon LLC is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 71,
        "title": "UI/UX Designer",
        "company": "Roberts, Massey and Hall",
        "location": "Smithfurt, FL",
        "type": "Full-time",
        "experience": "Senior-level",
        "postedDate": "just now",
        "salary": "$71,713 - $95,607",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Price PLC is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 72,
        "title": "Data Scientist",
        "company": "Turner-Wilson",
        "location": "Christineland, NE",
        "type": "Internship",
        "experience": "Entry-level",
        "postedDate": "2 days ago",
        "salary": "$85,341 - $96,460",
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
        "aboutCompany": "Owens Ltd is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 73,
        "title": "UI/UX Designer",
        "company": "Shepherd, Mendoza and Rose",
        "location": "New Mark, NC",
        "type": "Contract",
        "experience": "Senior-level",
        "postedDate": "3 days ago",
        "salary": "$70,266 - $103,149",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Boyd, Castro and Harmon is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 74,
        "title": "Backend Developer",
        "company": "Lee-Fields",
        "location": "Jessicashire, AR",
        "type": "Internship",
        "experience": "Mid-level",
        "postedDate": "few hours ago",
        "salary": "$97,651 - $133,572",
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
        "aboutCompany": "Wilson, Colon and Jones is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 75,
        "title": "Data Scientist",
        "company": "King LLC",
        "location": "Lake Stephanie, SC",
        "type": "Part-time",
        "experience": "Entry-level",
        "postedDate": "few hours ago",
        "salary": "$94,973 - $127,135",
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
        "aboutCompany": "Clark, Lopez and Alexander is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 76,
        "title": "DevOps Engineer",
        "company": "Reid-Clark",
        "location": "East Christopherburgh, UT",
        "type": "Contract",
        "experience": "Senior-level",
        "postedDate": "few hours ago",
        "salary": "$92,357 - $113,729",
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
        "aboutCompany": "Osborn-Cox is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 77,
        "title": "Frontend Developer",
        "company": "Jenkins, Webb and Young",
        "location": "Shannonhaven, MT",
        "type": "Full-time",
        "experience": "Mid-level",
        "postedDate": "few hours ago",
        "salary": "$79,090 - $93,723",
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
        "aboutCompany": "Murray-Khan is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 78,
        "title": "Data Scientist",
        "company": "Long Inc",
        "location": "New Sharon, RI",
        "type": "Part-time",
        "experience": "Mid-level",
        "postedDate": "3 days ago",
        "salary": "$99,976 - $116,954",
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
        "aboutCompany": "Moreno-Neal is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 79,
        "title": "UI/UX Designer",
        "company": "Anderson-Gill",
        "location": "New Alexismouth, MA",
        "type": "Part-time",
        "experience": "Senior-level",
        "postedDate": "few hours ago",
        "salary": "$58,131 - $81,050",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Jones Ltd is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 80,
        "title": "DevOps Engineer",
        "company": "Newman Inc",
        "location": "Micheleville, MS",
        "type": "Full-time",
        "experience": "Senior-level",
        "postedDate": "few hours ago",
        "salary": "$94,879 - $123,331",
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
        "aboutCompany": "Olson, Franco and Brown is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 81,
        "title": "Backend Developer",
        "company": "Davis LLC",
        "location": "Hallport, FL",
        "type": "Contract",
        "experience": "Entry-level",
        "postedDate": "2 days ago",
        "salary": "$80,821 - $127,713",
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
        "aboutCompany": "Smith Ltd is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 82,
        "title": "Backend Developer",
        "company": "Hudson, Pierce and Jennings",
        "location": "Veronicabury, RI",
        "type": "Part-time",
        "experience": "Mid-level",
        "postedDate": "2 days ago",
        "salary": "$64,463 - $109,432",
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
        "aboutCompany": "Horne Group is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 83,
        "title": "Backend Developer",
        "company": "Watts PLC",
        "location": "East Jason, RI",
        "type": "Full-time",
        "experience": "Senior-level",
        "postedDate": "3 days ago",
        "salary": "$71,369 - $89,206",
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
        "aboutCompany": "Meyer, Baker and King is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 84,
        "title": "DevOps Engineer",
        "company": "Curtis-Grant",
        "location": "Frederickport, OH",
        "type": "Part-time",
        "experience": "Entry-level",
        "postedDate": "2 days ago",
        "salary": "$68,524 - $79,638",
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
        "aboutCompany": "Walker Ltd is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 85,
        "title": "UI/UX Designer",
        "company": "Long Group",
        "location": "Kelseymouth, AK",
        "type": "Internship",
        "experience": "Mid-level",
        "postedDate": "2 days ago",
        "salary": "$99,726 - $120,914",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Willis, Rios and Glover is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 86,
        "title": "Frontend Developer",
        "company": "Griffith-Vargas",
        "location": "Leefurt, GA",
        "type": "Contract",
        "experience": "Entry-level",
        "postedDate": "just now",
        "salary": "$99,846 - $146,903",
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
        "aboutCompany": "Jackson PLC is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 87,
        "title": "Backend Developer",
        "company": "Murray-Mora",
        "location": "Kramerton, IA",
        "type": "Full-time",
        "experience": "Mid-level",
        "postedDate": "2 days ago",
        "salary": "$65,214 - $75,427",
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
        "aboutCompany": "Jackson Ltd is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 88,
        "title": "Data Scientist",
        "company": "Garcia-Haas",
        "location": "South Amy, RI",
        "type": "Full-time",
        "experience": "Entry-level",
        "postedDate": "2 days ago",
        "salary": "$97,961 - $121,977",
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
        "aboutCompany": "Fisher-Nelson is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 89,
        "title": "UI/UX Designer",
        "company": "Jensen-Stephens",
        "location": "South Jeffrey, AZ",
        "type": "Full-time",
        "experience": "Mid-level",
        "postedDate": "1 day ago",
        "salary": "$65,086 - $82,319",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Lee-Barnes is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 90,
        "title": "DevOps Engineer",
        "company": "Gutierrez-Davis",
        "location": "Port Sonya, DE",
        "type": "Contract",
        "experience": "Senior-level",
        "postedDate": "1 day ago",
        "salary": "$71,593 - $89,505",
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
        "aboutCompany": "Durham Group is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 91,
        "title": "DevOps Engineer",
        "company": "Lopez, Hammond and Osborn",
        "location": "Jonathanville, DE",
        "type": "Contract",
        "experience": "Senior-level",
        "postedDate": "few hours ago",
        "salary": "$59,224 - $69,757",
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
        "aboutCompany": "White-Campbell is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 92,
        "title": "Frontend Developer",
        "company": "Vance PLC",
        "location": "Michaelport, MD",
        "type": "Full-time",
        "experience": "Mid-level",
        "postedDate": "2 days ago",
        "salary": "$76,095 - $100,506",
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
        "aboutCompany": "Turner Ltd is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 93,
        "title": "Frontend Developer",
        "company": "Herrera LLC",
        "location": "Mooreside, KS",
        "type": "Internship",
        "experience": "Mid-level",
        "postedDate": "few hours ago",
        "salary": "$75,934 - $93,870",
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
        "aboutCompany": "Schwartz, Harris and Murray is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 94,
        "title": "Data Scientist",
        "company": "Mendoza-Bauer",
        "location": "Andreatown, MI",
        "type": "Contract",
        "experience": "Senior-level",
        "postedDate": "few hours ago",
        "salary": "$79,196 - $107,377",
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
        "aboutCompany": "Walker Inc is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 95,
        "title": "Backend Developer",
        "company": "Estes-Martinez",
        "location": "Christinastad, NV",
        "type": "Full-time",
        "experience": "Entry-level",
        "postedDate": "just now",
        "salary": "$81,869 - $94,635",
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
        "aboutCompany": "Rodriguez, Roberts and Lam is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 96,
        "title": "DevOps Engineer",
        "company": "Clay-Ortega",
        "location": "Sanchezfort, HI",
        "type": "Full-time",
        "experience": "Entry-level",
        "postedDate": "few hours ago",
        "salary": "$74,345 - $96,538",
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
        "aboutCompany": "King PLC is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "DevOps"
    },
    {
        "id": 97,
        "title": "Backend Developer",
        "company": "Lopez PLC",
        "location": "Ronaldfurt, SD",
        "type": "Internship",
        "experience": "Senior-level",
        "postedDate": "1 day ago",
        "salary": "$67,596 - $109,226",
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
        "aboutCompany": "Phillips Inc is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Backend"
    },
    {
        "id": 98,
        "title": "Data Scientist",
        "company": "Le LLC",
        "location": "Hannahville, GA",
        "type": "Contract",
        "experience": "Senior-level",
        "postedDate": "just now",
        "salary": "$91,251 - $114,758",
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
        "aboutCompany": "Stephens, Smith and Woods is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Data/AI"
    },
    {
        "id": 99,
        "title": "Frontend Developer",
        "company": "Dunn, Oliver and Wong",
        "location": "New Malikfurt, WY",
        "type": "Full-time",
        "experience": "Senior-level",
        "postedDate": "1 day ago",
        "salary": "$95,648 - $114,119",
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
        "aboutCompany": "Martinez-Salinas is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    },
    {
        "id": 100,
        "title": "UI/UX Designer",
        "company": "Adams, Foster and Lee",
        "location": "Stewartstad, DE",
        "type": "Internship",
        "experience": "Entry-level",
        "postedDate": "just now",
        "salary": "$59,724 - $100,425",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1170&q=80",
        "about": "As a UI/UX Designer, you will design intuitive user experiences and visually appealing interfaces.",
        "responsibilities": [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Work with developers to implement designs",
            "Maintain brand consistency across all platforms"
        ],
        "requirements": [
            "Portfolio showcasing UI/UX projects",
            "Proficiency with Figma, Sketch, or Adobe XD",
            "Basic understanding of frontend technologies",
            "Strong creativity and attention to detail"
        ],
        "skills": [
            "Figma / Sketch / Adobe XD",
            "User research & usability testing",
            "Wireframing & prototyping",
            "Design thinking",
            "Collaboration & communication"
        ],
        "aboutCompany": "Roberts, Lynch and Walsh is a leading company in its field, providing innovative solutions and excellent services worldwide.",
        "category": "Frontend"
    }
];