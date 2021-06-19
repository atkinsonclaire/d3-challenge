var svgWidth = 960;
var svgHeight = 660;

var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

var svg = d3
  .select("body")
  .append("scatter")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

d3.csv("data/data.csv").then(function(newsData) {

    var yScale = d3.scaleLinear()
      .domain([0, d3.max(newsData.healthcare)])
      .range([chartHeight, 0]);
    
    var xScale = d3.scaleBand()
      .domain(newsData.poverty)
      .range([0, chartWidth])
      .padding(0.05);
    
    var yAxis = d3.axisLeft(yScale);
    var xAxis = d3.axisBottom(xScale);
    
    chartGroup.append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(xAxis);
    
    chartGroup.append("g")
      .call(yAxis);
    
    chartGroup.selectAll(".dot")
        .data(newsData)
        .enter()
        .append("circle")
        .attr("x", newsData.poverty[i])
        .attr("y", newsData.healthcare[i])
        .attr("r", 1.5)
        .style("fill", "#69b3a2")
}); 
