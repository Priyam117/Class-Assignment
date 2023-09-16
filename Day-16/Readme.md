# Information Card

This is a simple HTML and JavaScript code that creates an information card that displays a user's first name, last name, country, phone number, state, city, and village.

## How to use

1. Clone the repository.
2. Open the `index.html` file in a text editor.
3. Enter your information in the fields.
4. Save the file.
5. Open the `index.html` file in a web browser.

### Step 1: HTML

Create an HTML file and include the following code:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Information Card</title>
  </head>
  <body>
    <div class="container">
      <div id="info-card">
        <h1>User Information Card</h1>
        <div id="user-info">
          <div class="field">
            <span class="label">First Name:</span>
            <span id="first-name"></span>
          </div>
          <div class="field">
            <span class="label">Last Name:</span>
            <span id="last-name"></span>
          </div>
          <div class="field">
            <span class="label">Country:</span>
            <span id="country"></span>
          </div>
          <div class="field">
            <span class="label">Phone Number:</span>
            <span id="phone-number"></span>
          </div>
          <div class="field">
            <span class="label">State:</span>
            <span id="state"></span>
          </div>
          <div class="field">
            <span class="label">City:</span>
            <span id="city"></span>
          </div>
          <div class="field">
            <span class="label">Village:</span>
            <span id="village"></span>
          </div>
        </div>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>

```

### Step 2: CSS

Create an CSS file and include the following code:

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #f0f0f0;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 400px;
  width: 100%;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

#info-card {
  text-align: center;
}

.field {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
  color: #555;
  flex: 1;
}

#user-info span {
  flex: 2;
  color: #444;
  text-align: left;
  padding-left: 10px;
}

```

### Step 3: JS

Create an JS file and include the following code:

```
const storedUserInfo = localStorage.getItem("userInformation");
if (storedUserInfo) {
  const userInfo = JSON.parse(storedUserInfo);
  document.getElementById("first-name").textContent = userInfo.firstName;
  document.getElementById("last-name").textContent = userInfo.lastName;
  document.getElementById("country").textContent = userInfo.country;
  document.getElementById("phone-number").textContent = userInfo.phoneNumber;
  document.getElementById("state").textContent = userInfo.state;
  document.getElementById("city").textContent = userInfo.city;
  document.getElementById("village").textContent = userInfo.village;
}
function storeUserInfo() {
  const firstName = prompt("Enter your first name:");
  const lastName = prompt("Enter your last name:");
  const country = prompt("Enter your country:");
  const phoneNumber = prompt("Enter your phone number:");
  const state = prompt("Enter your state:");
  const city = prompt("Enter your city:");
  const village = prompt("Enter your village:");

  const userInfo = {
    firstName,
    lastName,
    country,
    phoneNumber,
    state,
    city,
    village,
  };

  localStorage.setItem("userInformation", JSON.stringify(userInfo));
  document.getElementById("first-name").textContent = userInfo.firstName;
  document.getElementById("last-name").textContent = userInfo.lastName;
  document.getElementById("country").textContent = userInfo.country;
  document.getElementById("phone-number").textContent = userInfo.phoneNumber;
  document.getElementById("state").textContent = userInfo.state;
  document.getElementById("city").textContent = userInfo.city;
  document.getElementById("village").textContent = userInfo.village;
}
storeUserInfo();

```

## Code explanation

The HTML code creates the basic structure of the information card. The CSS code styles the card. The JavaScript code populates the card with the user's information.

The HTML code contains a `<div>` element with the ID of `info-card`. This element contains all of the other elements on the card.

The CSS code styles the `info-card` element with a width of 300px, a height of 200px, and a background color of white. The CSS code also styles the text on the card with a font size of 16px and a color of black.

The JavaScript code gets the user's information from the fields in the HTML code. The JavaScript code then populates the card with the user's information.

## Conclusion

This is a simple HTML and JavaScript code that creates an information card that displays a user's first name, last name, country, phone number, state, city, and village. The code is easy to understand and can be customized to meet your needs.