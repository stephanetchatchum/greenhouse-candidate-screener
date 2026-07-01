const summarizeBtn = document.getElementById('summarizeBtn')
const statusDiv = document.getElementById('status')
const resultDiv = document.getElementById('results')

summarizeBtn.addEventListener('click', function(event){
    summarizeBtn.style.display = "none";
    statusDiv.style.display = "block";
    setTimeout(function() {
        statusDiv.style.display = "none";
        resultDiv.style.display = "block";
        document.getElementById('summaryText').textContent = "Candidate has 3 years of Python experience with a strong background in backend development. She has worked on REST APIs and PostgreSQL databases in a fintech environment.";
        document.getElementById('strengthsText').textContent = "Strong Python skills, experience with Django and PostgreSQL, familiar with CI/CD pipelines.";
        document.getElementById('gapsText').textContent = "Limited experience with microservices architecture. No prior exposure to the payments domain.";
        document.getElementById('recommendationText').textContent = "ADVANCE — Strong technical fit for the role. Recommend moving to the technical interview stage.";
    }, 2000); 
});