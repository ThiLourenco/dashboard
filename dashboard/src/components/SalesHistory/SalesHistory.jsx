import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
import useGetMonths from 'src/hooks/useGetMonths';

const SalesHistory = () => {
  const { merged } = useSelector(state => state.dashboard.orders);

  const getMonth = useGetMonths();
  const ordersWithProduct = merged ? [...merged] : [];

  const months = [
    ...new Set(ordersWithProduct
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((order) => getMonth(order.date))
    )
  ];

  const sales = months
    .map((month) =>
      ordersWithProduct
        .filter((order) => getMonth(order.date) === month)
        .reduce((acc, curr) => acc + curr.amount, 0)
    );

  const data = {
    labels: months.slice(-6),
    datasets: [
      {
        label: 'Mensal',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: sales.slice(-6)
      }
    ]
  };

  const options = {
    responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Vendas',
    },
  },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `R$ ${value}`
        }
      }
    }
  };

  return (
    <div>
      {data.labels.length > 0 ? (
        <Line data={data} options={options} />
      ) : (
        <span>Carregando...</span>
      )}
    </div>
  );
};

export default SalesHistory;
