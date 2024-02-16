import './ItemCount.css'
import { CustomHooks } from '../hooks/CustomHooks';



const ItemCount= ({inicial, stock, onAdd})=>{
    const {count,subtractCounter,addCounter}= CustomHooks(inicial,stock)


return <div>

    <button  className='botones'onClick={subtractCounter}> - </button>
    <label className='contador'> 
        <strong >{count}</strong>
    </label>
    <button className='botones' onClick={addCounter}> + </button>
    <button className='botones' onClick={()=> onAdd(count)}>Agregar al carrito</button>

</div>
    
}
export default ItemCount