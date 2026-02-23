document.getElementById('interview1').addEventListener('click', function () {

  const jobStatus = document.getElementById('job1_status');
  if ( jobStatus.innerText === 'Interview') return;
  updateInterviewCount('job1_status');
  const jobCard = getClickedButton('interview1');
  updateJobStatus('job1_status', jobCard);

  updateInterviewPage('job1_card');
});

document.getElementById('rejected1').addEventListener('click', function () {
  const jobStatus = document.getElementById('job1_status');
  if (jobStatus.innerText === 'Rejected') return;
  updateRejectedCount('job1_status');
  const jobCard = getClickedButton('rejected1');
  updateJobStatus('job1_status', jobCard);

  updateRejectedPage('job1_card');
});

document.getElementById('interview2').addEventListener('click', function () {
  const jobStatus = document.getElementById('job2_status');
  if (jobStatus.innerText === 'Interview') return;
  updateInterviewCount('job2_status');
  const jobCard = getClickedButton('interview2');
  updateJobStatus('job2_status', jobCard);

  updateInterviewPage('job2_card');
});

document.getElementById('rejected2').addEventListener('click', function () {
  const jobStatus = document.getElementById('job2_status');
  if (jobStatus.innerText === 'Rejected') return;
  updateRejectedCount('job2_status');
  const jobCard = getClickedButton('rejected2');
  updateJobStatus('job2_status', jobCard);

  updateRejectedPage('job2_card');
});

document.getElementById('interview3').addEventListener('click', function () {
  const jobStatus = document.getElementById('job3_status');
  if (jobStatus.innerText === 'Interview') return;
  updateInterviewCount('job3_status');
  const jobCard = getClickedButton('interview3');
  updateJobStatus('job3_status', jobCard);

  updateInterviewPage('job3_card');
});

document.getElementById('rejected3').addEventListener('click', function () {
  const jobStatus = document.getElementById('job3_status');
  if (jobStatus.innerText === 'Rejected') return;
  updateRejectedCount('job3_status');
  const jobCard = getClickedButton('rejected3');
  updateJobStatus('job3_status', jobCard);

  updateRejectedPage('job3_card');
});

document.getElementById('interview4').addEventListener('click', function () {
  const jobStatus = document.getElementById('job4_status');
  if (jobStatus.innerText === 'Interview') return;
  updateInterviewCount('job4_status');
  const jobCard = getClickedButton('interview4');
  updateJobStatus('job4_status', jobCard);

  updateInterviewPage('job4_card');
});

document.getElementById('rejected4').addEventListener('click', function () {
  const jobStatus = document.getElementById('job4_status');
  if (jobStatus.innerText === 'Rejected') return;
  updateRejectedCount('job4_status');
  const jobCard = getClickedButton('rejected4');
  updateJobStatus('job4_status', jobCard);

  updateRejectedPage('job4_card');
});

document.getElementById('interview5').addEventListener('click', function () {
  const jobStatus = document.getElementById('job5_status');
  if (jobStatus.innerText === 'Interview') return;
  updateInterviewCount('job5_status');
  const jobCard = getClickedButton('interview5');
  updateJobStatus('job5_status', jobCard);

  updateInterviewPage('job5_card');
});

document.getElementById('rejected5').addEventListener('click', function () {
  const jobStatus = document.getElementById('job5_status');
  if (jobStatus.innerText === 'Rejected') return;
  updateRejectedCount('job5_status');
  const jobCard = getClickedButton('rejected5');
  updateJobStatus('job5_status', jobCard);

  updateRejectedPage('job5_card');
});

document.getElementById('interview6').addEventListener('click', function () {
  const jobStatus = document.getElementById('job6_status');
  if (jobStatus.innerText === 'Interview') return;
  updateInterviewCount('job6_status');
  const jobCard = getClickedButton('interview6');
  updateJobStatus('job6_status', jobCard);

  updateInterviewPage('job6_card');
});

document.getElementById('rejected6').addEventListener('click', function () {
  const jobStatus = document.getElementById('job6_status');
  if (jobStatus.innerText === 'Rejected') return;
  updateRejectedCount('job6_status');
  const jobCard = getClickedButton('rejected6');
  updateJobStatus('job6_status', jobCard);

  updateRejectedPage('job6_card');
});

document.getElementById('interview7').addEventListener('click', function () {
  const jobStatus = document.getElementById('job7_status');
  if (jobStatus.innerText === 'Interview') return;
  updateInterviewCount('job7_status');
  const jobCard = getClickedButton('interview7');
  updateJobStatus('job7_status', jobCard);

  updateInterviewPage('job7_card');
});

document.getElementById('rejected7').addEventListener('click', function () {
  const jobStatus = document.getElementById('job7_status');
  if (jobStatus.innerText === 'Rejected') return;
  updateRejectedCount('job7_status');
  const jobCard = getClickedButton('rejected7');
  updateJobStatus('job7_status', jobCard);

  updateRejectedPage('job7_card');
});

document.getElementById('interview8').addEventListener('click', function () {
  const jobStatus = document.getElementById('job8_status');
  if (jobStatus.innerText === 'Interview') return;
  updateInterviewCount('job8_status');
  const jobCard = getClickedButton('interview8');
  updateJobStatus('job8_status', jobCard);

  updateInterviewPage('job8_card');
});

document.getElementById('rejected8').addEventListener('click', function () {
  const jobStatus = document.getElementById('job8_status');
  if (jobStatus.innerText === 'Rejected') return;
  updateRejectedCount('job8_status');
  const jobCard = getClickedButton('rejected8');
  updateJobStatus('job8_status', jobCard);

  updateRejectedPage('job8_card');
});
