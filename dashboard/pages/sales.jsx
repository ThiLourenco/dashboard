import Heading from "src/UI/Heading/Heading";
import GridChart from "src/components/GridChart/GridChart";

const Sales = () => {
  return (
    <section>
      <Heading title='Sales' subtitle='Histórico de vendas' />
      <GridChart />
    </section>
  )
}

export default Sales;