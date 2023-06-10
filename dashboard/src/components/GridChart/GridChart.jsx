import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";

const GridChart = ({ columns, data }) => {
  // const customizeCell = (args) => {
  //   if (args.column.field === "image") {
  //     args.cell.querySelector("img").setAttribute("src", args.data.image);
  //   }
  // };

  return (
    <Table data={data} virtualized autoHeight hover >
      <Column width={100} resizable>
        <HeaderCell>Imagem</HeaderCell>
        <Cell dataKey="avatar" />
      </Column>

      <Column width={480} resizable sortType >
        <HeaderCell>Nome</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column width={200} sortable resizable>
        <HeaderCell>Preço</HeaderCell>
        <Cell dataKey="price" />
      </Column>

      <Column width={300} sortable resizable>
        <HeaderCell>Pedidos</HeaderCell>
        <Cell dataKey="orders" />
      </Column>
    </Table>
  );
};

export default GridChart;
