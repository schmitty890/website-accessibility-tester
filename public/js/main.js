// Fetch accessibility issues
const testAccessibility = async (e) => {
  e.preventDefault();
  const url = document.querySelector('#url').value;
  console.log(url);
};
// Add issues to the DOM

// Set loading state

// Excape HTML

document.querySelector('#form').addEventListener('submit', testAccessibility);
