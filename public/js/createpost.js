const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#create-title').value.trim();
    const content = document.querySelector('#create-content').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts/create`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/:id');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  
  document
    .querySelector('.create-form')
    .addEventListener('submit', newFormHandler);