import React, { useState, useMemo, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface Project {
  name: string;
  startDate: string;
  endDate: string;
  milestones: { title: string; date: string }[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 400,
    type: 'rangeBar',
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 5,
    },
  },
  colors: ['#3C50E0', '#80CAEE'],
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: true,
    borderColor: '#e7e7e7',
    strokeDashArray: 3,
    position: 'back',
  },
  xaxis: {
    type: 'datetime',
    labels: {
      formatter: function (val) {
        return new Date(val).toLocaleDateString();
      },
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        fontSize: '12px',
        colors: '#333',
      },
    },
  },
  tooltip: {
    custom: function ({ seriesIndex, dataPointIndex, w }) {
      const project = w.config.series[seriesIndex].data[dataPointIndex];
      return `
        <div style="padding: 5px 10px; background: #fff; border-radius: 5px;">
          <strong>${project.name}</strong>
          <br />
          Start: ${new Date(project.start).toLocaleDateString()}
          <br />
          End: ${new Date(project.end).toLocaleDateString()}
          <br />
          Milestones: ${project.milestones
            .map((milestone: { title: any; }) => milestone.title)
            .join(', ')}
        </div>
      `;
    },
  },
};

const TimelineChart: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      name: 'Project A',
      startDate: '2024-01-01',
      endDate: '2024-06-30',
      milestones: [
        { title: 'Kickoff', date: '2024-01-01' },
        { title: 'Midway Review', date: '2024-04-01' },
        { title: 'Launch', date: '2024-06-30' },
      ],
    },
    {
      name: 'Project B',
      startDate: '2024-02-01',
      endDate: '2024-07-15',
      milestones: [
        { title: 'Kickoff', date: '2024-02-01' },
        { title: 'Alpha Testing', date: '2024-05-01' },
        { title: 'Go Live', date: '2024-07-15' },
      ],
    },
    {
      name: 'Project C',
      startDate: '2024-03-01',
      endDate: '2024-08-15',
      milestones: [
        { title: 'Kickoff', date: '2024-03-01' },
        { title: 'Beta Testing', date: '2024-06-01' },
        { title: 'Launch', date: '2024-08-15' },
      ],
    },
  ]);

  const series = useMemo(() => {
    return projects.map((project) => ({
      name: project.name,
      data: [
        {
          x: project.name,
          y: [
            new Date(project.startDate).getTime(),
            new Date(project.endDate).getTime(),
          ],
          start: project.startDate,
          end: project.endDate,
          milestones: project.milestones,
        },
      ],
    }));
  }, [projects]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="text-center mb-5">
        <h2 className="text-xl font-semibold text-primary">Project Timelines</h2>
        <p className="text-sm text-gray-500">A sleek, compact timeline of projects</p>
      </div>
      <div id="timelineChart">
        <ReactApexChart options={options} series={series} type="rangeBar" height={400} />
      </div>
    </div>
  );
};

export default TimelineChart;
