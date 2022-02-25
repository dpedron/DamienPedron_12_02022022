import * as d3 from 'd3';
import data from '../../data/data';

const todayScore = data.USER_MAIN_DATA[0].todayScore;

/**
 * @description Chart to show today's goal
 * @return (SVG)
 */

function radialBarChart() {
  // Set the dimensions of the graph
  const width = 258,
    height = 263;

  // Append the svg object to the body of the page
  const svg = d3
    .select('#radial-bar-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background-color', '#FBFBFB')
    .style('border-radius', '5px')
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  // Add the full circle
  const innerArc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(81)
    .startAngle(6.28319)
    .endAngle(0);
  svg.append('path').attr('d', innerArc).attr('fill', 'white');

  // Add the arc who show user's progress
  const arc = d3
    .arc()
    .innerRadius(80)
    .outerRadius(90)
    .cornerRadius(10)
    .startAngle(-6.28319 * todayScore)
    .endAngle(0);
  svg.append('path').attr('d', arc).attr('fill', '#FF0000');

  // Add the text who show user's progress
  const innerArcText = svg
    .append('text')
    .text(`${todayScore * 100}%`)
    .attr('text-anchor', 'middle')
    .attr('dy', -13)
    .style('font-size', '26px')
    .style('font-weight', '700')
    .style('color', '#20253A');
  innerArcText.append('tspan').text('de votre').attr('class', 'tspan-goal');
  innerArcText.append('tspan').text('objectif').attr('class', 'tspan-goal');

  d3.selectAll('.tspan-goal')
    .attr('x', 0)
    .attr('dx', 0)
    .attr('dy', 25)
    .style('font-size', '16px')
    .style('font-weight', '500')
    .style('fill', '#74798C');
}

export default radialBarChart;
