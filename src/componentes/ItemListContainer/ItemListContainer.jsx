import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

function ItemListContainer({ gretting }) {
  const [products, setProducts] = useState([]);
  const [wait, setWaiting] = useState(true);

  const { idcat } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, 'products');
    const queryFilter = idcat ? query(queryCollection, where("category", "==", idcat)) : queryCollection;

    console.log('Categoría seleccionada:', idcat);

    getDocs(queryFilter)
      .then(resp => {
        const filteredProducts = resp.docs.map(prod => ({ id: prod.id, ...prod.data() }));
        console.log('Filtered Products:', filteredProducts);
        setProducts(filteredProducts);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      })
      .finally(() => setWaiting(false));
  }, [idcat]);

  useEffect(() => {
    console.log('Número de productos:', products.length);
  }, [products]);

  return (
    <div className='inicio'>
      <h1 className="gretting">
        {gretting}
      </h1>
      <div className="row">
        <ItemList products={products} />
      </div>
    </div>
  );
}

export default ItemListContainer;
