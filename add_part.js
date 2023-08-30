var nome = document.getElementsByName('nome')[0];
var email = document.getElementsByName('email')[0];

document.getElementById('cad_add').addEventListener('click', () => {
  registerElements(nome, email);
  nome.value = "";
  email.value = "";
});

document.getElementById('cad').addEventListener('click', () => {
  registerElements(nome, email)
  window.location.href = "Home.html";
})

const registerElements = (nome, email) => {
  let lista = createObject(nome.value, email.value);
  setObjectLocalStorage(lista);
};

const setObjectLocalStorage = (lista) => {
  if (localStorage.getItem('usuario') == null) {
    localStorage.setItem('usuario', JSON.stringify([]));
  };

  let users = JSON.parse(localStorage.getItem('usuario'));
  users.push(lista);

  localStorage.setItem('usuario', JSON.stringify(usuario));
};
console.log(localStorage)