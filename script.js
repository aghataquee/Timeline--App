document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".timeline-btn");
  const modal = document.getElementById("popup-modal");
  const closeBtn = document.getElementById("close-btn");

  const modalTitle = document.getElementById("modal-title");
  const modalImg = document.getElementById("modal-img");
  const modalDesc = document.getElementById("modal-desc");
  const theme_toggle=document.getElementById("theme-toggle");
  /* Theme toggle */
  theme_toggle.addEventListener('click', function () {
  const body = document.body;
  const header = document.querySelector('header');
  const modalContent = document.querySelector('.modal-content');

  const isDark = body.style.backgroundColor === 'rgb(30, 30, 47)';

  if (isDark) {
    // Light theme
    body.style.backgroundColor = '#fdfdfd';
    body.style.color = '#333';
    header.style.backgroundColor = '#1e1e2f';
    if (modalContent) {
      modalContent.style.backgroundColor = '#fff';
      modalContent.style.color = '#333';
    }
  } else {
    // Dark theme
    body.style.backgroundColor = '#1e1e2f';
    body.style.color = '#f5f5f5';
    header.style.backgroundColor = '#333';
    if (modalContent) {
      modalContent.style.backgroundColor = '#2c2c2c';
      modalContent.style.color = 'aqua'; // ✅ Set text color to aqua
    }
  }
});

/* theme_toggle.addEventListener('click', function () {
  const body = document.body;

  // Toggle background and text color directly
  if (body.style.backgroundColor === 'rgb(30, 30, 47)') {
    // Switch to light theme
    body.style.backgroundColor = '#fdfdfd';
    body.style.color = '#333';
  } else {
    // Switch to dark theme
    body.style.backgroundColor = '#1e1e2f';
    body.style.color = '#f5f5f5';
    modalContent.style.color = '#f5f5f5';
    

  }
});*/
  


  // Add extra: category display
  const modalCategory = document.createElement("p");
  modalCategory.style.fontWeight = "bold";
  modalCategory.style.marginTop = "1rem";
  modalDesc.insertAdjacentElement("afterend", modalCategory);

  let eventData = [];

  // Loading JSON file from /data/events.json
  fetch("data/events.json")
    .then(res => res.json())
    .then(data => {
      eventData = data;

      // Add event listeners after data is ready
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          const year = btn.getAttribute("data-year");
          const event = eventData.find(e => e.year === year);

          if (event) {
            modalTitle.textContent = `${event.year} — ${event.title}`;
            modalImg.src = `${event.imageURL}`;
            modalImg.alt = event.title;
            modalDesc.textContent = event.description;
            modalCategory.textContent = `Category: ${event.category}`;
            modal.style.display = "flex";
          }
        });
      });
    })
    .catch(err => {
      console.error("Failed to load event data:", err);
    });

  // Close modal on X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal if clicked outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
