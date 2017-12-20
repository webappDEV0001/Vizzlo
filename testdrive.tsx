import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'chartjs-plugin-datalabels';

export interface TestDriveProps {
}

export interface TestDriveState {
  data: object
}

const data = {
    labels: ['Plane ticket', 'Hotel', 'Rental car', 'Dinner', 'Postcards'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: [
            'rgba(206,79,64,1)',
            'rgba(91,152,217,1)',
            'rgba(115,202,116,1)',
            'rgba(231,195,44,1)',
            'rgba(141,92,178,1)',
        ],
        data: [268, 199, 49, 112, 3]
      }
    ],
  };

const options = {
    plugins: {
        datalabels: {
            display: true,
            color: 'black',
            align: 'end',
            anchor: 'end',
            offset: 10,
            font: {
                size: 14,
                weight: 600
            },
            formatter: function(value, context) {
                return '€ ' + value;
            }
        }
     }
}

export default class TestDrive extends React.Component<TestDriveProps, TestDriveState> {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['Plane ticket', 'Hotel', 'Rental car', 'Dinner', 'Postcards'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: [
                'rgba(206,79,64,1)',
                'rgba(91,152,217,1)',
                'rgba(115,202,116,1)',
                'rgba(231,195,44,1)',
                'rgba(141,92,178,1)',
            ],
            data: [268, 199, 49, 112, 3]
          }
        ],
      }
    };
  }

  onAdd = () => {

  }

  onRemove = () => {
    
  }

	render() {
		return (
      <div>
        <button onClick={this.onAdd}>Add</button>
        <button onClick={this.onRemove}>Remove</button>
        <Tabs>
          <TabList>
            <Tab>Bar Chart</Tab>
            <Tab>Pie Chart</Tab>
          </TabList>
      
          <TabPanel>
            <Bar data={this.state.data} options={options} />
          </TabPanel>
          <TabPanel>
            <Pie data={this.state.data} options={options} />
          </TabPanel>
        </Tabs>
      </div>
    )
	}
}
