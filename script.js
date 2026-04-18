const ecran =document.querySelector(".ecran");
const boutons = document.querySelectorAll("button");
let expression = "";

boutons.forEach(button => {
    button.addEventListener("click", () => {
        const valeur = button.textContent;

        if(valeur==="AC") {
            expression = "";
            ecran.value = "";
        }
        else if (valeur === "="){
            try{
                expression = eval(expression);
                ecran.value = expression;
            } catch {
                ecran.value = "Erreur";
            }
        }
        else if (valeur === "x") {
            expression += "*";
            ecran.value = expression;
        }
        else {
            expression += valeur;
            ecran.value = expression;
        }
    })
})