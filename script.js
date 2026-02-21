let interview = [];
let rejected = [];
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let jobCount = document.getElementById('job-count-value');


interview.push({firstName: 'John'},{lastName: 'Doe'});
function updateCounts() { 
    const totalJoba = document.getElementById('all-card').children.length;
    interviewCount.innerText = interview.length;
    rejectedCount.innerText = rejected.length;
    // console.log(totalJoba);
    totalCount.innerText = totalJoba;
    jobCount.innerText = totalJoba;
}
updateCounts();