/* For Show and hidden section  */
function showOnly(id) {
    const jobsSection = document.getElementById(id);

    // Hidden sections
    const allJobs = document.getElementById('all_jobs');
    const interviewedJobs = document.getElementById('interviewed_jobs');
    const rejectedJobs = document.getElementById('rejected_jobs');
    allJobs.style.display = 'none';
    interviewedJobs.style.display = 'none';
    rejectedJobs.style.display = 'none';

    // Show selected section
    jobsSection.style.display = 'grid';

}

/* get element innerText by clicking button  */
function getClickedButton(buttonId) {
    const clickedButton = document.getElementById(buttonId);
    return clickedButton.innerText;
}


/* Update job satatus */
function updateJobStatus(jobId, status) {
    const jobStatus = document.getElementById(jobId);
    jobStatus.innerText = status;
    jobStatus.classList.remove('text-gray-500', 'bg-gray-100', 'text-green-500', 'bg-green-100', 'text-red-500', 'bg-red-100');
    if (status === 'Interview') {
        jobStatus.classList.add('text-green-500', 'bg-green-100', 'px-2', 'py-1', 'rounded');
    } else if (status === 'Rejected') {
        jobStatus.classList.add('text-red-500', 'bg-red-100', 'px-2', 'py-1', 'rounded');
    }
}


/* update interview count */
function updateInterviewCount(job_status) {
    const jobStatus = document.getElementById(job_status);
    console.log(jobStatus.innerText);
    if (jobStatus.innerText !== 'Interview' && jobStatus.innerText === 'NOT APPLIED' && jobStatus.innerText !== 'Rejected') {
        let count = document.getElementById('interview').innerText;
        count = Number(count) + 1;
        document.getElementById('interview').innerText = count;
    }
} 

/* update rejected count */
function updateRejectedCount(job_status) {
    const jobStatus = document.getElementById(job_status);
    console.log(jobStatus.innerText);   
    if (jobStatus.innerText !== 'Rejected' && jobStatus.innerText === 'NOT APPLIED' && jobStatus.innerText !== 'Interview') {
        let count = document.getElementById('rejected').innerText;
        count = Number(count) + 1;
        document.getElementById('rejected').innerText = count;
    }   
}


/* update interview page  */
function updateInterviewPage(jobCardId) {
     const noInterview = document.getElementById('no_interview');
  noInterview.style.display = 'none';

  const interviewedJobs = document.getElementById('interviewed_jobs');
  interviewedJobs.style.display = 'grid';
  interviewedJobs.appendChild(document.getElementById(jobCardId));
}

/* update rejected page  */
function updateRejectedPage(jobCardId) {
     const noRejection = document.getElementById('no_rejection');
  noRejection.style.display = 'none';

  const rejectedJobs = document.getElementById('rejected_jobs');
  rejectedJobs.style.display = 'grid';
  rejectedJobs.appendChild(document.getElementById('job1_card'));
}