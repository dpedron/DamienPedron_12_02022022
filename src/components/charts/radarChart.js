import * as d3 from 'd3';
import { line, scaleLinear, scalePoint } from 'd3';

/**
 * @description Chart to show the proportion of each type of activity
 * @param {Object} data - Data to create chart
 * @returns {SVG}
 */

function radarChart(data) {
  const performance = data.data.data;

  // Set the dimensions of the chart
  const margin = 40,
    width = 258 - margin,
    height = 263 - margin,
    box = (height + width) / 2 - margin,
    radius = box / 2;

  // append the svg object to the body of the page
  const svg = d3
    .select('#radar-chart')
    .append('svg')
    .attr('width', width + margin)
    .attr('height', height + margin)
    .style('background-color', '#282D30')
    .style('border-radius', '5px');

  // Add center container
  const center = svg
    .append('g')
    .attr('transform', `translate(${radius + margin},${radius + margin})`);

  // Define polygons scale
  const domain = [0, 50, 100, 150, 200, 250];
  const range = [0, radius];
  const scale = scalePoint(domain, range);

  // Add inner polygons
  domain.forEach((point) => {
    // Define points coordinates
    const points = performance.map((d, i) =>
      coordinates({
        radius: scale(point),
        angle: 2 * Math.PI * ((i + 1) / performance.length),
      })
    );

    // Add polygons
    center
      .append('path')
      .datum([...points, points[0]]) // Close the polygon path
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1)
      .attr(
        'd',
        line()
          .x(({ x }) => x)
          .y(({ y }) => y)
      );
  });

  // Add each kinds of performance in french
  const kinds = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ];

  // Define text coordinates
  kinds.forEach((kind, i) => {
    const { x, y } = coordinates({
      radius: radius + 25,
      angle: 2 * Math.PI * ((i + 1) / performance.length),
    });

    // Add text
    center
      .append('text')
      .text(kind)
      .attr('x', x)
      .attr('y', y + 4)
      .attr('fill', '#fff')
      .attr('font-size', 12)
      .attr('font-weight', 500)
      .attr('text-anchor', 'middle');
  });

  // Define performance scale
  const performanceScale = scaleLinear([0, 250], [0, radius]);

  // Define performance coordinates
  const performancePoints = performance.map(({ value }, i) =>
    coordinates({
      radius: performanceScale(value),
      angle: 2 * Math.PI * ((i + 1) / performance.length),
    })
  );

  // Add user performance
  center
    .append('path')
    .datum([...performancePoints, performancePoints[0]]) // Close the polygon path
    .attr('fill', 'rgba(255,0,0,.7)')
    .attr(
      'd',
      line()
        .x(({ x }) => x)
        .y(({ y }) => y)
    );

  /**
   * Use to define points coordinates
   * @param {Object} dataToCalculateCoord - Used to calculate coordinates
   * @param {number} dataToCalculateCoord.radius - The radius
   * @param {number} dataToCalculateCoord.angle - The angle
   * @returns Coordinates
   */

  function coordinates({ radius, angle }) {
    return {
      x: radius * Math.sin(angle + Math.PI),
      y: radius * Math.cos(angle + Math.PI),
    };
  }
}

export default radarChart;
