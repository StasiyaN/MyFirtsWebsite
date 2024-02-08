// Get the elements
const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.getElementById('main-image');

// Add click event listeners to each thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        // Change the source of the main image to the clicked thumbnail
        const index = this.getAttribute('data-index');
        mainImage.src = `image${parseInt(index) + 1}.jpg`;
        mainImage.alt = `Image ${parseInt(index) + 1}`;
    });
});
