// Function used on the homepage/store page to redirect when a product card is clicked
function openProduct(page) {
    window.location.href = page;
}

// --- Dark Mode Logic ---
// 1. Get the toggle button element
const toggle = document.getElementById("dark-toggle");

// Function to apply the correct theme immediately when a page loads
function applyTheme() {
    // Check local storage for the 'dark' item
    const isDark = localStorage.getItem('theme') === 'dark';

    if (isDark) {
        // If stored as dark, add the 'dark' class to the body
        document.body.classList.add("dark");
    } else {
        // Otherwise, make sure the 'dark' class is removed (default light mode)
        document.body.classList.remove("dark");
    }
}

// 2. Add an event listener to the toggle button for user interaction
// The 'toggle' element might be null if you are on a contact page without a header, 
// so we add a check to prevent errors.
if (toggle) {
    toggle.addEventListener("click", () => {
        // Toggle the 'dark' class on the body
        document.body.classList.toggle("dark");

        // 3. Save the user's preference to local storage
        if (document.body.classList.contains("dark")) {
            localStorage.setItem('theme', 'dark'); // Save 'dark' mode setting
        } else {
            localStorage.setItem('theme', 'light'); // Save 'light' mode setting
        }
    });
}

// 4. Call the applyTheme function when the script runs (i.e., when any page loads)
applyTheme();


// --- Responsive Hamburger Menu Logic ---

/**
 * Toggles the visibility of the navigation links on mobile devices.
 * This function is called by the 'onclick' event in your HTML's hamburger button.
 */
function toggleMenu() {
  // Get the navigation element by its ID
  var navElement = document.getElementById("navbar-links");
  
  // Toggle the 'responsive' class. The CSS handles making the links visible when this class is present.
  if (navElement) {
    navElement.classList.toggle("responsive");
  }
}
