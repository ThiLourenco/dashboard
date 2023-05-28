import Link from "next/link";
import Heading from "src/UI/Heading/Heading";
import Cards from "src/components/Card/Cards";
import SalesGoal from "src/components/SalesGoal/SalesGoal";
import SalesHistory from "src/components/SalesHistory/SalesHistory";
import TopSales from "src/components/TopSales/TopSales";
import styles from "styles/Dashboard.module.scss";

export default function Home() {
  return (
    <section className={styles.dashboard}>
      <Heading 
        title='Seja bem vindo(a)'
        subtitle='Confira o seus resultados de hoje!'
      />
      <Link href='/new-sale' className='btn btn-primary'>
        Nova venda
      </Link>

      <section className={styles.columns}>
        <section className={styles.column1}>
          <Cards />
          <SalesHistory /> 
        </section>
        <section className={styles.column2}>
          <SalesGoal />
          <TopSales />
        </section>
      </section>
    </section>
  )
}
