/* eslint-disable react-refresh/only-export-components */
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { useElements } from '../../context/Context'
  import TodayExpense from '../todayExpense/todayExpense'
  import PercentVariation from '../percentVariation/percentVariation'

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false
      },
      
      
    },
    scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      }
  };
  
  export function Graphics() {
  const { weeksArray } = useElements();

  
  const firstWeek = weeksArray[0];

  
  const data = {
    labels: Object.keys(firstWeek),
    datasets: [
      {
        label: 'Expenses',
        data: Object.values(firstWeek),
        backgroundColor: '#ea775c',
        hoverBackgroundColor: '#74b5bf',
      },
    ],
  };
    return (
        <div className='w-2/5 mx-auto bg-white rounded-3xl p-10 mt-5 font-sans' >
          <p className='text-3xl font-bold  text-black pb-5'>Despeses-Última setmana</p>
          <Bar options={options} data={data} />
          <div className='my-5 border-t border-slate-300'></div>
          <p >Despeses d'avui</p>
          <div className='flex justify-between mt-3'>
            <TodayExpense/>
            <PercentVariation/>
          </div>            
        </div>
    )
    
    
  }
  