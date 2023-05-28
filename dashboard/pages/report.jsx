import Heading from "src/UI/Heading/Heading";
import HeatMap from "src/components/HeatMap/HeatMap";
import PieChart from "src/components/PieChart/PieChart";
import SalesHistory from "src/components/SalesHistory/SalesHistory";
import styles from 'styles/Report.module.scss'

const Report = () => {
  return (
    <section className={styles.section}>
      <Heading title='Report' subtitle='Meu relatório' />
      <SalesHistory />
      <div className={styles.charts}>
        <HeatMap />
        <PieChart />
      </div>
    </section>
  )
}

export default Report;