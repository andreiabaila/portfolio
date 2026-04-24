function toggle(id) {
  const el = document.getElementById(id);
  el.classList.toggle('hidden');
}

function showContact() {
  const email = document.getElementById('email');
  email.classList.toggle('hidden');
}