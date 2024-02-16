
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import {  doc, getDoc,  getFirestore } from 'firebase/firestore'




const ItemDetailContainer = () => {

const [product, setProduct]= useState({})
const {pid}= useParams()

useEffect(()=>{
  const db= getFirestore()
  const queryDoc = doc(db,"products",pid)
  getDoc(queryDoc)
  .then(resp=> ({id: resp.id, ...resp.data()}))
  .then (resp=> setProduct(resp))
  .catch(err=> console.log(err))
},[])

return (
    <div>
        <ItemDetail product= {product}/>
    </div>
  )
}

export default ItemDetailContainer

