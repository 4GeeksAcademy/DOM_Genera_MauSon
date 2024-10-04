/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = ["com", "net", "es", "us"];

  let listaResultado = document.getElementById("lista1");
  let listaResultado2 = document.getElementById("lista2");

  // Genero los eventos de los botones
  document.getElementById("clearBtn").addEventListener("click", function() {
    listaResultado.innerHTML = "";
    listaResultado2.innerHTML = "";
  });
  document.getElementById("actionBtn1").addEventListener("click", function() {
    generaDomName(pronoun, adj, noun);
  });

  document.getElementById("actionBtn2").addEventListener("click", function() {
    generaDomName2(pronoun, adj, noun, dom);
  });

  //Genero nombres de dominio
  function generaDomName(pronoun, adj, noun) {
    listaResultado.innerHTML = "";

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          let nombreDominio = pronoun[i] + adj[j] + noun[k] + ".com";
          listaResultado.innerHTML += "<p>" + nombreDominio + "</p>";
        }
      }
    }
  }

  //Genero nombres de dominio
  function generaDomName2(pronoun, adj, noun, dom) {
    listaResultado2.innerHTML = "";

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < dom.length; l++) {
            let nombreDominio = pronoun[i] + adj[j] + noun[k] + "." + dom[l];
            console.log(nombreDominio);
            listaResultado2.innerHTML += "<p>" + nombreDominio + "</p>";
          }
        }
      }
    }
  }
};
