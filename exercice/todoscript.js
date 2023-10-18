
/*
    1. Créer une todo list. à chaque appui sur le bouton ajout,
    créer un nouvel élément dans la liste.
    cet élément doit contenir la valeur de l'input et une croix.
    On en profitera pour vider l'input.
    2. le clique sur un élément de la liste lui ajoutera une classe qui aura pour 
    effet de barrer l'élément.
    3. le clique sur la croix supprimera l'élément concerné.
    4. sauvegarder la liste en localstorage.
    5. afficher la liste sauvegardé au chargement de la page.
    6. éditer la liste lorsque l'on coche ou supprime un élément.
    Bonus : Utiliser le drag and drop pour déplacer nos éléments dans la liste. il faudra penser à sauvegarder les éléments déplacé.
 */

"use strict";

const writeTDL = document.querySelector("header .header-div form .display-div #todolist");
const btn1 = document.querySelector("header .header-div form .display-div .submit");
const TDL = document.querySelector("main .TDL")

    let a = 0;
    let b = 0;
    btn1.addEventListener("click",(e)=>{
    e.preventDefault()
    writeTDL.focus()
    if(writeTDL.value != ""){
        a++
    const para = document.createElement("p")
    const span = document.createElement("span")
    para.textContent = writeTDL.value
    para.append(span)
    writeTDL.value=""
    TDL.append(para)
    para.style.margin = "0 50px"
    para.style.padding = "20px"
    localStorage.setItem("add"+a, para.textContent);
    para.dataset.a=a;

    // e.preventDefault(); 
    // const data = new FormData(para);
    // const ps = {};
    // data.forEach((value, name)=>{
    //     ps[name] = value;
    // });

    para.addEventListener("click",(f)=>{
        let a=para.dataset.a
        if(para.style.textDecoration == "") {
            para.style.textDecoration = "line-through"
            localStorage.setItem("barré"+a, para.textContent);
        } else {
            para.style.textDecoration = ""
            localStorage.removeItem("barré"+a, para.textContent);
        }
    })

    span.addEventListener("click", (g)=>{
        let a = span.parentElement.dataset.a
        g.stopPropagation()
        localStorage.removeItem("barré"+a)
        localStorage.removeItem("add"+a)
        para.remove()
        
    })
    }
});

