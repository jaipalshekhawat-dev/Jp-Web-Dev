// FORM SUBMIT
function submitForm() {
  const success = document.getElementById('formSuccess');
  success.classList.remove('d-none');
  setTimeout(() => { success.classList.add('d-none'); }, 5000);
}
