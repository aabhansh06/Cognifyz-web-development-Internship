document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.querySelectorAll('.slide');
        
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = "none";
        });

        // Increment index and wrap around if necessary
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Display the current slide
        slides[slideIndex - 1].style.display = "block";

        // Call showSlides() again after 3 seconds
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
});
