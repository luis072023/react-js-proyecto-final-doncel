import { useCartContext } from "../../../Context/CartContext"


function CartWidget() {
    const{totalQuantity}= useCartContext()
    return(
        <div className="cartwidget">
            {totalQuantity() !== 0 && totalQuantity()}
        🛒
        </div>
    )
}

export default CartWidget