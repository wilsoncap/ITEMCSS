const mediumBp = matchMedia("(min-width: 600px) and (orientation: landscape)");
const changeSize = (mql) => {
  mql.matches
    ? (document.body.style.background = "black")
    : (document.body.style.background = "orange");
};

addEventListener("resize", () => changeSize(mediumBp));
addEventListener("DomContentLoaded", () => changeSize(mediumBp));

///esto no es recomendable para aplicar media querys, siempre que se puedan hacer con CSS es lo mas reomendable
//Solo se recomienda usar esto con javascrip cuando necesitamos agregarle o ponerle clases a algunos elementos
//del DOM en algunos tipos de pantalla