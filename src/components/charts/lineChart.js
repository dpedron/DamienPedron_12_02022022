import * as d3 from 'd3';

/**
 * @description Chart to show the duration of activity per day on a week
 * @param {Object} data - Data to create chart
 * @returns {SVG}
 */

function lineChart(data) {
  let sessions = data.data.sessions,
    duration = sessions.map((d) => d.sessionLength);

  // Set the dimensions of the chart
  const width = 258,
    height = 263;

  // Append the svg object to the body of the page
  const svg = d3
    .select('#line-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background-color', '#FF0000')
    .style('border-radius', '5px')
    .append('g');

  // Add X axis
  const x = d3
    .scaleLinear()
    .domain([0, 6])
    .range([20, width - 20]);
  svg
    .append('g')
    .attr('transform', 'translate(0,225)')
    .attr('stroke-width', '36px')
    .style('color', 'transparent')
    .call(
      d3
        .axisBottom(x)
        .ticks(7)
        .tickFormat((i) => ['L', 'M', 'M', 'J', 'V', 'S', 'D'][i])
    )
    .call((g) => g.select('.domain').remove());

  // Style X axis text
  svg.call((g) =>
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
    .range([height - 50, 100]);
  svg.append('g').style('display', 'none').call(d3.axisLeft(y));

  // Add fake data(1 day before an 1 after) to make a line from 0 to the end of the box
  let modifiedSessions = [
    { day: 0, sessionLength: 30 },
    ...sessions,
    { day: 8, sessionLength: 70 },
  ];

  // Add the line
  svg
    .append('path')
    .attr('transform', 'translate(-37, 0)')
    .datum(modifiedSessions)
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
        .curve(d3.curveCatmullRom)
    );

  // Add group of elements used to show duration on hover
  const showDuration = svg.append('g');

  // Add rect to the right of the circle on hover
  showDuration
    .selectAll('rect')
    .data(sessions)
    .join('rect')
    .attr('opacity', 0)
    .attr('fill', 'black')
    .attr('width', width)
    .attr('height', height)
    .attr('transform', (s) => `translate(${x(s.day) - 36}, 0)`);

  // Add circles
  showDuration
    .append('g')
    .selectAll('circle')
    .data(sessions)
    .join('circle')
    .attr('id', (s) => `circle-${s.day}`)
    .attr('opacity', 0)
    .attr('fill', 'white')
    .attr('stroke', 'rgba(255,255,255, .3)')
    .attr('stroke-width', 10)
    .attr('r', 4)
    .style('pointer-events', 'none')
    .attr(
      'transform',
      (s) => `translate(${x(s.day) - 36}, ${y(s.sessionLength)})`
    );

  // Add info bubble group
  const infoBubble = showDuration.append('g');

  // Add info bubble background
  infoBubble
    .selectAll('rect')
    .data(sessions)
    .join('rect')
    .attr('id', (s) => `rect-${s.day}`)
    .attr('opacity', 0)
    .attr('width', '40px')
    .attr('height', '25px')
    .style('fill', 'white')
    .style('pointer-events', 'none')
    .attr(
      'transform',
      (s) => `translate(${x(s.day) - 36}, ${y(s.sessionLength) - 30})`
    );

  // Add info bubble text
  infoBubble
    .selectAll('text')
    .data(sessions)
    .join('text')
    .attr('text-anchor', 'middle')
    .attr('id', (s) => `text-${s.day}`)
    .attr('opacity', 0)
    .text((s) => `${s.sessionLength} min`)
    .style('font-weight', '500')
    .style('font-size', '8px')
    .style('pointer-events', 'none')
    .attr(
      'transform',
      (s) => `translate(${x(s.day) - 16}, ${y(s.sessionLength) - 14})`
    );

  // Hover event
  showDuration
    .selectAll('rect')
    .data(sessions)
    .on('mouseover', function (e, s) {
      if (s.day === sessions.length) {
        // Translate the last bubble to be visible
        console.log(s.sessionLength);
        document
          .getElementById(`rect-${s.day}`)
          .setAttribute(
            'transform',
            `translate(${x(s.day) - 76}, ${y(s.sessionLength) - 30})`
          );
        document
          .getElementById(`text-${s.day}`)
          .setAttribute(
            'transform',
            `translate(${x(s.day) - 55}, ${y(s.sessionLength) - 14})`
          );
      }
      document.getElementById(`circle-${s.day}`).setAttribute('opacity', 1); // Show the circle
      document.getElementById(`rect-${s.day}`).setAttribute('opacity', 1); // Show the bubble
      document.getElementById(`text-${s.day}`).setAttribute('opacity', 1); // Show the text
      this.setAttribute('opacity', 0.1); // Darken the right part of the graph (based on the circle position)
    })
    .on('mouseout', function (e, s) {
      document.getElementById(`circle-${s.day}`).setAttribute('opacity', 0);
      document.getElementById(`rect-${s.day}`).setAttribute('opacity', 0);
      document.getElementById(`text-${s.day}`).setAttribute('opacity', 0);
      this.setAttribute('opacity', 0);
    });
}

export default lineChart;
