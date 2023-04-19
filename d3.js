// Generate 100 random data points
const data = d3.range(100).map(() => [Math.random() * 500, Math.random() * 500]);

// Create an SVG container for the scatter plot
const svg = d3.select("#scatterplot")
  .attr("width", 500)
  .attr("height", 500);

// Create scatter plot points
svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", d => d[0])
  .attr("cy", d => d[1])
  .attr("r", 5);

// Load the titanic.csv dataset
d3.csv("/Users/ayazhan/Downloads/CSCI111/lab09/titanic.csv").then(data => {
  // Extract age values from the dataset
  const ageData = data.map(d => +d.age);

  // Create a pie chart for age distribution
  const pie = d3.pie()(ageData);
  const pieContainer = d3.select("#piechart");

  // Append SVG elements for pie chart slices
  const slices = pieContainer.selectAll("div")
    .data(pie)
    .enter()
    .append("div")
    .style("width", "100px")
    .style("height", "100px")
    .style("background-color", (d, i) => d3.schemeCategory10[i])
    .style("border-radius", "50%")
    .style("display", "inline-block")
    .style("margin", "10px")
    .style("text-align", "center");

  // Append text to display data value in each slice
  slices.append("p")
    .text(d => d.data)
    .style("line-height", "100px")
    .style("font-size", "14px");
});

