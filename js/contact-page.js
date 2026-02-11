(function () {
  'use strict';

  // Load contact details from file and display
  var detailsEl = document.getElementById('contact-details');
  if (detailsEl) {
    fetch('data/contact-details.json')
      .then(function (res) { return res.ok ? res.json() : Promise.reject(); })
      .then(function (data) {
        var founder = document.getElementById('contact-founder');
        var phone = document.getElementById('contact-phone');
        var email = document.getElementById('contact-email');
        var address = document.getElementById('contact-address');
        if (founder) founder.textContent = data.founderName || '–';
        if (phone) phone.textContent = data.phoneDisplay || data.mobile || '–';
        if (email) {
          email.textContent = data.email || '–';
          email.href = 'mailto:' + (data.email || '');
        }
        if (address) address.innerHTML = (data.address || '–').replace(/\n/g, '<br />');
      })
      .catch(function () {});
  }

  // Contact form: on submit just show success message
  var form = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');
  if (form && formSuccess) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.classList.add('hidden');
      formSuccess.classList.remove('hidden');
    });
  }
})();
