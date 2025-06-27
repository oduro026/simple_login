// let numbers = [1,2,3,4,5,6,7]
// let names = ['kofi', 'yaw', 'kwame']

// console.log(numbers);
// console.log(names);

// let a = 7;
// let b = 10;

// if (a>b) {
//   console.log('a is greater than b');
// } else {
//   console.log('b is greater than a');
// }

// const loginPageHTML = `
// <div class="form">
//   <form action="">
//     <h3>Login</h3>
//     <label for="username">Username:</label><br />
//     <input type="text" placeholder="Enter your username" /><br />

//     <label for="password">Password:</label><br />
//     <input type="password" placeholder="Password" /><br />

//     <input type="button" value="Submit" id="submit" />
//   </form>
// </div>
// `

// const dashboardPageHTML = `
//  <div class="dashboard">
//     <h1>Dashboard</h1>
//     <button id="logout" >Logout</button>
//   </div>
// `
// const root = document.getElementById('compssa');

// let loginPage = document.getElementById('compssa')
// loginPage.innerHTML = loginPageHTML;

// document.getElementById('submit').addEventListener('click', function() {
//   root.innerHTML = dashboardPageHTML;
// })






const loginPageHTML = `
<div class="main">
  <div class="form-container">
      <form action="">
        <h1>Login</h1>
        <div class="username-container">
          <input type="text" placeholder="Username">
          <i class='bxr  bx-user'></i> 
        </div>
        <div class="password-container">
          <input type="password" placeholder="Password">
          <i class='bxr  bx-lock'></i> 
        </div>
        <div class="button-container">
          <button id="login">Login</button>
        </div>
        <div class="remember-me-container">
          <label>
            <input type="checkbox">
            Remember me
          </label>

          <a href="#">Forgot Password?</a>
        </div>
        <div>
          
        </div>
    </div>
</div>
`;

const dashboardPageHTML = `
   <div class="dashboard-main">
      <div class="dashboard-container">
        <div>
          <h1>Cart</h1>
        </div>
        <div class="items-container">
          <p>item&apos;s total(5)</p>
          <p>&dollar; 545.50</p>
        </div>
        <div class="delivery-fees-container">
          <p>Delivery fees</p>
          <p>&dollar; 5</p>
        </div>
        <div class="tax-container">
          <p>Tax</p>
          <p>&dollar; 5</p>
        </div>
        <div class="total-container">
          <p>Total</p>
          <p>&dollar; 555.50</p>
        </div>
        <div class="logout-container">
          <button id="logout">Logout</button>
        </div>
      </div>
    </div>

`;

const root = document.getElementById('compssa');

// Function to load login page
function loadLoginPage() {
  root.innerHTML = loginPageHTML;

  // Attach event listener after rendering login page
  const submitButton = document.getElementById('login');
  submitButton.addEventListener('click', loadDashboardPage)
   
}

// Function to load dashboard page
function loadDashboardPage() {
  root.innerHTML = dashboardPageHTML;

  // Attach event listener after rendering dashboard page
  const logoutButton = document.getElementById('logout');
  logoutButton.addEventListener('click', loadLoginPage);
}

// Initial load
loadLoginPage();
