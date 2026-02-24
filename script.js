let interview = [];
let rejected = [];
let currentStatus = 'all-card';
const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
const jobCount = document.getElementById('job-count-value');
const jobCountInterview = document.getElementById('job-count-interview');
const jobCountRejected = document.getElementById('job-count-rejected');

const allSection = document.getElementById('all-card');
const interviewSection = document.getElementById('interview-section');
const rejectedSection = document.getElementById('rejected-section');

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');




// interview.push({firstName: 'John'},{lastName: 'Doe'});
function updateCounts() { 
    const totalJoba = allSection.children.length;

    
    // console.log(totalJoba, interview, rejected);
    totalCount.innerText = totalJoba;
    jobCount.innerText = totalJoba + " Jobs Applied";
    interviewCount.innerText = interview.length;
    rejectedCount.innerText = rejected.length ;
    jobCountRejected.innerText = rejected.length + " Jobs Rejected";
    jobCountInterview.innerText = interview.length + " Jobs Interview";
}
updateCounts();


function toggle(buttonId) {
    currentStatus = buttonId;
    allBtn.classList.remove('btn-primary');
    interviewBtn.classList.remove('btn-primary');
    rejectedBtn.classList.remove('btn-primary');

    
    allSection.classList.add('hidden');
    interviewSection.classList.add('hidden');
    rejectedSection.classList.add('hidden');
    if(buttonId === 'all-btn'){
        allBtn.classList.add('btn-primary');
        allSection.classList.remove('hidden');
        jobCount.classList.remove('hidden');
        jobCountInterview.classList.add('hidden');
        jobCountRejected.classList.add('hidden');
        filterInterview();
        filterRejected();
        
    } else if(buttonId === 'interview-btn'){
        interviewBtn.classList.add('btn-primary');
        interviewSection.classList.remove('hidden');
        jobCountInterview.classList.remove('hidden');
        jobCountRejected.classList.add('hidden');
        jobCount.classList.add('hidden');
        filterInterview();
    } else if(buttonId === 'rejected-btn'){
        rejectedBtn.classList.add('btn-primary');
        rejectedSection.classList.remove('hidden');
        jobCountRejected.classList.remove('hidden');
        jobCountInterview.classList.add('hidden');
        filterRejected();
    }
}





document.addEventListener('click', function (event) {
// console.log('first click');
    const card = event.target.closest('.cadr');

    const companyName = card.querySelector('.company-name').innerText;
    const jobType = card.querySelector('.job-type').innerText;
    const salary = card.querySelector('.saylary').innerText;
    const jobCondition = card.querySelector('.job-condition').innerText;
    const status = card.querySelector('.statusb').innerText;

    const jobData = {
        companyName,
        jobType,
        salary,
        jobCondition,
        status
    };


    const statusBtn = card.querySelector('.statusb');
    if (event.target.classList.contains('interview-btn-card')) {
        
        statusBtn.innerText = 'Interview';
        statusBtn.classList.add('bg-green-500');
        statusBtn.classList.remove('bg-red-500');
        statusBtn.classList.remove('hidden');


        const FindInterview = interview.find(job => job.companyName === companyName);
        if (!FindInterview) {
            interview.push(jobData);
        }

        rejected = rejected.filter(job => job.companyName !== companyName);

        jobData.status = 'Interview';
        updateCounts();
        filterInterview();
        filterRejected();
    }

    if (event.target.classList.contains('rejected-btn-card')) {  
        statusBtn.innerText = 'Rejected';
        statusBtn.classList.add('bg-red-500');
        statusBtn.classList.remove('bg-green-500'); 
        statusBtn.classList.remove('hidden');

        
        if (!rejected.find(job => job.companyName === companyName)) {
            rejected.push(jobData);
        }

        interview = interview.filter(job => job.companyName !== companyName);

        jobData.status = 'Rejected';
        updateCounts();
        filterInterview();
        filterRejected();
    }
    if (event.target.classList.contains('interview-btn-card')) {
        
    }
  
    if (event.target.closest('#delete-btn')) {

        interview = interview.filter(job => job.companyName !== companyName);
        rejected = rejected.filter(job => job.companyName !== companyName);

        card.remove();
        updateCounts();
        filterInterview();
        filterRejected();
    }
});


function filterInterview() {
    const container = document.getElementById('interview-card-container'); 
    const noJobsDiv = document.getElementById('no-jobs');

    container.innerHTML = ''; 

    if (interview.length === 0) {
        noJobsDiv.classList.remove('hidden'); 
    } else {
        noJobsDiv.classList.add('hidden');  
    }

    for (const job of interview) {
        const card = document.createElement('div');
        card.className = 'cadr bg-white p-5 rounded-lg shadow-md space-y-1 flex justify-between';
        card.innerHTML = `
            <div class="card-content">
                <h2 class="company-name font-semibold text-xl">${job.companyName}</h2>
                <p class="job-type">${job.jobType}</p>
                <p class="saylary py-2">${job.salary}</p>
                <button class="btn statusb bg-green-500">${job.status}</button>
                <p class="job-condition text-[#323B49] pb-4 pt-2">${job.jobCondition}</p>
                <button class="btn btn-outline btn-error rejected-btn-card">Rejected</button>
            </div>
            <button id="delete-bt" class="btn btn-circle delete-btn">🗑</button>
        `;
        container.appendChild(card);
    }
    
}
function filterRejected() {

    const container = document.getElementById('rejected-card-container'); 
    const noJobsDiv = document.getElementById('no-jobs-rejected'); 

    container.innerHTML = ''; 

    if (rejected.length === 0) {
        noJobsDiv.classList.remove('hidden'); 
    } else {
        noJobsDiv.classList.add('hidden'); 
    }

    for (const job of rejected) {

        const card = document.createElement('div');
        card.className = 'cadr bg-white p-5 rounded-lg shadow-md space-y-1 flex justify-between';

        card.innerHTML = `
            <div class="card-content">
                <h2 class="company-name font-semibold text-xl">${job.companyName}</h2>
                <p class="job-type">${job.jobType}</p>
                <p class="saylary py-2">${job.salary}</p>
                <button class="btn statusb bg-red-500">${job.status}</button>
                <p class="job-condition text-[#323B49] pb-4 pt-2">${job.jobCondition}</p>
                <button class="btn btn-outline btn-accent interview-btn-card">Interview</button>
            </div>

            <button id="delete-bt" class="btn btn-circle delete-btn">🗑</button>
        `;

        container.appendChild(card);
    }
}