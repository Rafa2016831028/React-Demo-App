import React , {useState, useEffect} from 'react';

export async function GetProductService(){
    const [isLoaded , setIsLoaded]= useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    React.useEffect(()=>{
        fetch("https://62213a0e-144d-4121-9e00-859350d438ec.mock.pstmn.io/product")
        .then(res => res.json())
        .then(
            (result) => {
           // debugger
            JSON.parse(JSON.stringify(result))
            setIsLoaded(true);
            console.log(result.product);
            setProducts(result.product);
            
        },
        (error) => {
           // debugger
            setIsLoaded(true);
            setError(error);
        })
    }, [])
//     if(error){ return <div>{error.message}</div>;}
//    else if (!isLoaded){ return <div>Loading</div>;}
//     else {
//         const result = products;
//         let count =0;
//        // debugger
//         return (
//             <div>{products.map(item => (<div>{item.name}</div>))}</div>
//         )
//     }
 return products;
}
export default {GetProductService};