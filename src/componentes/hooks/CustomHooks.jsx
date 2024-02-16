import { useState } from 'react';

export const CustomHooks = (min, max) =>{
    const [count, setCount]= useState(1)

    const addCounter = () => {
        if (count < max){
            setCount (count + 1)
        }
    }
    const subtractCounter = () => {
        if (count > min){
            setCount (count - 1)
        }
    }


return{count,addCounter,subtractCounter}

}
