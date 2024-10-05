/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { main } from "@popperjs/core";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["emoticom", "jogger", "racoon", "nautilus"];
  let dom = ["com", "net", "es", "us"];
  let dominios = [];

  let listaResultado = document.getElementById("lista1");
  let listaResultado2 = document.getElementById("lista2");
  let listaResultado3 = document.getElementById("lista3");

  // Borra los resultados
  document.getElementById("clearBtn").addEventListener("click", function() {
    listaResultado.innerHTML = "";
    listaResultado2.innerHTML = "";
    listaResultado3.innerHTML = "";
  });
  document.getElementById("actionBtn1").addEventListener("click", function() {
    imprimeLista1(dominios);
  });

  document.getElementById("actionBtn2").addEventListener("click", function() {
    generaDomName2(pronoun, adj, noun, dom);
  });

  document.getElementById("actionBtn3").addEventListener("click", function() {
    generaDomName3(dominios, dom);
  });

  // Genero nombres de dominio y los guardo en el array global "dominios"
  function generaDomName() {
    dominios = []; // Reiniciar el array global antes de generar nuevos dominios
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          let nombreDominio = pronoun[i] + adj[j] + noun[k];
          dominios.push(nombreDominio); // Guardar en el array global
        }
      }
    }
  }
  generaDomName();

  // Imprimir la lista de dominios generados
  function imprimeLista1() {
    listaResultado.innerHTML = "";
    dominios.forEach(registro => {
      listaResultado.innerHTML += "<p>" + registro + ".com" + "</p>";
    });
  }

  //Genero nombres de dominio con extensiones varias
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

  /*
  Genero los nombres completos y los guardo en un array dominios[]
  Busco el primer elemento de dom[] y traigo su longitud, compara con dominios[], los (n) caracteres finales de cada registro con el elemento de dom[].
  Si hay coincidencia busco el índice y actualizo, y caso contrario paso al siguiente.
  Termino e imprimo el listado de dominios[]
  */

  function generaDomName3(dominios, dom) {
    let dominiosModificados = [];
    // Procesar los dominios y almacenarlos en dominiosModificados
    dominios.forEach(dominio => {
      // Recorrer las extensiones
      dom.forEach(extension => {
        let fragmento = dominio.slice(-extension.length); // Extraer la cantidad de letras según la extensión

        if (fragmento === extension) {
          // Si coincide, cortar la parte coincidente y agregar "." + la extensión
          let dominioBase = dominio.slice(0, -extension.length); // Cortar la parte coincidente
          let nuevoDominio = dominioBase + "." + extension; // Agregar "." y la extensión
          dominiosModificados.push(nuevoDominio); // Guardar en el nuevo array
        } else {
          // Si no coincide, simplemente agrega "." y la extensión sin cortar
          let nuevoDominio = dominio + "." + extension;
          dominiosModificados.push(nuevoDominio); // Guardar en el nuevo array
        }
      });
    });

    // Mostrar los dominios en el HTML
    let listaResultado3 = document.getElementById("lista3");
    listaResultado3.innerHTML = "";

    // Mostrar el arreglo "dominiosModificados" en el HTML
    dominiosModificados.forEach(dominio => {
      listaResultado3.innerHTML += "<p>" + dominio + "</p>";
    });

    return dominiosModificados;
  }
};
