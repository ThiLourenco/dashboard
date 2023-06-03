import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import { useSelector } from 'react-redux';
import useGetMonths from 'src/hooks/useGetMonths';
import useFormatPrice from 'src/hooks/useFormatPrice';

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
  // percorre cada mês e para cada mês encontrado, filtre pelas orders, onde o mês seja igual 
    .map((month) => ordersWithProduct.filter((order) => getMonth(order.date) === month)
    // ao localizar, percorre cada array de order e retornar o valor de cada ordem
    .map((order) => order.amount)
    // para cada valor, pegue o valor acumulado e some com o valor atual, iniciando com 0
    .reduce((acc, curr) => acc + curr, 0));

  // retorna o mes e as vendas dos últimos 6 meses
  const data = months.map((month, i) => ({ month, sales: sales[i] })).slice(-6);
  console.log(data);

  return (
    <div>
      {data.length > 0 ? (
    <ChartComponent 
      id="charts" 
      primaryXAxis={{ valueType: 'Category' }} 
      legendSettings={{ visiable: true }} 
      tooltip={{ enable: true }}
      primaryYAxis={{ labelFormat: 'R$ {value}' }}
    >
      <Inject 
        services={[
          ColumnSeries, 
          DataLabel, 
          Tooltip, 
          Legend, 
          LineSeries, 
          Category
        ]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective 
          dataSource={data} 
          xName='month' 
          yName='sales' 
          name='Vendas' 
          marker={{dataLabel: { visible: true } }}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
    ) : <span>Carregando...</span>}
    </div>
  );
};

export default SalesHistory