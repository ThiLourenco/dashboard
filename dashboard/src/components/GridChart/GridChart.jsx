
const GridChart = ({ columns, data }) => {
  const customizeCell = (args) => {
    if (args.columns.field === 'image' ) {
      args.cell.querySelector('img').setAttribute('src', args.data.image);
    }
  }

  const renderColumns = columns.map((column, i) => (
    // <ColumnDirective key={i} {...column}></ColumnDirective>
    <></>
  ))

  return (
    <div>
     oi
    </div>
  );
};

export default GridChart;
