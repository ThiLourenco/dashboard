import Link from "next/link";
import Heading from "src/UI/Heading/Heading";
import GridChart from "src/components/GridChart/GridChart";

const Products = () => {
  return (
    <section>
      <Heading title='Produtos' subtitle='Produtos disponíveis' />
      <Link href='/products/add' className='btn btn-primary mb-3'>
        Novo Produto
      </Link>
      <GridChart />
    </section>
  )
}

export default Products;