document.addEventListener('DOMContentLoaded', function() {
  // FAQ toggle functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', function() {
      item.classList.toggle('active');
    });
  });

  // Form submission response
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formResponse = document.getElementById('formResponse');
    formResponse.textContent = 'Thank you for your message. We will get back to you soon!';
    form.reset();
  });
});
