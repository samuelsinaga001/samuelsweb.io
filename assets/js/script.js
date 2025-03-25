  // Image Slider
  document.addEventListener("DOMContentLoaded", function () {
    const projectImages = [
      "assets/myproject/p1.png",
      "assets/myproject/p2.png",
      "assets/myproject/p3.png",
      "assets/myproject/p4.png"
    ];
  
    let currentIndex = 0;
    const imgElement = document.getElementById("project-slider");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
  
    function updateImage() {
      imgElement.src = projectImages[currentIndex];
    }
  
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % projectImages.length;
      updateImage();
    });
  
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
      updateImage();
    });
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % projectImages.length;
      updateImage();
    }, 4000);
  
    updateImage();
  });
  
  // Dark Mode Toggle
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
  
    // Cek apakah pengguna pernah memilih dark mode sebelumnya
    if (localStorage.getItem("dark-mode") === "enabled") {
      body.classList.add("dark-mode");
    }
  
    toggleButton.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
  
      // Simpan preferensi pengguna
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
      } else {
        localStorage.setItem("dark-mode", "disabled");
      }
    });
  });
  