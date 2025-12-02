function openProduct(page) {
    window.location.href = page;
}

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

// 4. Call the applyTheme function when the script runs (i.e., when any page loads)
applyTheme();