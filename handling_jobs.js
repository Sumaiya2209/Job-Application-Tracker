const jobs = [1, 2, 3, 4, 5, 6, 7, 8];

function showOnly(id) {
  const jobsSection = document.getElementById(id);

  const sections = ['all_jobs', 'interviewed_jobs', 'rejected_jobs'];
  for (const section of sections) {
    document.getElementById(section).style.display = 'none';
  }
  jobsSection.style.display = 'grid';

  const jobNumb = document.getElementById('jobNumb');
  const interviewCount = document.getElementById('interview').innerText;
  const rejectedCount = document.getElementById('rejected').innerText;
  if (id === 'interviewed_jobs') {
    jobNumb.innerText = interviewCount + ' of ';

    const interviewedJobs = document.getElementById("interviewed_jobs");

    const noInterview = document.getElementById("no_interview");
    noInterview.style.display = 'grid'
    noInterview.style.placeItems = 'center'

    if (Number(interviewCount) > 0) {
      noInterview.style.display = 'none'
      for (const job of jobs) {
        const intJob = document.getElementById('job' + job + '_status');
        if (intJob.innerText == "Interview") {
          const jobElement = document.getElementById('job' + job + '_card');
          interviewedJobs.style.display = 'grid';
          interviewedJobs.style.gap = '1.50rem';
          interviewedJobs.appendChild(jobElement)
        }
      }
    }
  }
  else if (id === 'rejected_jobs') {
    jobNumb.innerText = rejectedCount + ' of ';

    const rejectedJobs = document.getElementById("rejected_jobs");

    const noReject = document.getElementById("no_rejection");
    noReject.style.display = 'grid'
    noReject.style.placeItems = 'center'

    if (Number(rejectedCount) > 0) {
      const noReject = document.getElementById("no_rejection");
      noReject.style.display = 'none'
      for (const job of jobs) {
        const intJob = document.getElementById('job' + job + '_status');
        if (intJob.innerText == "Rejected") {
          const jobElement = document.getElementById('job' + job + '_card');
          rejectedJobs.style.display = 'grid';
          rejectedJobs.style.gap = '1.50rem';
          rejectedJobs.appendChild(jobElement)
        }
      }
    }
  }
  else {
    jobNumb.innerText = '';
  }
}


for (const job of jobs) {
  document.getElementById('interview' + job).addEventListener('click', function () {
    const jobStatus = document.getElementById('job' + job + '_status');
    let interview = Number(document.getElementById('interview').innerText);
    let rejected = Number(document.getElementById('rejected').innerText);

    if (jobStatus.innerText === 'NOT APPLIED') {
      interview = interview + 1;
    }
    else if (jobStatus.innerText === 'Rejected') {
      rejected = rejected - 1;
      interview = interview + 1;
      document.getElementById('rejected').innerText = rejected;
    }
    document.getElementById('interview').innerText = interview;

    jobStatus.innerText = "Interview";
    jobStatus.classList.remove('text-gray-500', 'bg-gray-100', 'text-red-500', 'bg-red-100');
    jobStatus.classList.add('text-green-500', 'bg-green-100', 'px-2', 'py-1', 'rounded');
  })

  document.getElementById('rejected' + job).addEventListener('click', function () {
    const jobStatus = document.getElementById('job' + job + '_status');
    let interview = Number(document.getElementById('interview').innerText);
    let rejected = Number(document.getElementById('rejected').innerText);

    if (jobStatus.innerText === 'NOT APPLIED') {
      rejected = rejected + 1;
    }
    else if (jobStatus.innerText === 'Interview') {
      interview = interview - 1;
      rejected = rejected + 1;
      document.getElementById('interview').innerText = interview;
    }

    document.getElementById('rejected').innerText = rejected;

    jobStatus.innerText = "Rejected";
    jobStatus.classList.remove('text-gray-500', 'bg-gray-100', 'text-green-500', 'bg-green-100');
    jobStatus.classList.add('text-red-500', 'bg-red-100', 'px-2', 'py-1', 'rounded');
  })
}