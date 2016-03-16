d3.selectAll("p").style("color", function(d, i) {
  return i % 2 ? "pink" : "green";
});

var h = d3.layout.histogram();
h.histogram(x[dog,cat,fish]);
