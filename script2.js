let currentTab = 'all';
const btnAll = document.getElementById('all-btn');
const btnIntervew = document.getElementById('interview-btn');
const btnRejected = document.getElementById('rejected-btn');

const allSection = document.getElementById('all-card');
const interviewSection = document.getElementById('interview-section');
const rejectSection = document.getElementById('rejected-section');

const jobCount = document.getElementById('job-count');
const jobCountInterview = document.getElementById('job-count-interview');
const jobCountRejected = document.getElementById('job-count-rejected');

const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');


const noJobs = document.getElementById('no-jobs-all')
const noJobsInterview = document.getElementById('no-jobs-interview')
const noJobsReject = document.getElementById('no-jobs-rejected')

// console.log(noJobs,noJobsInterview,noJobsReject)

// console.log(allSection,interviewSection,rejectSection)
function switchTab(tab) {
    currentTab = tab;
    noJobs.classList.add('hidden')
    noJobsReject.classList.add('hidden')
    noJobsInterview.classList.add('hidden')

    // console.log(currentTab)
    if (tab === 'all') {
        btnAll.classList.add('btn-primary')
        btnRejected.classList.remove('btn-primary')
        btnIntervew.classList.remove('btn-primary')

        rejectSection.classList.add('hidden')
        allSection.classList.remove('hidden')
        interviewSection.classList.add('hidden')

        jobCount.classList.remove('hidden')
        jobCountInterview.classList.add('hidden')
        jobCountRejected.classList.add('hidden')

        
 
        
    }
    if (tab === 'interview') {
        // console.log('rejected click')
        btnIntervew.classList.add('btn-primary')
        btnRejected.classList.remove('btn-primary')
        btnAll.classList.remove('btn-primary')

        allSection.classList.add('hidden')
        rejectSection.classList.add('hidden')
        interviewSection.classList.remove('hidden')

        jobCount.classList.add('hidden')
        jobCountInterview.classList.remove('hidden')
        jobCountRejected.classList.add('hidden')

        if (interviewSection.children.length === 0) {
                    // console.log('interviewSection oooooo')
                    noJobsInterview.classList.remove('hidden')
        }

        // noJobs.classList.remove('hidden')

    }
    if (tab === 'rejected') {
        // console.log('rejected click')
        btnRejected.classList.add('btn-primary')
        btnAll.classList.remove('btn-primary')
        btnIntervew.classList.remove('btn-primary')

        rejectSection.classList.remove('hidden')
        allSection.classList.add('hidden')
        interviewSection.classList.add('hidden')

        jobCount.classList.add('hidden')
        jobCountInterview.classList.add('hidden')
        jobCountRejected.classList.remove('hidden')



        if (rejectSection.children.length === 0) {
                    // console.log('rejectSection oooooo')
                    noJobsReject.classList.remove('hidden')
        }
        
        
    }
}



document.addEventListener('click', function (event) {
    // console.log(event.target)
    const clickEvent = event.target;
    const card = clickEvent.closest('.cadr');
    const status = card.querySelector('.statusb');
    if (clickEvent.classList.contains('interview-btn-card')) {
        // console.log(clickEvent.parentNode.parentNode.parentNode)
        status.innerText = 'interview';
        interviewSection.appendChild(card);
        status.classList.add('bg-green-500');
        status.classList.remove('bg-red-500');
        updateCount();
    }
    if (clickEvent.classList.contains('rejected-btn-card')) {
        // console.log('rejected click')
        rejectSection.appendChild(card)
        status.innerText = 'rejected';
        status.classList.add('bg-red-500');
        updateCount();
    }
    if (clickEvent.classList.contains('delete-btn')) {
        // console.log(card.parentNode)
        card.parentNode.removeChild(card)
        updateCount();
    }
    
})


function checkEmptySections() {

    
    noJobs.classList.add('hidden');
    noJobsInterview.classList.add('hidden');
    noJobsReject.classList.add('hidden');

    if (currentTab === 'all' && allSection.children.length === 0) {
        noJobs.classList.remove('hidden');
    }

    if (currentTab === 'interview' && interviewSection.children.length === 0) {
        noJobsInterview.classList.remove('hidden');
    }

    if (currentTab === 'rejected' && rejectSection.children.length === 0) {
        noJobsReject.classList.remove('hidden');
    }
}


function updateCount() {
    const counts = {
        all: allSection.children.length,
        interview: interviewSection.children.length,
        rejected: rejectSection.children.length 
    }
    const totalJob = totalCount.innerText = counts.all;
    const totalinterview = interviewCount.innerText = counts.interview;
    const totalrejected = rejectedCount.innerText = counts.rejected;
    jobCount.innerText = totalJob + 'jobs';
    jobCountInterview.innerText = totalinterview + 'jobs';
    jobCountRejected.innerText = totalrejected + 'jobs';

    
    checkEmptySections();
}
updateCount();
switchTab('all');
// console.log(totalJob)
