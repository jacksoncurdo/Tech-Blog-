const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  let inactivityTime = function () {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
  
    logout;
    
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logout, 30000)
    }
  };
  
  
  document.querySelector('#logout').addEventListener('click', logout);
  
  window.addEventListener('load', inactivityTime, true);