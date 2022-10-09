const editFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]
  
    if (title && content) {
      const response = await fetch(`/api/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ post_id: id, title, post_content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashbored')
      } else {
        alert('Failed to edit post');
      }
    }
  };

  document.querySelector('#update').addEventListener('submit', editFormHandler);