const summarizeBtn = document.getElementById('summarizeBtn');
const statusDiv = document.getElementById('status');
const resultDiv = document.getElementById('results');

summarizeBtn.addEventListener('click', function(event) {
    summarizeBtn.style.display = "none";
    statusDiv.style.display = "block";
    statusDiv.textContent = "Analyzing candidate profile...";

    fetch('https://talentscreen-gpvs.onrender.com/api/screen/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            resume_text: 'John Doe is a software engineer with 5 years of Python and Django experience. He has worked on REST APIs and PostgreSQL databases.',
            job_description: 'We need a senior Python developer with Django experience and strong knowledge of REST APIs.'
        })
    })
    .then(response => response.json())
    .then(data => {
        statusDiv.style.display = "none";
        resultDiv.style.display = "block";
        document.getElementById('summaryText').textContent = data.summary;
        document.getElementById('strengthsText').textContent = data.strengths;
        document.getElementById('gapsText').textContent = data.gaps;
        document.getElementById('recommendationText').textContent = 'Fit Score: ' + data.score + '/100';
    })
    .catch(error => {
        statusDiv.textContent = 'Error: ' + error.message;
        summarizeBtn.style.display = "block";
    });
});