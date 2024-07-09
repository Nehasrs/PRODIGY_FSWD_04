// Example JavaScript for handling form submission and dynamic post creation
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Fetch form values
    let content = document.getElementById('post-content').value;
    let image = document.getElementById('post-image').files[0]; // Assuming single image upload
    
    // Create new post element
    let postElement = document.createElement('div');
    postElement.classList.add('post');
    
    // Construct post HTML
    let postHTML = `
        <p>${content}</p>
    `;
    
    // Append image if available
    if (image) {
        postHTML += `<img src="${URL.createObjectURL(image)}" alt="Posted image">`;
    }
    
    postElement.innerHTML = postHTML;
    
    // Append post to post list
    let postList = document.getElementById('post-list');
    postList.appendChild(postElement);
    
    // Clear form fields after posting
    document.getElementById('post-content').value = '';
    document.getElementById('post-image').value = '';
});
