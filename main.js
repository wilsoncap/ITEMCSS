const mediumBp = matchMedia("(min-width: 600px)");
const changeSize = (mql) => {
  mql.matches
    ? (document.body.style.background = "lightgrey")
    : (document.body.style.background = "black");
};

mediumBp.addEventListener(changeSize);
changeSize(mediumBp);
