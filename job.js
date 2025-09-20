const data = localStorage.getItem("selectedJobTitle");
console.log(data)
// document.getElementById("main1").innerHTML = `<h1>${data}</h1>`;
const STORAGE_KEY = "savedjobs";
const APPLIED_KEY = "appliedJobs";
let savedjobs = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let appliedJobs = JSON.parse(localStorage.getItem(APPLIED_KEY)) || [];
const job = listedJobs.find(job => job.id == data);
console.log(job);

const img = document.createElement('img');
img.className = 'image';
img.src = 'https://static.vecteezy.com/system/resources/thumbnails/070/208/032/small_2x/professional-clean-office-ambience-at-night-with-realistic-atmosphere-photo.jpg';
document.getElementById('card').appendChild(img);

const jobtitle = document.createElement('h1');
jobtitle.className = 'title';
jobtitle.textContent = `
${job.title}`;
document.getElementById('card').appendChild(jobtitle);


const company = document.createElement('h2');
company.className = 'company';
company.textContent = `
${job.company}`;
document.getElementById('card').appendChild(company);


const locations = document.createElement('p');
locations.className = 'location';    
locations.textContent = `
 ${job.location}`;
document.getElementById('card').appendChild(locations);
// console.log(document.querySelector('.card'));

const pills = document.createElement('div');
pills.className = 'pills';
document.getElementById('card').appendChild(pills);

const postedDate = document.createElement('p');
postedDate.className = 'postedDate';    
postedDate.textContent = `
Posted: ${job.postedDate}`;
document.querySelector('.pills').appendChild(postedDate);

const type = document.createElement('p');
type.className = 'type';    
type.textContent = `
Job Type: ${job.type}`;
document.querySelector('.pills').appendChild(type);

const experience = document.createElement('p');
experience.className = 'experience';
experience.textContent = `
Experience:   ${job.experience}`;
document.querySelector('.pills').appendChild(experience);

const salary = document.createElement('p');
salary.className = 'salary';    
salary.textContent = `
Salary: ${job.salary}`;
document.querySelector('.pills').appendChild(salary);

const apply = document.createElement('button');
apply.className = 'apply';
apply.textContent = 'Apply Now';
document.getElementById('card').appendChild(apply);

const share = document.createElement('button');
share.className = 'share';
share.textContent = '';
document.getElementById('card').appendChild(share);

const shareIcon = document.createElement('i');
shareIcon.classList.add('fas', 'fa-share-alt');
document.querySelector('.share').appendChild(shareIcon);

const save = document.createElement('button');
save.className = 'save';
save.textContent = '';
document.getElementById('card').appendChild(save);

const saveIcon = document.createElement('i');
saveIcon.classList.add('fas', 'fa-bookmark');
document.querySelector('.save').appendChild(saveIcon);

const about = document.createElement('h3');
about.className = 'about';
about.textContent = 'About the Job';
document.getElementById('card').appendChild(about);

const aboutText = document.createElement('p');
aboutText.className = 'aboutText';
aboutText.textContent = `
${job.about}`;
document.getElementById('card').appendChild(aboutText);

const responsibilitiesTitle = document.createElement('h3');
responsibilitiesTitle.className = 'responsibilitiesTitle';
responsibilitiesTitle.textContent = 'Responsibilities';
document.getElementById('card').appendChild(responsibilitiesTitle);

const responsibilitiesList = document.createElement('ul');
responsibilitiesList.className = 'responsibilitiesList';
job.responsibilities.forEach(responsibility => {
    const listItem = document.createElement('li');
    listItem.textContent = responsibility;
    responsibilitiesList.appendChild(listItem);
}
);
document.getElementById('card').appendChild(responsibilitiesList);

const requirementsTitle = document.createElement('h3');
requirementsTitle.className = 'requirementsTitle';
requirementsTitle.textContent = 'Requirements';
document.getElementById('card').appendChild(requirementsTitle);

const requirementsList = document.createElement('ul');
requirementsList.className = 'requirementsList';
job.requirements.forEach(requirement => {
    const listItem = document.createElement('li');
    listItem.textContent = requirement;
    requirementsList.appendChild(listItem);
}
);
document.getElementById('card').appendChild(requirementsList);

const skillsTitle = document.createElement('h3');
skillsTitle.className = 'skillsTitle';
skillsTitle.textContent = 'Skills';
document.getElementById('card').appendChild(skillsTitle);

const skillslist = document.createElement('ul');
skillslist.className = 'skillslist';
job.skills.forEach(skill=>{
    const listItem = document.createElement('li');
    listItem.className = 'skillItem';
    listItem.textContent = skill;
    skillslist.appendChild(listItem);
});
document.getElementById('card').appendChild(skillslist);

const aboutCompanyTitle = document.createElement('h3');
aboutCompanyTitle.className = 'aboutCompanyTitle';
aboutCompanyTitle.textContent = 'About the Company';
document.getElementById('card').appendChild(aboutCompanyTitle); 

const aboutCompanyText = document.createElement('p');
aboutCompanyText.className = 'aboutCompanyText';
aboutCompanyText.textContent = `
${job.aboutCompany}`;
document.getElementById('card').appendChild(aboutCompanyText);


document.getElementsByClassName("save")[0].addEventListener('click', function saveJob() {
    if (!savedjobs.includes(job.id)) {
        savedjobs.push(job.id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedjobs));
        alert("Job saved!");
        console.log(savedjobs);
    } else {
        alert("Job unsaved!");
        savedjobs = savedjobs.filter(j => j !== job.id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedjobs));
        console.log(savedjobs);
    }
});
document.getElementsByClassName("apply")[0].addEventListener('click', function applyJob() {
    if (!appliedJobs.includes(job.id)) {
        appliedJobs.push(job.id);   
        localStorage.setItem(APPLIED_KEY, JSON.stringify(appliedJobs));
        alert("Application submitted!");
        apply.textContent = 'Applied';
        apply.style.backgroundColor = '#fff8dc';
        apply.style.color = '#a0522d';
        apply.style.fontSize = '16px';
        apply.style.fontWeight = 'bold';
        apply.style.border = '2px solid #a0522d';
        apply.style.padding = '10px 20px';
        apply.style.marginTop = '20px';
        apply.style.cursor = 'not-allowed';

        console.log(appliedJobs);
    } else {
        alert("You have already applied for this job.");
        console.log(appliedJobs);
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
