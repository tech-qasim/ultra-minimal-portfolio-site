import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { ContributionDay } from '../types';

const ContributionGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous render
    d3.select(svgRef.current).selectAll('*').remove();

    // Generate mock data for the last 52 weeks
    const now = new Date();
    const data: ContributionDay[] = [];
    // 52 weeks * 7 days
    const daysToGenerate = 52 * 7;
    
    for (let i = 0; i < daysToGenerate; i++) {
      const d = new Date(now);
      d.setDate(d.getDate() - (daysToGenerate - i));
      // Randomize count with higher probability of 0-5
      const rand = Math.random();
      let count = 0;
      if (rand > 0.8) count = Math.floor(Math.random() * 10) + 5;
      else if (rand > 0.5) count = Math.floor(Math.random() * 5);
      
      data.push({ date: d, count });
    }

    // Configuration
    const cellSize = 12;
    const cellGap = 4;
    const weekGap = cellSize + cellGap;
    const height = 7 * weekGap; // 7 days high
    const width = 53 * weekGap; // 52 weeks wide approx
    
    const svg = d3.select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .classed('w-full h-full', true);

    // Color scale
    const colorScale = d3.scaleLinear<string>()
      .domain([0, 5, 15])
      .range(['#1f1f1f', '#404040', '#a3a3a3']) // Dark gray to light gray
      .clamp(true);

    // Tooltip container
    const tooltip = d3.select('body').append('div')
      .attr('class', 'fixed px-3 py-1.5 text-xs font-mono bg-neutral-800 border border-neutral-700 text-white rounded opacity-0 pointer-events-none transition-opacity duration-200 z-50')
      .style('top', '0')
      .style('left', '0');

    const days = svg.selectAll<SVGRectElement, ContributionDay>('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', cellSize)
      .attr('height', cellSize)
      .attr('rx', 2) // Rounded corners
      .attr('ry', 2)
      .attr('x', (d, i) => Math.floor(i / 7) * weekGap)
      .attr('y', (d, i) => (i % 7) * weekGap)
      .attr('fill', '#000') // Start black for animation
      .on('mouseover', (event, d) => {
        tooltip.transition().duration(100).style('opacity', 1);
        tooltip.html(`${d.count} contributions on ${d.date.toLocaleDateString()}`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
        d3.select(event.currentTarget).attr('stroke', '#fff').attr('stroke-width', 1);
      })
      .on('mousemove', (event) => {
        tooltip
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', (event) => {
        tooltip.transition().duration(200).style('opacity', 0);
        d3.select(event.currentTarget).attr('stroke', 'none');
      });

    // Animate in
    days.transition()
      .duration(1000)
      .delay((d, i) => i * 2)
      .attr('fill', d => d.count === 0 ? '#171717' : colorScale(d.count));

    return () => {
      tooltip.remove();
    };
  }, []);

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden">
      <div className="min-w-[800px] h-[110px]">
        <svg ref={svgRef} className="block" />
      </div>
    </div>
  );
};

export default ContributionGraph;