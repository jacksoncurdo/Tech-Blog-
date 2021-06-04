const editFormHandler = async (event) => {
    event.preventDefault();

    const delButtonHandler = async (event) => {
        if (event.target.hasAttribute('data-id')) {
          const id = event.target.getAttribute('data-id');
      
          const response = await fetch(`/api/posts/delete/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            document.location.replace('/dashboard/:id');
          } else {
            console.log(id)
            alert('Failed to delete post');
          }
        }
      }
    };

      document
  .querySelector('.delete-post')
  .addEventListener('click', delButtonHandler);