import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'


const GridChart = ({ columns, data }) => {
  // const customizeCell = (args) => {
  //   if (args.columns.field === 'image' ) {
  //     args.cell.querySelector('img').setAttribute('src', args.data.image);
  //   }
  // }

  const dataList = [
    { id: 1, name: 'a', email: 'a@email.com', avartar: '...' },
    { id: 2, name: 'b', email: 'b@email.com', avartar: '...' },
    { id: 3, name: 'c', email: 'c@email.com', avartar: '...' }
  ];
  
  // const ImageCell = ({ rowData, dataKey, ...rest }) => (
  //   <Cell {...rest}>
  //     <img src={rowData[dataKey]} width="50" />
  //   </Cell>
  // );
  

  const renderColumns = columns.map((column, i) => (
    // <ColumnDirective key={i} {...column}></ColumnDirective>
    <></>
  ))

  return (
    <Table data={dataList}>
    <Column width={100} sortable fixed resizable>
      <HeaderCell>ID</HeaderCell>
      <Cell dataKey="id" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Name</HeaderCell>
      <Cell dataKey="name" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Email</HeaderCell>
      <Cell>
        Email
      </Cell>
    </Column>

    <Column width={100} resizable>
      <HeaderCell>Avartar</HeaderCell>
      {/* <ImageCell dataKey="avartar" /> */}
      <Cell>
        Image
      </Cell>
    </Column>
  </Table>
  );
};

export default GridChart;
