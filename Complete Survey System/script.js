document.addEventListener('DOMContentLoaded', function () {
    const okButton = document.getElementById('ok-button');
    okButton.addEventListener('click', function () {
        const submissionModal = document.getElementById('submission-modal');
        submissionModal.style.display = 'none';
    });
});

function submitSurvey() {
    const formData = new FormData(document.getElementById('survey-form'));
    const surveyData = {};

    formData.forEach((value, key) => {
        surveyData[key] = value;
    });
    
    const submissionModal = document.getElementById('submission-modal');
    submissionModal.style.display = 'block';
}
``

