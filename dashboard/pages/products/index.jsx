import Link from "next/link";
import { useSelector } from "react-redux";
import Heading from "src/UI/Heading/Heading";
import GridChart from "src/components/GridChart/GridChart";
import useImage from "src/hooks/useImage";

const columns = [
  {
    field: 'image',
    headerText: 'Image',
    width: '120',
    textAlign: 'center',
    template: '<img class="grid-image"/>',
  },
  {
    field: 'name', headerText: 'Nome', width: '200'
  },
  {
    field: 'price', headerText: 'Preço', width: '120', format:'C2'
  },
  {
    field: 'orders', headerText: 'Pedidos', width: '120'
  },
]

const Products = () => {
  const { list: products } = useSelector((state) => state.dashboard.products);

  const getImage = useImage();
  
  const data = products?.map((product) => ({
    ...product,
    image: getImage(product.image).url(),
  })) || [];

  return (
    <section>
      <Heading title='Produtos' subtitle='Produtos disponíveis' />
      <Link href='/products/add' className='btn btn-primary mb-3'>
        Novo Produto
      </Link>
      <GridChart data={data} columns={columns} />
    </section>
  )
}

export default Products;