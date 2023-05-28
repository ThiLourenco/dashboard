import Link from "next/link";
import client from "src/sanity";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

import Heading from "src/UI/Heading/Heading";
import Cards from "src/components/Card/Cards";
import SalesGoal from "src/components/SalesGoal/SalesGoal";
import SalesHistory from "src/components/SalesHistory/SalesHistory";
import TopSales from "src/components/TopSales/TopSales";
import styles from "styles/Dashboard.module.scss";
import { 
  createOrdersWithProduct, 
  populateOrders, 
  populateProducts, 
  populateSales } 
from "src/store/dashboard-slice";
import { setConfig } from "src/store/ui-slice";

export default function Home({ orders, products, config }) {
  // hook for handler reducers functions
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(populateOrders(orders));
    dispatch(populateProducts(products));
    dispatch(createOrdersWithProduct());
    dispatch(populateSales());
    dispatch(setConfig(config));
  }, []);


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
  );
}

export const getStaticProps = async () => {
  const orders = await client.fetch('*[_type == "orders"]');
  const products = await client.fetch('*[_type == "products"]');
  const config = await client.fetch('*[_type == "config"][0]');

  return {
    props: {
      orders,
      products,
      config,
    }
  }
}
