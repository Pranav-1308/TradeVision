// --- SCROLL ANIMATIONS ---
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150; 

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger on load

// --- BLOB ANIMATION ---
const blobAnimation = `
    @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
    }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = blobAnimation;
document.head.appendChild(styleSheet);

document.querySelectorAll('.animate-blob').forEach(blob => {
    blob.style.animation = 'blob 7s infinite';
});
document.querySelectorAll('.animation-delay-2100').forEach(blob => {
    blob.style.animationDelay = '2s';
});
document.querySelectorAll('.animation-delay-4000').forEach(blob => {
    blob.style.animationDelay = '4s';
});

// --- VIEW SWITCHING LOGIC ---
const landingPageSections = [
    document.getElementById('hero'),
    document.getElementById('features'),
    document.getElementById('about'),
    document.getElementById('contact'),
    document.getElementById('footer')
];
const dashboardSection = document.getElementById('dashboard');
const startAnalyzingBtn = document.querySelector('.glow-button');
const getStartedNavBtn = document.getElementById('get-started-btn');

function showDashboard(event) {
    event.preventDefault(); // Prevent the link from navigating

    // Hide landing page sections
    landingPageSections.forEach(section => section.classList.add('hidden'));

    // Show the dashboard and a new footer
    dashboardSection.classList.remove('hidden');
    document.getElementById('footer').classList.remove('hidden'); // Ensure footer is visible on dashboard
}

startAnalyzingBtn.addEventListener('click', showDashboard);
getStartedNavBtn.addEventListener('click', showDashboard);
