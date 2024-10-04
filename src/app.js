/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let listaResultado = document.getElementById("lista1");
  document.getElementById("clearBtn").addEventListener("click", function() {
    listaResultado.innerHTML = "";
  });
  document
    .getElementById("actionBtn1")
    .addEventListener("click", generaDomName);

  //Genero nombres de dominio
  function generaDomName() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];

    listaResultado.innerHTML = "";

    for (let i = 0; i < pronoun.length; i++) {
      // let nombreDominio = pronoun[i] + ".com";
      // listaResultado.innerHTML += "<p>" + nombreDominio + "</p";

      for (let j = 0; j < adj.length; j++) {
        // let nombreDominio = pronoun[i] + adj[j] + ".com";
        // listaResultado.innerHTML += "<p>" + nombreDominio + "</p";

        // console.log(pronoun[i] + adj[j]);
        for (let k = 0; k < noun.length; k++) {
          let nombreDominio = pronoun[i] + adj[j] + noun[k] + ".com";
          listaResultado.innerHTML += "<p>" + nombreDominio + "</p";
          // console.log(pronoun[i] + adj[j] + noun[k]);
        }
      }
    }
  }
};
