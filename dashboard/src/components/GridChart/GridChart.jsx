import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
} from "@syncfusion/ej2-react-grids";
import { Inject, Page, Sort } from "@syncfusion/ej2-react-grids";
import { useSelector } from "react-redux";

const GridChart = () => {
  const { list: products } = useSelector((state) => state.dashboard.products);

  return (
    <div>
      <GridComponent
        id="adaptiveBrowser"
        dataSource={products}
        allowPaging={true}
        pageSettings={{ pageSize: 10 }}
        filterSettings={{ type: 'Excel' }}
        allowSorting={true}
        allowFiltering={true}
      >
        <ColumnsDirective>
          <ColumnDirective field="name" headerText="Nome" width="200" />
          <ColumnDirective field="price" headerText="Preço" width="120" format='C2' />
          <ColumnDirective field="orders" headerText="Pedidos" width="120" />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
    </div>
  );
};

export default GridChart;
