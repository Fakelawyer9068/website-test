// Global variables
let loggedIn = false;
let balance = 100;
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let loggedInUser = document.getElementById('loggedInUser');
let balanceText = document.getElementById('balance');

// Login function
function login() {
  let username = usernameInput.value;
  let password = passwordInput.value;

  if ( username === 'elijah' && password === '123') {
    loggedIn = true;
    loggedInUser.textContent = username;
    balanceText.textContent = 'Balance: $' + balance.toFixed(2);

    // Show account section, hide login section
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('accountSection').style.display = 'block';
  } else {
    alert('Invalid username or password. Please try again.');
  }

  // Clear input fields
  usernameInput.value = '';
  passwordInput.value = '';
}

// Check balance function
function checkBalance() {
  if (loggedIn) {
    balanceText.textContent = 'Balance: $' + balance.toFixed(2);
  } else {
    alert('You are not logged in. Please login to check your balance.');
  }
}

// Deposit function
function deposit() {
  if (loggedIn) {
    let amount = parseFloat(document.getElementById('amount').value);

    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      balanceText.textContent = 'Balance: $' + balance.toFixed(2);
      document.getElementById('amount').value = '';

      // Check if secret page condition is met
      if (amount === 420069) {
        promptForSecretPassword();
      }
    } else {
      alert('Invalid amount. Please enter a valid number.');
    }
  } else {
    alert('You are not logged in. Please login to make a deposit.');
  }
}

// Prompt for secret password
function promptForSecretPassword() {
  let secretPassword = prompt('Enter the secret password:');
  if (secretPassword === 'men') {
    window.location.href = 'secret.html';
  } else {
    alert('Wrong password. Access denied.');
  }
}

// Withdraw function
function withdraw() {
  if (loggedIn) {
    let amount = parseFloat(document.getElementById('amount').value);

    if (!isNaN(amount) && amount > 0) {
      if (amount <= balance) {
        balance -= amount;
        balanceText.textContent = 'Balance: $' + balance.toFixed(2);
        document.getElementById('amount').value = '';
      } else {
        alert('Insufficient funds. You cannot withdraw more than your balance.');
      }
    } else {
      alert('Invalid amount. Please enter a valid number.');
    }
  } else {
    alert('You are not logged in. Please login to make a withdrawal.');
  }
}

// Logout function
function logout() {
  loggedIn = false;
  loggedInUser.textContent = '';
  balanceText.textContent = '';

  // Show login section, hide account section
  document.getElementById('loginSection').style.display = 'block';
  document.getElementById('accountSection').style.display = 'none';
}
function logoutFromSecret() {
    window.location.href = 'index.html';
  }
