// Button click
document.getElementById("colorBtn").addEventListener("click", () => {
    const message = document.getElementById("message");
    message.textContent = "You clicked the button!";
    message.style.color = "crimson";
  });
  
  // Hover effect
  const colorBtn = document.getElementById("colorBtn");
  colorBtn.addEventListener("mouseover", () => {
    colorBtn.style.backgroundColor = "lightblue";
  });
  colorBtn.addEventListener("mouseout", () => {
    colorBtn.style.backgroundColor = "";
  });
  
  // Keypress detection
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      alert("Enter key pressed!");
    }
  });
  
  // Double-click bonus
  colorBtn.addEventListener("dblclick", () => {
    alert("Double-click detected!");
  });
  
  // Image gallery function
  function changeImage(num) {
    document.getElementById("mainImg").src = `https://picsum.photos/300?random=${num}`;
  }
  
  
  // Tabs
  function showTab(tabId) {
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById(tabId).style.display = "block";
  }
  
  // Form validation
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    const feedback = document.getElementById("formFeedback");
  
    if (!name || !email || !password) {
      feedback.textContent = "Please fill out all fields.";
      feedback.style.color = "red";
      return;
    }
  
    if (!email.includes("@")) {
      feedback.textContent = "Invalid email format.";
      feedback.style.color = "red";
      return;
    }
  
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
      feedback.style.color = "red";
      return;
    }
  
    feedback.textContent = `Thank you, ${name}! We'll contact you at ${email}.`;
    feedback.style.color = "green";
  });
  