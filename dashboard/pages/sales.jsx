import { useSelector } from "react-redux";
import Heading from "src/UI/Heading/Heading";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";

const Sales = () => {
  const { merged } = useSelector((state) => state.dashboard.orders);

  const data = 
    merged?.map((order) => ({
      ...order,
      _id: order?._id.slice(0, 6),
    })) || [];

    console.log(data)
  return (
    <section>
      <Heading title='Vendas' subtitle='Histórico de vendas' />
      <Table data={data} virtualized autoHeight hover >


      <Column width={120} resizable sortType >
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey='_id' />
      </Column>

      <Column width={300} resizable sortType >
        <HeaderCell>Produto</HeaderCell>
        <Cell dataKey="product" />
      </Column>

      <Column width={120} sortable resizable>
        <HeaderCell>Quantidade</HeaderCell>
        <Cell dataKey="quantity" />
      </Column>

      <Column width={120} sortable resizable>
        <HeaderCell>Valor</HeaderCell>
        <Cell dataKey="amount"  />
      </Column>

      <Column width={300} sortable resizable>
        <HeaderCell>Data</HeaderCell>
        <Cell dataKey=""/>
      </Column>
    </Table>
    </section>
  )
}

export default Sales;
