import * as d3 from 'd3';
import data from '../../data/data';

const todayScore = data.USER_MAIN_DATA[0].todayScore;

function radialBarChart() {
  // set the dimensions of the graph
  const width = 258,
    height = 263;

  // append the svg object to the body of the page
  const svg = d3
    .select('#radial-bar-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background-color', '#FBFBFB')
    .style('border-radius', '5px')
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  const innerArc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(81)
    .startAngle(6.28319)
    .endAngle(0);
  svg
    .append('path')
    .attr('class', 'arc')
    .attr('d', innerArc)
    .attr('fill', 'white');

  const arc = d3
    .arc()
    .innerRadius(80)
    .outerRadius(90)
    .cornerRadius(10)
    .startAngle(-6.28319 * todayScore)
    .endAngle(0);
  svg
    .append('path')
    .attr('class', 'arc')
    .attr('d', arc)
    .attr('fill', '#FF0000');

  const innerArcText = svg
    .append('text')
    .text(`${todayScore * 100}%`)
    .attr('text-anchor', 'middle')
    .attr('dy', -13)
    .style('font-size', '26px')
    .style('font-weight', '700')
    .style('color', '#20253A');

  innerArcText
    .append('tspan')
    .text('de votre')
    .attr('x', 0)
    .attr('dx', 0)
    .attr('dy', 25)
    .style('font-size', '16px')
    .style('font-weight', '500')
    .style('fill', '#74798C');
  innerArcText
    .append('tspan')
    .text('objectif')
    .attr('x', 0)
    .attr('dx', 0)
    .attr('dy', 25)
    .style('font-size', '16px')
    .style('font-weight', '500')
    .style('fill', '#74798C');
}

export default radialBarChart;
