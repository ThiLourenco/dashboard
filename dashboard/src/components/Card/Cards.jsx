import Card from './Card';
import  styles from './Cards.module.scss';

const Cards = () => {
  return (
    <div className={styles.cards}>
      <Card title='Pedidos' subtitle='Total em pedidos hoje' value='20'/>
      <Card title='Vendas' subtitle='Total em vendas hoje' value='R$ 500'/>
      <Card title='Acumulado' subtitle='Total em vendas' value='R$ 2000'/>
    </div>
  )
};

export default Cards;
