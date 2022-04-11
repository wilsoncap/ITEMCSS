addEventListener("resize", () => {
  if (innerWidth > 600) {
    document.body.style.background = "orange";
  } else {
    document.body.style.background = "lightgrey";
  }
});
