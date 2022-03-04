import * as d3 from 'd3';

/**
 * @description Chart to show, kilograms and burned calories per day
 * @param {Object} data - Data to create chart
 * @returns {SVG}
 */

function barChart(data) {
  const sessions = data.data.sessions;
  const kilograms = sessions.map((session) => session.kilogram);
  const calories = sessions.map((session) => session.calories);

  // Set the dimensions and margins of the chart
  const margin = { top: 112, right: 80, bottom: 62, left: 43 },
    width = 835 - margin.left - margin.right,
    height = 320 - margin.top - margin.bottom;

  // Append the svg object to the body of the page
  const svg = d3
    .select('#bar-chart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .style('color', '#9B9EAC')
    .style('background-color', '#FBFBFB')
    .style('border-radius', '5px')
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

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
    );

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain([d3.min(kilograms) - 1, d3.max(kilograms) + 1])
    .range([height, 0]);
  svg
    .append('g')
    .attr('transform', `translate(${width},0)`)
    .attr('stroke-dasharray', '2')
    .call(d3.axisRight(y).ticks(3).tickSize(-width).tickPadding([30]))
    .call((g) => g.select('.domain').remove());

  // Kilograms bars
  svg
    .append('g')
    .selectAll('mybar')
    .data(sessions)
    .join('rect')
    .attr('x', (session) => x(session.day) + x.bandwidth() / 2 - 10.5)
    .attr('y', (session) => y(session.kilogram))
    .attr('width', 7)
    .attr('height', (session) => height - y(session.kilogram) + 3)
    .attr('fill', '#282D30')
    .attr('rx', '3px')
    .style('pointer-events', 'none');

  // Calories bars

  const y2 = d3
    .scaleLinear()
    .domain([0, d3.max(calories) * 1.1])
    .range([height, 0]);

  svg
    .append('g')
    .selectAll('mybar')
    .data(sessions)
    .join('rect')
    .attr('x', (session) => x(session.day) + x.bandwidth() / 2 + 4.5)
    .attr('y', (session) => y2(session.calories))
    .attr('width', 7)
    .attr('height', (session) => height - y2(session.calories) + 3)
    .attr('fill', '#E60000')
    .attr('rx', '3px')
    .style('pointer-events', 'none');

  // All text style
  svg.selectAll('text').style('font-size', '14px').style('font-weight', '500');

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
      d3.select(this).attr('fill', '#C4C4C480'); // Show rect behind hovered bar
      d3.select(document.getElementById('info-bubble__rect'))
        .attr('visibility', 'visible') // Show bubble background
        .attr('x', x.bandwidth() / 2 + Number(d3.select(this).attr('x')) + 7); // Move bubble background
      d3.select(document.getElementById('info-bubble__text'))
        .attr('visibility', 'visible') // Show bubble text
        .attr('x', x.bandwidth() / 2 + Number(d3.select(this).attr('x')) + 27); // Move bubble text
      d3.select(document.getElementById('info-bubble__kilograms')).text(
        session.kilogram + 'kg' // Add kilogram based on data
      );
      d3.select(document.getElementById('info-bubble__calories')).text(
        session.calories + 'Kcal' // Add calories based on data
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

  // Info bubble text kilograms
  bubbleText.append('tspan').attr('id', 'info-bubble__kilograms');

  // Info bubble text calories
  bubbleText
    .append('tspan')
    .attr('id', 'info-bubble__calories')
    .attr('dx', -20)
    .attr('dy', 25);

  // Used to remove bottom border radius of the bars
  svg
    .append('rect')
    .attr('y', height + 1)
    .style('fill', '#FBFBFB')
    .style('height', '10px')
    .style('width', width);
}

export default barChart;
