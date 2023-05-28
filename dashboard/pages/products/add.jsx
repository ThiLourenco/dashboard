const { default: Heading } = require("src/UI/Heading/Heading")

const AddProduct = () => {
  return (
    <section>
      <Heading
        title='Adicionar Produto'
        subtitle='Preencha os campos para adicionar um produto'
      />
      <form>
        <div>
          <label htmlFor="name" className="hidden">
            Nome
          </label>
          <input 
            type="text" 
            name="name"
            id="name"
            placeholder="Nome do produto"
          />
        </div>
        <div>
          <label htmlFor="price" className="hidden">
            Preço
          </label>
          <input 
            type="number" 
            name="price"
            id="price"
            placeholder="Preço"
          />
        </div>
        <div>
          <label htmlFor="image" className="hidden">
            Imagem
          </label>
          <input 
            type="file" 
            name="image"
            id="image"
          />
        </div>
        <button className="btn btn-primary">Adicionar</button>
      </form>
    </section>
  )
};

export default AddProduct;