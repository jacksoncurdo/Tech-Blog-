const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value.trim();
    const post_id = document.querySelector('#post-id').value.trim();
  
    if (content && post_id) {
      const response = await fetch(`/api/comment/post/:id`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  
  document
    .querySelector('.new-comment')
    .addEventListener('submit', commentFormHandler);