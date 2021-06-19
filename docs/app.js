var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("#scatter")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data.csv", function(newsData) {
    
    var x = d3.scaleLinear()
        .domain([0, 4000])
        .range([ 0, width ]);
    
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
    var y = d3.scaleLinear()
        .domain([0, 500000])
        .range([ height, 0]);
    
    svg.append("g")
        .call(d3.axisLeft(y));
    
    svg.append('g')
        .selectAll("dot")
        .data(newsData)
        .enter()
        .append("circle")
            .attr("cx", function (d) { return x(d.poverty); } )
            .attr("cy", function (d) { return y(d.healthcare); } )
            .attr("r", 1.5)
            .style("fill", "#69b3a2")
})