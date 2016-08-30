var svg = d3.select('#nav')
   .append('div')
   .classed('svg-container', true) //container class to make it responsive
   .append('svg')
   //responsive SVG needs these 2 attributes and no width and height attr
   .attr('preserveAspectRatio', 'xMinYMin meet')
   .attr('viewBox', '0 0 600 400')
   .attr('fill', 'blue')
   //class to make it responsive
   .classed('svg-content-responsive', true); 