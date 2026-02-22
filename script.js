let interview = [];
let rejected = [];
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let jobCount = document.getElementById('job-count-value');


// interview.push({firstName: 'John'},{lastName: 'Doe'});
function updateCounts() { 
    const totalJoba = document.getElementById('all-card').children.length;
    interviewCount.innerText = interview.length;
    rejectedCount.innerText = rejected.length;
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
        interviewBtn.classList.remove('btn-primary');
        rejectedBtn.classList.remove('btn-primary');
    } else if(buttonId === 'interview-btn'){
        allBtn.classList.remove('btn-primary');
        interviewBtn.classList.add('btn-primary');
        rejectedBtn.classList.remove('btn-primary');
    } else if(buttonId === 'rejected-btn'){
        allBtn.classList.remove('btn-primary');
        interviewBtn.classList.remove('btn-primary');
        rejectedBtn.classList.add('btn-primary');
    }
}
