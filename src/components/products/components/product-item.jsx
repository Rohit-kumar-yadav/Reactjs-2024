import styles from './product-item.module.css'


function ButtonComponents() {
    console.log(styles);
    
  return <button className={styles.buttonstyle}>click</button>;
}

function ProductItem({ singleProductItem }) {
  return (
    <div className={styles.Product}>
      <h4 className={styles.ProductTittle}>{singleProductItem}</h4>
      <ButtonComponents />
    </div>
  );
}

export default ProductItem;
