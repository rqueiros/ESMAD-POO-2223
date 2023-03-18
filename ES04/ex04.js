function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function registerUser(name, courses, profile, morningSession, afternoonSession) {
  const table = document.querySelector('table');
  const line = document.createElement('tr');

  // check the selected course
  let course = '';
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].checked === true) {
      course = capitalizeString(courses[i].value);
    }
  }

  // format session string for: morning/afternoon
  let morningSessionValue = '';
  if (morningSession === true && afternoonSession === true) {
    morningSessionValue = 'M/A';
  } else if (morningSession === true && afternoonSession === false) {
    morningSessionValue = 'M';
  } else if (morningSession === false && afternoonSession === true) {
    morningSessionValue = 'A';
  }

  line.innerHTML = `
    <td>${name}</td>
    <td>${course}</td>
    <td>${capitalizeString(profile)}</td>
    <td>${morningSessionValue}</td>
  `;
  table.appendChild(line);
}

function requireSessionValues() {
  const sessionCheckboxes = document.getElementsByClassName('sessionCheckbox');

  let atLeastOneChecked = false;
  for (let i = 0; i < sessionCheckboxes.length; i++) {
    if (sessionCheckboxes[i].checked === true) {
      atLeastOneChecked = true;
    }
  }
  return atLeastOneChecked;
}

const frmUserRegister = document.querySelector('form');
const sltProfile = document.getElementById('sltProfile');
const countButton = document.querySelector('input[type="button"]');

countButton.addEventListener('click', function () {
  const table = document.querySelector('table');
  const tableLines = table.querySelectorAll('tr');
  const registeredUsers = tableLines.length - 1;
  alert(`Users registered: ${registeredUsers}`);
});

// form submit: register user
frmUserRegister.addEventListener('submit', function (event) {
  event.preventDefault();

  // validate if at least one session has been selected
  if (!requireSessionValues()) {
    alert('Please select at least one session');
    return false;
  }

  const name = document.getElementById('txtName').value;
  const courses = document.getElementsByName('course');
  const profile = document.getElementById('sltProfile').value;
  const morningSession = document.getElementById('morningSession').checked;
  const afternoonSession = document.getElementById('afternoonSession').checked;

  registerUser(name, courses, profile, morningSession, afternoonSession);

  frmUserRegister.reset();
  return true;
});

// add another option to the profile
sltProfile.addEventListener('change', function () {
  if (sltProfile.value === 'other') {
    const otherOption = prompt('Add another option please.');
    if (otherOption === null) {
      return false;
    }

    const newOption = document.createElement('option');
    newOption.value = otherOption.toLowerCase();
    newOption.label = otherOption;
    sltProfile.insertBefore(newOption, sltProfile.firstChild);
    return true;
  }
  return false;
});
