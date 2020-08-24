// import * as d3 from 'd3';

// let mySVG = d3.select('#out')
//   .append('svg')
//   .attr('width', 300)
//   .attr('height', 500);

// mySVG.append('rect')
//   .style('stroke', 'black')
//   .style('fill', '#aabbcc')
//   .attr('x', 50)
//   .attr('y', 100)
//   .attr('height', 100)
//   .attr('width', 80);

//   mySVG.append('circle')
//     .style('stroke', 'black')
//     .style('fill', '#88cc88')
//     .style('opacity', '0.5')
//     .attr('r', 40)
//     .attr('cx', 120)
//     .attr('cy', 90)
//     .on('mouseover', function() {
//       d3.select(this).style('fill', '#000088');
//       d3.select(this).style('opacity', '1');
//     })
//     .on('mouseout', function() {
//       d3.select(this).style('fill', '#88cc88');
//       d3.select(this).style('opacity', '0.5');
//     });
//////////////////////////////////////////////////////////
// let mySVG = d3.select('#out')
// .append('svg')
// .attr('width', 300)
// .attr('height', 500);

// let myData = [];

// for(let i = 0; i < 10; i++){
//   myData[i] = Math.round(Math.random() * 100);
// }

// let barHeight = 30;
// for(let n = 0; n < myData.length; n++){
//   mySVG.append('rect')
//     .style('stroke', 'black')
//     .style('fill', '#88cc88')
//     .attr('y', 100 + (n * barHeight))
//     .attr('x', 100)
//     .attr('width', myData[n])
//     .attr('height', barHeight);
// }
///////////////////////////////////////////////////////////
let mySVG = d3
  .select("#out")
  .append("svg")
  .attr("width", 600)
  .attr("height", 600);

let myData = [];

for (let i = 0; i < 10; i++) {
  myData[i] = Math.round(Math.random() * 100);
}

// let x_scale = d3.scale.linear()
//   .domain([0, 100])
//   .range([0, 300]);

mySVG
  .selectAll("rect")
  .data(myData)
  .enter()
  .append("rect")
  .style("stroke", "black")
  .style("fill", "#88cc88")
  .attr("height", 30)
  .attr("width", function (d, i) {
    return d;
  })
  .attr("x", 100)
  .attr("y", function (d, i) {
    return 50 + i * 30;
  });

mySVG
  .append("text")
  .attr("text-anchor", "middle")
  .attr("style", "font: 10px arial, sans-serif;")
  .text("Hello World");
