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

    const jobNumb = document.getElementById('jobNumb');
    const interviewCount = document.getElementById('interview').innerText;
    const rejectedCount = document.getElementById('rejected').innerText;
    if (id === 'interviewed_jobs') {
        jobNumb.innerText = interviewCount + ' of';
    } else if (id === 'rejected_jobs') {
        jobNumb.innerText = rejectedCount + ' of';;
    }
    else {
        jobNumb.innerText = '';
    }
    if(interviewCount === '0') {
        document.getElementById('no_interview').style.display = 'grid';
        document.getElementById('no_interview').classList.add('place-items-center');
    }
    if(rejectedCount === '0') {
        document.getElementById('no_rejection').style.display = 'grid';
        document.getElementById('no_rejection').classList.add('place-items-center');
    }

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
    let interview = Number(document.getElementById('interview').innerText);
    let rejected = Number(document.getElementById('rejected').innerText);

    if (jobStatus.innerText === 'NOT APPLIED') {
        interview++;
    }
    else if (jobStatus.innerText === 'Rejected') {
        rejected--;
        interview++;
        document.getElementById('rejected').innerText = rejected;
    }

    document.getElementById('interview').innerText = interview;
}

/* update rejected count */
function updateRejectedCount(job_status) {
    const jobStatus = document.getElementById(job_status);
    let interview = Number(document.getElementById('interview').innerText);
    let rejected = Number(document.getElementById('rejected').innerText);

    if (jobStatus.innerText === 'NOT APPLIED') {
        rejected++;
    }
    else if (jobStatus.innerText === 'Interview') {
        interview--;
        rejected++;
        document.getElementById('interview').innerText = interview;
    }

    document.getElementById('rejected').innerText = rejected;
}



/* job card remove */
function removeFromSection(sectionId, jobCardId) {
    const section = document.getElementById(sectionId);
    const existingCard = section.querySelector(`#${jobCardId}`);
    if (existingCard) {
        existingCard.remove();
    }
}

/* update interview page  */
function updateInterviewPage(jobCardId) {
    const interviewedJobs = document.getElementById('interviewed_jobs');
    const noInterview = document.getElementById('no_interview');

    noInterview.style.display = 'none';

    removeFromSection('rejected_jobs', jobCardId);
    removeFromSection('interviewed_jobs', jobCardId);

    const clonedCard = document.getElementById(jobCardId).cloneNode(true);

    interviewedJobs.style.display = 'grid';
    interviewedJobs.style.gap = '1.50rem';
    interviewedJobs.appendChild(clonedCard);
}

/* update rejected page  */
function updateRejectedPage(jobCardId) {
    const noRejection = document.getElementById('no_rejection');
    noRejection.style.display = 'none';

    const rejectedJobs = document.getElementById('rejected_jobs');

    removeFromSection('interviewed_jobs', jobCardId);
    removeFromSection('rejected_jobs', jobCardId);

    const clonedCard = document.getElementById(jobCardId).cloneNode(true);
    rejectedJobs.style.display = 'grid';
    rejectedJobs.style.gap = '1.50rem';
    rejectedJobs.appendChild(clonedCard);
}

