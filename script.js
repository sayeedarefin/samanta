// Get the button and the hidden message elements
const showButton = document.getElementById('showButton');
const hiddenMessage = document.getElementById('hiddenMessage');

// Add event listener to the button for click event
showButton.addEventListener('click', function() {
  // Toggle the visibility and opacity of the hidden message
  if (hiddenMessage.style.display === 'none' || hiddenMessage.style.display === '') {
    hiddenMessage.style.display = 'block';
    setTimeout(function() {
      hiddenMessage.style.opacity = '1';
    }, 10);
  } else {
    hiddenMessage.style.opacity = '0';
    setTimeout(function() {
      hiddenMessage.style.display = 'none';
    }, 500); // Match the transition duration in CSS
  }
});
