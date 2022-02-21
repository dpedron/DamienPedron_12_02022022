import * as d3 from 'd3';
import data from '../../data/data';

const sessions = data.USER_ACTIVITY[0].sessions;

function barChart() {
  const kilograms = sessions.map((session) => session.kilogram);
  const calories = sessions.map((session) => session.calories);
  // set the dimensions and margins of the graph
  const padding = { top: 112, right: 80, bottom: 62, left: 43 },
    width = 835 - padding.left - padding.right,
    height = 320 - padding.top - padding.bottom;

  // append the svg object to the body of the page
  const svg = d3
    .select('#bar-chart')
    .append('svg')
    .attr('width', width + padding.left + padding.right)
    .attr('height', height + padding.top + padding.bottom)
    .style('color', '#9B9EAC')
    .style('background-color', '#FBFBFB')
    .style('border-radius', '5px')
    .append('g')
    .attr('transform', `translate(${padding.left},${padding.top})`);
  // Add X axis
  const x = d3
    .scaleBand()
    .range([0, width])
    .domain(sessions.map((session) => session.day));
  svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(
      d3
        .axisBottom(x)
        .tickSize(0)
        .tickPadding([25])
        .tickFormat((d) => d.charAt(d.length - 1))
    )
    .selectAll('text')
    .style('font-size', '14px')
    .style('font-weight', '500');

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain([d3.min(kilograms) - 1, d3.max(kilograms) + 1])
    .range([height, 0]);
  svg
    .append('g')
    .attr('transform', `translate(${width},0)`)
    .attr('stroke-dasharray', '2')
    .call(
      d3
        .axisRight(y)
        .ticks(d3.max(kilograms) + 1 - d3.min(kilograms) - 1)
        .tickSize(-width)
        .tickPadding([30])
    )
    .call((g) => g.select('.domain').remove())
    .selectAll('text')
    .style('font-size', '14px')
    .style('font-weight', '500');

  const y2 = d3
    .scaleLinear()
    .domain([0, d3.max(calories) * 1.1])
    .range([height, 0]);

  // Hover event

  svg
    .append('g')
    .selectAll('mybar')
    .data(sessions)
    .join('rect')
    .attr('x', (session) => x(session.day) + x.bandwidth() / 4)
    .attr('y', 0)
    .attr('width', x.bandwidth() / 2)
    .attr('height', height)
    .attr('fill', 'transparent')
    .on('mouseover', function (d, session) {
      d3.select(this).attr('fill', '#C4C4C480');
      d3.select(document.getElementById('info-bubble__rect'))
        .attr('visibility', 'visible')
        .attr('x', x.bandwidth() / 2 + Number(d3.select(this).attr('x')) + 7);
      d3.select(document.getElementById('info-bubble__text'))
        .attr('visibility', 'visible')
        .attr('x', x.bandwidth() / 2 + Number(d3.select(this).attr('x')) + 27);
      d3.select(document.getElementById('info-bubble__kilograms')).text(
        session.kilogram + 'kg'
      );
      d3.select(document.getElementById('info-bubble__calories')).text(
        session.calories + 'Kcal'
      );
    })
    .on('mouseout', function () {
      d3.select(this).attr('fill', 'transparent');
      d3.select(document.getElementById('info-bubble__rect')).attr(
        'visibility',
        'hidden'
      );
      d3.select(document.getElementById('info-bubble__text')).attr(
        'visibility',
        'invisible'
      );
    });

  // Info bubble

  svg
    .append('g')
    .attr('id', 'info-bubble')
    .attr('width', '40px')
    .attr('text-anchor', 'middle');

  // Info bubble Rect
  d3.select('#info-bubble')
    .append('rect')
    .attr('id', 'info-bubble__rect')
    .attr('fill', '#E60000')
    .attr('width', '40px')
    .attr('height', '63px')
    .attr('y', '-31.5px')
    .attr('visibility', 'hidden');

  // Info bubble text

  const bubbleText = d3
    .select('#info-bubble')
    .append('text')
    .attr('id', 'info-bubble__text')
    .attr('fill', '#FFFFFF')
    .style('font-size', '7px')
    .style('font-weight', '500')
    .attr('y', '-10');

  bubbleText.append('tspan').attr('id', 'info-bubble__kilograms');

  bubbleText
    .append('tspan')
    .attr('id', 'info-bubble__calories')
    .attr('dx', -20)
    .attr('dy', 25);

  // Bars

  // Kilograms
  svg
    .append('g')
    .selectAll('mybar')
    .data(sessions)
    .join('rect')
    .attr('x', (session) => x(session.day) + x.bandwidth() / 2 - 10.5)
    .attr('y', (session) => y(session.kilogram))
    .attr('width', 7)
    .attr('height', (session) => height - y(session.kilogram))
    .attr('fill', '#282D30')
    .attr('rx', '3px')
    .style('pointer-events', 'none');

  // Calories
  svg
    .append('g')
    .selectAll('mybar')
    .data(sessions)
    .join('rect')
    .attr('x', (session) => x(session.day) + x.bandwidth() / 2 + 4.5)
    .attr('y', (session) => y2(session.calories))
    .attr('width', 7)
    .attr('height', (session) => height - y2(session.calories))
    .attr('fill', '#E60000')
    .attr('rx', '3px')
    .style('pointer-events', 'none');
}

export default barChart;
