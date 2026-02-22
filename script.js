let interview = [];
let rejected = [];
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let jobCount = document.getElementById('job-count-value');
const filterSectionInterview = document.getElementById('interview-section');
const filterSectionRejected = document.getElementById('rejected-section');
const filterSectionAllBtn = document.getElementById('all-card');

// interview.push({firstName: 'John'},{lastName: 'Doe'});
function updateCounts() { 
    const totalJoba = document.getElementById('all-card').children.length;
    const interview = document.getElementById('interview-section').children.length;
    const rejected = document.getElementById('rejected-section').children.length;
    // if(interview >= 1){
    //     interview = interview;
    // }
    // if(rejected >= 1){
    //     rejected = rejected;
    // }
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;
    // console.log(totalJoba);
    totalCount.innerText = totalJoba;
    jobCount.innerText = totalJoba;
}
updateCounts();


function toggle(buttonId) {
    // console.log('click all',buttonId)
    const selectBtn = document.getElementById(buttonId);
    // selectBtn.classList.add('btn-primary');
    const allBtn = document.getElementById('all-btn');
    const interviewBtn = document.getElementById('interview-btn');
    const rejectedBtn = document.getElementById('rejected-btn');
    if(buttonId === 'all-btn'){
        allBtn.classList.add('btn-primary');
        filterSectionAllBtn.classList.remove('hidden');
        interviewBtn.classList.remove('btn-primary');
        rejectedBtn.classList.remove('btn-primary');
        filterSectionInterview.classList.add('hidden');
        filterSectionRejected.classList.add('hidden');
    } else if(buttonId === 'interview-btn'){
        interviewBtn.classList.add('btn-primary');
        filterSectionAllBtn.classList.add('hidden');
        filterSectionRejected.classList.add('hidden');
        allBtn.classList.remove('btn-primary');
        filterSectionInterview.classList.remove('hidden');
        rejectedBtn.classList.remove('btn-primary');
    } else if(buttonId === 'rejected-btn'){
        filterSectionAllBtn.classList.add('hidden');
        filterSectionInterview.classList.add('hidden');
        rejectedBtn.classList.add('btn-primary');
        allBtn.classList.remove('btn-primary');
        interviewBtn.classList.remove('btn-primary');
        filterSectionRejected.classList.remove('hidden');
    }
}




let cardContainer = document.getElementById('all-card');
cardContainer.addEventListener('click', function (event) { 
    if(event.target.classList.contains('interview-btn-card')){
        const cardParent = event.target.parentNode;
        const companyName = cardParent.querySelector('.company-name').innerText;
        const jobType = cardParent.querySelector('.job-type').innerText;
        const salary = cardParent.querySelector('.saylary').innerText;
        const status = cardParent.querySelector('.statusb').innerText;
        const jobCondition = cardParent.querySelector('.job-condition').innerText;
        // console.log({companyName, jobType, salary, status, jobCondition});
        const cardData = {
            companyName,
            jobType,
            salary,
            status,
            jobCondition
        };
        // console.log(cardData)

        // const x = interview.push(cardData);
        // updateCounts();
        // console.log(x)

        const cardExist = interview.find(job => job.companyName === cardData.companyName);
        cardParent.querySelector('.statusb').innerText = 'Applied';
        cardParent.querySelector('.statusb').classList.remove('bg-blue-500');
        cardParent.querySelector('.statusb').classList.add('bg-green-500');
        if (!cardExist) {
            interview.push(cardData);
        };

        // console.log(interview);
        filterInterview();
    } else if(event.target.classList.contains('rejected-btn-card')){
        const cardParent = event.target.parentNode;
        const companyName = cardParent.querySelector('.company-name').innerText;
        const jobType = cardParent.querySelector('.job-type').innerText;
        const salary = cardParent.querySelector('.saylary').innerText;
        const status = cardParent.querySelector('.statusb').innerText;
        const jobCondition = cardParent.querySelector('.job-condition').innerText;
        // console.log({companyName, jobType, salary, status, jobCondition});
        const cardData = {
            companyName,
            jobType,
            salary,
            status,
            jobCondition
        };
        // console.log(cardData)

        // const x = rejected.push(cardData);
        // updateCounts();
        // console.log(x)

        const cardExist = rejected.find(job => job.companyName === cardData.companyName);
        cardParent.querySelector('.statusb').innerText = 'Rejected';
        cardParent.querySelector('.statusb').classList.remove('bg-blue-500');
        cardParent.querySelector('.statusb').classList.add('bg-red-500');
        if (!cardExist) {
            rejected.push(cardData);
        };

        // console.log(rejected);
        filterInterview();
    }
});



function filterInterview() { 
    filterSectionInterview.innerHTML = '';
    filterSectionRejected.innerHTML = '';
    for (const job of interview) {
        console.log(job);
        const card = document.createElement('div');
        card.className = 'cadr bg-white p-5 rounded-lg shadow-md space-y-1 flex justify-between';
        card.innerHTML = `
            <div class="card-content">
                        <h2 class="company-name font-semibold text-xl">Mobile First Corp</h2>
                        <p class="job-type">React Native Developer</p>
                        <p class="saylary py-2">Remote•Full-time•$130,000 - $175,000</p>
                        <button id="not-applied-btn" class="btn statusb">Not Applied</button>
                        <p class="job-condition text-[#323B49] pb-4 pt-2">Build cross-platform mobile applications using React Native. Work on products used by millions
                            of users worldwide.</p>
                        <button id="interview-btn-card" class="btn btn-outline btn-accent mr-2">Interview</button>
                        <button id="rejected-btn-card" class="btn btn-outline btn-error">Rejected</button>
                    </div>
                    <button id="delete-btn" class="btn btn-circle">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
        `;
        filterSectionInterview.appendChild(card);
    }
    for (const job of rejected) {
        console.log(job);
        const card = document.createElement('div');
        card.className = 'cadr bg-white p-5 rounded-lg shadow-md space-y-1 flex justify-between';
        card.innerHTML = `
            <div class="card-content">
                        <h2 class="company-name font-semibold text-xl">Mobile First Corp</h2>
                        <p class="job-type">React Native Developer</p>
                        <p class="saylary py-2">Remote•Full-time•$130,000 - $175,000</p>
                        <button id="not-applied-btn" class="btn statusb">Not Applied</button>
                        <p class="job-condition text-[#323B49] pb-4 pt-2">Build cross-platform mobile applications using React Native. Work on products used by millions
                            of users worldwide.</p>
                            <button id="interview-btn-card" class="btn btn-outline btn-accent mr-2">Interview</button>
                        <button id="rejected-btn-card" class="btn btn-outline btn-error">Rejected</button>
                    </div>
                    <button id="delete-btn" class="btn btn-circle">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
        `;
        filterSectionRejected.appendChild(card);
    }
};