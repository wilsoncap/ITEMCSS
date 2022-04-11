const mediumBp = matchMedia("(min-width: 600px)");
const changeSize = (mql) => {
  mql.matches
    ? (document.body.style.background = "black")
    : (document.body.style.background = "orange");
};

mediumBp.addListener(changeSize);
changeSize(mediumBp);
