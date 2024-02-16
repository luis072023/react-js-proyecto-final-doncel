
import {Link} from "react-router-dom"
import "./Item.css"



const Item = ({product}) => {

    return(

        <div className="producto">
            <div className="card-body">
                <img className= "img" src={product.img} alt="img" />
                <p className="texto"> {product.name}</p>
                <p className="texto">{product.description}</p>
                <p className="texto">Precio: $ {product.price}</p>
                <Link to={`/detalle/${product.id}`}>
                    <button className="detalle">Detalle</button>
                </Link>
        </div> 
    </div>
        
    )

}

export default Item