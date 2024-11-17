// Array to store the uploaded image URLs for each button
let imageArray = [];

function updateButtonImage(buttonIndex) {
    // Get the file input element for the specific button
    const fileInput = document.getElementById(`upload${buttonIndex}`);
    
    // Check if a file was selected
    if (fileInput.files && fileInput.files[0]) {
        // Create a URL for the uploaded image file
        const imageURL = URL.createObjectURL(fileInput.files[0]);

        // Store the image URL in the array
        imageArray[buttonIndex - 1] = imageURL;

        // Optionally update the button's background or text to indicate the image was uploaded
        const button = document.getElementById(`button${buttonIndex}`);
        button.textContent = `Image ${buttonIndex} (Uploaded)`;
        button.style.backgroundImage = `url(${imageURL})`;
        button.style.backgroundSize = 'cover';
        button.style.backgroundRepeat = 'no-repeat';
    }
}

function changeImage(buttonIndex) {
    // Get the display image element
    const displayImage = document.getElementById('displayImage');

    // Check if there's an image URL for the selected button
    if (imageArray[buttonIndex - 1]) {
        // Change the source of the display image to the selected image URL
        displayImage.src = imageArray[buttonIndex - 1];
    } else {
        alert("No image uploaded for this button.");
    }
}