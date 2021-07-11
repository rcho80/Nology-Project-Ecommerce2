import { useState, useEffect } from "react";
import Counter from "../counter/Counter";
import styles from "./CreateClient.module.scss"

  // const defaultClient = {
  //   name: "",
  //   quantity: "",
  //   productId: "",
  //   variant: "",
  // };

const CreateClient = ({loadClient}) => {
  console.log(loadClient)
const [client,setClient] = useState(loadClient);

// const [quantity, setQuantity] = useState(prod.quantity || 0);

// useEffect(() => {
//   onChange({
//     ...prod,
//     setQuantity: quantity
//   });
// }, [quantity])
   
//  const handleChange = (event) => {
//    const attribute = event.target.name;
//    const copy = {...client};
//    copy[attribute] = event.target.value
//    setClient(copy);
//  }

//   const handleQuantityChange = (event) => {
//     const attribute = event.target.name;
//     const copy = {...client};
//     if(!isNaN(event.target.value)) {
//       copy[attribute] = parseInt(event.target.value)
//     } else {
//       copy.quantity = 0;
//     }
//     setClient(copy);
//   }

  // const handleDelete = () => {
  //     onDelete(prod.id);
  // }


  return (
    <div className={styles.cart}>
      <h3 className={styles.cart__items}>Name: {client.name}</h3>
      <h3 className={styles.cart__items}>Quantity: {client.quantity}</h3>
      <h3 className={styles.cart__items}>ProductId: {client.productId}</h3>
      <button>Delete</button>
    </div>
  );
}

export default CreateClient;