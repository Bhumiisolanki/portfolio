// Typing effect
const tagline = document.querySelector('.tagline');
const text = "CSE Student · Digital Artist · Creative Mind";
tagline.textContent = '';
let i = 0;

function typeWriter() {
  if (i < text.length) {
    tagline.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll('.about, .skills, .projects, .contact').forEach(el => {
  observer.observe(el);
});

function openGallery() {
  document.getElementById('galleryModal').style.display = 'block';
}

function closeGallery() {
  document.getElementById('galleryModal').style.display = 'none';
}