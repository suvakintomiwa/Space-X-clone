    // Countdown Timer
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); 

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const text = distance > 0
        ? `T-${days}D ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
        : "🚀 LAUNCHED!";

      document.querySelector('.countdown-number').textContent = text;
      document.getElementById('launch-countdown').textContent = text;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Mobile Menu Toggle
    document.querySelector('.fa-bars').addEventListener('click', () => {
      alert('Mobile menu would open here');
    });