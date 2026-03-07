document.addEventListener('DOMContentLoaded', function () {
  const videoBtn = document.getElementById('videoBtn');
  const quizBtn = document.getElementById('quizBtn');
  const guidelinesBtn = document.getElementById('guidelinesBtn');

  videoBtn.addEventListener('click', function () {
    window.location.href = 'video.html';
  });

  quizBtn.addEventListener('click', function () {
    window.location.href = 'quiz.html';
  });

  if (guidelinesBtn) {
    guidelinesBtn.addEventListener('click', function () {
      // open the PDF in a new tab; spaces encoded
      window.open('Gravity%20Grand%20Prix.pdf', '_blank');
    });
  }
});
