function removeJob(jobCardId, jobStatus) {
    const jobCard = document.getElementById(jobCardId);
    const totalJobsElement = document.getElementById('total_jobs');
    let totalJobs = Number(totalJobsElement.innerText);
    totalJobs--;
    totalJobsElement.innerText = totalJobs;
    document.getElementById('total').innerText = totalJobs;
    if (jobCard) {
        jobCard.style.display = 'none';

        const status = document.getElementById(jobStatus).innerText;
        if (status === 'Interview') {
            let count = document.getElementById('interview').innerText;
            if (Number(count) > 0) {
                count--;
                document.getElementById('interview').innerText = count;
            }
        }
        else if (status === 'Rejected') {
            let count = document.getElementById('rejected').innerText;
            if (Number(count) > 0) {
                count--;
                document.getElementById('rejected').innerText = count;
            }
        }
    }
}


