// Add event listener to execute code once the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Get references to necessary DOM elements
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  // Add submit event listener to the form
  cardForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Get values from input fields and trim whitespace
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName');
    const studentName = studentNameInput.value.trim();
    const personalMessage = personalMessageInput.value.trim();
    const courseName = courseNameInput ? courseNameInput.value.trim() : "a course"; // Provide default value if course name is not provided

    // Validate input fields
    if (studentName === '' || personalMessage === '') {
      alert('Please fill in all fields');
      return; // Exit function if fields are not filled
    }

    // Generate certificate template using input values
    const certificateTemplate = `
      <div class="certificate-container">
        <div class="certificate-header">
          <h2>Certificate of Achievement</h2>
          <p>This is to certify that</p>
        </div>
        <div class="certificate-body">
          <h3>${studentName}</h3>
          <p>has almost completed the</p>
          <h4>${courseName}</h4>
          <p>with legendary perseverance and world-class bad-assery for never giving up🏆</p>
        </div>
        <div class="certificate-footer">
          <img src="logo.png" alt="CodeSpace Logo">
          <p>${personalMessage}</p>
        </div>
      </div>
    `;

    // Insert generated certificate into certificate content element
    certificateContent.innerHTML = certificateTemplate;

    // Show the modal
    modal.style.display = 'block';

    // Clear input fields after submission
    studentNameInput.value = '';
    personalMessageInput.value = '';
    if (courseNameInput) courseNameInput.value = ''; // Clear course name input if it exists
  });

  // Add event listener to close modal when close button is clicked
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
});
