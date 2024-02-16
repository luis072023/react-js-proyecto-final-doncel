import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import "./CartContainer.css"

const CartContainer = ()=>{
    const[dataForm,setDataForm]= useState({
        name:"",
        lastname:"",
        phone:"",
        email:"",
    })
    const[id, setId]= useState()
    const {cartList, deleteCart, totalPrice, deleteItem} = useCartContext()




const handleAddOrder = async (evt)=>{
   evt.preventDefault()
   if (!dataForm.name || !dataForm.lastname || !dataForm.phone || !dataForm.email) {
    alert('Por favor, complete todos los campos obligatorios.');
    return; 
} else {
const order={}
order.buyer={   name: dataForm.name,
                lastname: dataForm.lastname,
                phone: dataForm.phone,
                email: dataForm.email,}
    
order.items= cartList.map(prod=>{
    return{  id: prod.id, 
            name: prod.name,  
            quantity: prod.quantity,
            price: prod.price,}
})

order.total= totalPrice()



const queryDB=getFirestore () 

const ordersCollection = collection (queryDB, "orders")
addDoc (ordersCollection, order)
.then(({id})=>setId(id))
.catch(err=>console.log(err))
.finally(()=>{
    setDataForm({
        name:"",
        lastname:"",
        phone:"",
        email:""    })
        deleteCart()
})}}


const handleOnChange =(evt) =>{
    setDataForm(
        {
            ...dataForm,
            [evt.target.name] : evt.target.value,
            [evt.target.lastname] : evt.target.value,
            [evt.target.phone] : evt.target.value,
            [evt.target.email] : evt.target.value
        }
    )
}

    return(
<>
 
        {cartList.length > 0 ?

        <div className="carritocontainer">
            <h2 className="carrito">Carrito de compras</h2> 

        {cartList.map ( prod => 
            <div className="detallecarrito" key={prod.id}>
            <img  className= "img-carrito" src={prod.img} alt="img" />
            <p className="texto-carrito"> {prod.name}</p>
            <p className="texto-carrito">Precio:$ {prod.price}</p>
            <p className="texto-carrito">Cantidades: {prod.quantity}</p>
            <button className="detalle-boton" onClick={()=>deleteItem(prod.id)}>X</button>       
        </div>)}

    {totalPrice() !== 0 && <h3 className="preciocarrito">Precio total:$ {totalPrice()} </h3>} 

        <div className="col vacio">
        <button className="carrito-vacio" onClick={deleteCart}>Vaciar Carrito</button>
        </div>
        
        <div className="container-form">
        <h2 className="carrito">Complete el formulario</h2> 
        <form className="formulario col" onSubmit={handleAddOrder}>
            <input className="input" type="text" name="name" placeholder="Ingrese su nombre" value={dataForm.name} onChange={handleOnChange} />

            <input className="input"type="text" name="lastname" placeholder="Ingrese su apellido" value={dataForm.lastname} onChange={handleOnChange}/>
            
            <input className="input"type="number" name="phone" placeholder="Ingrese su telefono" value={dataForm.phone} onChange={handleOnChange}/>
        
            <input className="input"type="email" name="email" placeholder="Ingrese su email" value={dataForm.email}onChange={handleOnChange} />
            
            <button className="carrito-vacio">Finalizar Compra</button>
        </form>
        </div>

    
        </div>  
                : <div className="info-vacio">
                    { id !== " " && <p className="vacio">Orden de compra :{id}</p>} 
                    <h2 className="vacio">Carrito Vacio</h2>
                    <Link to="/" className="volver">Volver al Inicio</Link>
                    </div>
            }
</>  
) }

export default CartContainer