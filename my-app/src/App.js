import logo from './logo.svg';
import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState, useRef } from "react";
import { Line, getDatasetAtEvent } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend);


  export const options2 = {
    indexAxis: 'y',
    scales: {
    x: {
        beginAtZero: true
      },

    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  export const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  export const data2 = {
    labels : labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [0, 20, 25, 30, 18, 34, 45],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  export const data3 = {
    labels : labels,
    datasets: [
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.random(0, 1000)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

function App() {
  var chartReference = useRef();
  const [data, setData] = useState(data2);
 /* const handleClick = useCallback(() => {
  }, []);
  const memoizedChart = useMemo(Line, [handleClick, data]);*/
  /*const onChange = useCallback((id, value) => {
    setItems(items.map((item, index) => {
      return index !== id ? item : { value: value }
    }))

  }, [data])*/
  const updatePlot = (event) => {
    data2.labels.shift();
    data2.labels.push('Mars');
    data2.datasets.forEach((dataset) => {
      dataset.data.shift();
      dataset.data.push(Math.random(0, 200));
    });
    chartReference.current.update()
    //setLabels(labels);
  };

  return (
    <div className="App">
      <p>TESSSSTING</p>
      <div className="links">
          <a className="btn btn-gh" onClick={updatePlot}>
            Update plot
          </a>
        </div>
      <Line
        ref = {chartReference}
        data={data}
        options={options2}
      />
    </div>
  );
}

export default App;
