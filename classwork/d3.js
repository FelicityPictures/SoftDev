document.selectAll("p").style("color", function(d, i) {
  return i % 2 ? "grey" : "green";
});
