import * as d3 from 'd3';
import data from '../../data/data';

const polygonsPath = [
  'M0.557716 45.2887L78 0.57735L155.442 45.2887V134.711L78 179.423L0.557716 134.711V45.2887Z',
  'M0.543285 34.0387L58.5 0.57735L116.457 34.0387V100.961L58.5 134.423L0.543285 100.961V34.0387Z',
  'M0.528858 22.7887L39 0.57735L77.4711 22.7887V67.2113L39 89.4226L0.528858 67.2113V22.7887Z',
  'M0.514429 11.5387L19.5 0.577366L38.4856 11.5387V33.4613L19.5 44.4227L0.514429 33.4613V11.5387Z',
  'M1.00717 5.91367L10.25 0.57735L19.4927 5.91367V16.5863L10.25 21.9227L1.00717 16.5863V5.91367Z',
];

function radarChart() {
  // set the dimensions of the graph
  const width = 258,
    height = 263;

  // append the svg object to the body of the page
  const svg = d3
    .select('#radar-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background-color', '#282D30')
    .style('border-radius', '5px')
    .append('g');

  polygonsPath.forEach((polygon) => {
    svg
      .append('path')
      .attr('d', polygon)
      .attr('class', 'polygon')
      .style('fill', 'none')
      .style('stroke', 'white');
  });
}
export default radarChart;
