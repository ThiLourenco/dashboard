import Heading from "src/UI/Heading/Heading";
import AddSale from "src/components/AddSale/AddSale";

const NewSale = () => {
  return (
    <section>
      <Heading title='Adicionar Venda' subtitle='Adicione uma nova venda' />
      <div>
        <AddSale />
      </div>
    </section>
  )
}

export default NewSale;