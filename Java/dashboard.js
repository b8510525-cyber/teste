firebase.auth().onAuthStateChanged(user=>{
  if(user){
    const userDoc = firebase.firestore().collection("usuarios").doc(user.uid);
    userDoc.get().then(doc=>{
      if(doc.exists){
        document.getElementById("user-name")?.innerText = doc.data().nome;
        document.getElementById("user-setor")?.innerText = doc.data().setor;
      }
    });
  }else{
    if(window.location.pathname.includes("dashboard")) window.location.href="login.html";
  }
});
