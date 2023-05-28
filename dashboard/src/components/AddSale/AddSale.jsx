const AddSale = () => {
  return (
    <form action="">
      <div>
        <label htmlFor="dropdown" className='hidden'>
          Produto
        </label>
        input
      </div>
      <div>
        <label htmlFor="quantity" className='hidden'>
          Quantidade
        </label>
        <input type="number" 
          name='quantity'
          id='quantity'
          min='0'
          placeholder='Quantidade'
        />
      </div>
      <button className='btn btn-primary'>Confirmar</button>
    </form>
  )
};

export default AddSale;