document.addEventListener('DOMContentLoaded', function () {
  const videoBtn = document.getElementById('videoBtn');
  const quizBtn = document.getElementById('quizBtn');

  videoBtn.addEventListener('click', function () {
    alert('Video section will be available soon.');
  });

  quizBtn.addEventListener('click', function () {
    window.location.href = 'quiz.html';
  });
});
