import { useSelector } from 'react-redux';
import styles from './SalesGoal.module.scss'
import useFormatPrice from 'src/hooks/useFormatPrice';
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-circulargauge';

const SalesGoal = () => {
  const { today } = useSelector((state) => state.dashboard.sales);
  const { salesGoal } = useSelector((state) => state.ui);

  const todaySales = useFormatPrice(today);
  const formatSalesGoal = useFormatPrice(salesGoal);

  return (
    <div className={styles['sales-goal']}>
      <h3>Meta de vendas diárias</h3>
      <div className={styles.chart}>
        <CircularGaugeComponent >
          <AxesDirective>
            <AxisDirective>
              <PointersDirective>
                <PointerDirective value={35}></PointerDirective>
              </PointersDirective>
            </AxisDirective>
          </AxesDirective>
        </CircularGaugeComponent>
      </div> 
      <h4>
        {todaySales} / {formatSalesGoal}
      </h4>
    </div>
  );
};

export default SalesGoal;