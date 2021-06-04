const editFormHandler = async (event) => {
    event.preventDefault();

    const id = document.querySelector('#post-id').value.trim();
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (id && title && content) {
      const response = await fetch(`/api/posts/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ id, title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/:id');
      } else {
        alert('Failed to update post');
      }
    }
  };

  document
  .querySelector('.update-form')
  .addEventListener('submit', editFormHandler);