import * as d3 from 'd3';
import data from '../../data/data';

const sessions = data.USER_AVERAGE_SESSIONS[0].sessions,
  duration = sessions.map((d) => d.sessionLength);

function lineChart() {
  // set the dimensions of the graph
  const width = 258,
    height = 263;

  // append the svg object to the body of the page
  const svg = d3
    .select('#line-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background-color', '#FF0000')
    .style('border-radius', '5px')
    .append('g');

  // Add X axis --> it is a date format
  const x = d3
    .scaleLinear()
    .domain([0, 6])
    .range([20, width - 20]);
  svg
    .append('g')
    .attr('transform', 'translate(0,225)')
    .style('color', 'transparent')
    .call(
      d3
        .axisBottom(x)
        .ticks(7)
        .tickSize(-height + 80)
        .tickFormat((i) => ['L', 'M', 'M', 'J', 'V', 'S', 'D'][i])
    )
    .call((g) => g.select('.domain').remove())
    .call((g) =>
      g
        .selectAll('text')
        .style('color', 'white')
        .style('opacity', '0.5')
        .style('font-size', '12')
        .style('font-weight', '500')
    );

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain([d3.min(duration), d3.max(duration)])
    .range([height - 50, 50]);
  svg.append('g').style('display', 'none').call(d3.axisLeft(y));

  // Add the line
  svg
    .append('path')
    .attr('transform', 'translate(-40, 0)')
    .datum(sessions)
    .attr('fill', 'none')
    .attr('stroke', 'white')
    .attr('stroke-width', 2)
    .attr(
      'd',
      d3
        .line()
        .x(function (s) {
          return x(s.day);
        })
        .y(function (s) {
          return y(s.sessionLength);
        })
        .curve(d3.curveBasis)
    );
}

export default lineChart;
