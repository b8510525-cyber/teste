// Funções de cadastro e login Firebase
const cadastroForm = document.getElementById("cadastro-form");
if(cadastroForm){
  cadastroForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const setor = document.getElementById("setor").value;
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(userCredential=>{
      const user = userCredential.user;
      firebase.firestore().collection("usuarios").doc(user.uid).set({nome, setor});
      alert("Cadastro realizado!");
      window.location.href="login.html";
    }).catch(err=>alert(err.message));
  });
}

const loginForm = document.getElementById("login-form");
if(loginForm){
  loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-password").value;
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(userCredential=>{
      const user = userCredential.user;
      window.location.href="dashboard-usuario.html";
    }).catch(err=>alert(err.message));
  });
}

const logoutBtn = document.getElementById("logout");
if(logoutBtn){
  logoutBtn.addEventListener("click", ()=>{
    firebase.auth().signOut().then(()=>window.location.href="index.html");
  });
}
