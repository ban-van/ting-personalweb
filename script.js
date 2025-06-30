document.addEventListener('DOMContentLoaded', () => {
  const currentPage = location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

document.querySelectorAll('.gallery-grid img').forEach((img) => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.05)';
    img.style.boxShadow = '0 0 15px rgba(255,255,255,0.4)';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
    img.style.boxShadow = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactLink = document.getElementById("contact-link");
  const services = document.getElementById("services");
  const contact = document.getElementById("contact");

  contactLink.addEventListener("click", function (e) {
    e.preventDefault();

    services.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      contact.scrollIntoView({ behavior: "smooth" });
    }, 100);
  });
});
