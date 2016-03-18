var data = [4,8,15,16,23,42];
/*
var chart = d3.select(".chart");

var bar = chart.selectAll("div");

var barUpdate = bar.data(data);

var barEnter = barUpdate.enter().append("div");

barEnter.style("width",function(d){
    return d*10+"px";
});

barEnter.text(function(d){
return d;
});
*/


//to scale your bars
var foo = d3.scale.linear()
    .domain([0,d3.max(data)])
    .range([0,420])

//same as abovefirst block of stuff
d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width",function(d){
	return foo(d) + "px"; })
    .text(function(d){
	return d; });
