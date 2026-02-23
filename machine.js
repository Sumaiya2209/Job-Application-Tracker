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
    jobsSection.style.display = 'block';
}

function getClickedButton(buttonId) {
    const clickedButton = document.getElementById(buttonId);
    return clickedButton.innerText;
}

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