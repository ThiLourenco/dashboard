import { useSelector } from 'react-redux';
import styles from './SalesGoal.module.scss'
import useFormatPrice from 'src/hooks/useFormatPrice';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesGoal = () => {
  const { today } = useSelector((state) => state.dashboard.sales);
  const { salesGoal } = useSelector((state) => state.ui);

  const todaySales = useFormatPrice(today);
  const formatSalesGoal = useFormatPrice(salesGoal);

  const percentage = (today / salesGoal) * 100;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
    },
  };

  const data = {
    labels: ['%'],
    datasets: [
      {
        label: ['Meta'],
        data: [salesGoal],
        backgroundColor: [
          'rgba(76, 219, 19, 0.822)'
        ],
      },
      {
        label: ['Vendas'],
        data: [percentage],
        backgroundColor: [
          'rgba(39, 136, 201, 0.400)'
        ],
      },
    ],
  }

  return (
    <div className={styles['sales-goal']}>
      <h3>Meta de vendas diárias</h3>
      <div className={styles.chart}>
        {today !== null ? (
          <Bar options={options} data={data}  />
        ) : ( 
        <span>Carregando...</span>
        )}
      </div> 
      <h4>
        {todaySales} / {formatSalesGoal}
      </h4>
    </div>
  );
};

export default SalesGoal;