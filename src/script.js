window.addEventListener('DOMContentLoaded', () => {
	fetchTestData(); 
});
  

async function fetchTestData() {
	try {
	  let url = 'http://localhost:3001/api/test';
  
	  const response = await fetch(url);
	  if (!response.ok) throw new Error('Network response was not ok');
	  
	  const data = await response.json();
	  updateUI(data);
	} catch (error) {
	  console.error('Failed to load test data on init:', error);
	  document.getElementById('main-content').innerText = 'Could not load test data.';
	}
}
  
function updateUI(data) {
	const container = document.getElementById('main-content');
	container.innerHTML = `
	  <h3>Test Data</h3>
	  <p>data: ${data.test}</p>
	`;
}