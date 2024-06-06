

document.addEventListener('DOMContentLoaded', function() {
  const themeButton = document.getElementById("theme-button");
  themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    themeButton.textContent = document.body.classList.contains("dark-mode") ? "Toggle Light Mode" : "Toggle Dark Mode";
  });

  const signNowButton = document.getElementById('sign-now-button');
  signNowButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
  });

  function validateForm() {
    let hasErrors = false;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    [name, email, password].forEach(input => {
      if (input.value.length < 2) {
        input.classList.add('error');
        hasErrors = true;
      } else {
        input.classList.remove('error');
      }
    });

    if (!email.value.includes('@') || !email.value.includes('.')) {
      email.classList.add('error');
      hasErrors = true;
    } else {
      email.classList.remove('error');
    }

    /* code added */
    const person = { name: name, email: email, password: password };

    if (!hasErrors) {
      addSignature(name.value, email.value);
      toggleModal(person);
      name.value = '';
      email.value = '';
      password.value = '';
    }
  }

  function addSignature(name, email) {
    const signaturesSection = document.querySelector('.signatures');
    const newSignature = document.createElement('p');
    newSignature.textContent = `🖊️ ${name} supports this.`;
    signaturesSection.appendChild(newSignature);
    updateCounter();
  }

  let count = 3;
  function updateCounter() {
    count++;
    const counterElement = document.getElementById('counter');
    if (!counterElement) {
      const signaturesSection = document.querySelector('.signatures');
      const newCounter = document.createElement('p');
      newCounter.id = 'counter';
      newCounter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
      signaturesSection.appendChild(newCounter);
    } else {
      counterElement.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
    }
  }
});

var modal = document.getElementById("myModal");

var btn = document.getElementById("sign-now-button");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  // modal.style.display = "block";
  validateForm();
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* code added */
const toggleModal = (person) => {
  modal = document.getElementById("myModal");
  modal.style.display = "block";

  setTimeout(() => {
    modal.style.display = "none";
  }, 4000);
}

