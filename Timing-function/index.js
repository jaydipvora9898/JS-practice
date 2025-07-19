const birthdayMonth = 7; 
const birthdayDay = 2;   

function updateCountdown() {
  const now = new Date();
  let currentYear = now.getFullYear();
  let birthday = new Date(currentYear, birthdayMonth - 1, birthdayDay);

  if (now > birthday) {
    birthday = new Date(currentYear + 1, birthdayMonth - 1, birthdayDay);
  }

  const diff = birthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown(); 
