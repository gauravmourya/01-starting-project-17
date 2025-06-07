import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    price: 10,
    title: 'Vada Pav',
    description: 'Bombay special Vada Pav',
  },
  {
    id: 2,
    price: 20,
    title: 'Dabeli',
    description: 'Gujrat special dabeli',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { DUMMY_PRODUCTS.map(product => 
        <ProductItem
          title = {product.title}
          id = {product.id}
          price = {product.price}
          description = {product.description}
          key= {product.id}
        /> )}
      </ul>
    </section>
  );
};

export default Products;
