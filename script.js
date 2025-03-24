// JavaScript for Tab Interactivity
function openTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((tab) => {
        tab.classList.remove('active-tab');
    });
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach((link) => {
        link.classList.remove('active');
    });

    // Show the selected tab's content
    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active-tab');

    // Add 'active' class to the clicked tab link
    const clickedTabLink = document.querySelector(`[onclick="openTab('${tabName}')"]`);
    clickedTabLink.classList.add('active');
}
