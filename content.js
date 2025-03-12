// List of excluded websites (use only hostnames)
const excludedWebsites = [
    "chat.deepseek.com",
    "chatgpt.com",
    "github.com",
    "leetcode.com",
    "claude.ai",
    "neetcode.io",
    "mail.google.com",
    "takeuforward.org"
  ];
  
  // Get the current website's hostname
  const currentHostname = window.location.hostname;
  
  // Check if the current website is excluded
  if (!excludedWebsites.includes(currentHostname)) {
    // Preload the image
    const img = new Image();
    img.src = chrome.runtime.getURL('images/Zoro.jpeg');
  
    // Create the overlay after the image is loaded
    img.onload = () => {
      const overlay = document.createElement('div');
      overlay.className = 'study-overlay';
  
      overlay.innerHTML = `
        <div class="study-card">
          <img src="${img.src}" alt="Study Reminder">
          <h1>Time to Study!</h1>
          <p>Stay focused and productive!</p>
        </div>
      `;
  
      document.body.appendChild(overlay);
  
      // Remove the overlay after 10 seconds
      setTimeout(() => {
        overlay.remove();
      }, 10000); // 10 seconds
    };
  }