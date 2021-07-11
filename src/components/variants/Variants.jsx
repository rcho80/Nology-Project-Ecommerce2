import { useState } from "react";


const Variants = ({item, onSelect}) => {
  const [check, setCheck] = useState("option1")
 
  console.log(item.variants)
  
  const handleChange = (event) => {
    console.log(event.currentTarget.checked)
    // console.log(event.target.form)
  }

  const handleSubmit = (event) => {
      event.preventDefault(); 
  }

   return (
    

     <form onSubmit={handleSubmit}>
       <label for="one">{item.variants[0]}</label>
       <input
         id="one"
         type="radio"
         checked={check === "option1"}
         value="option1"
         name={item.variants[0]}
         onChange={handleChange}
       />
       <label for="two">{item.variants[1]}</label>
       <input
         id="two"
         type="radio"
         value="option2"
         checked={check === "option2"}
         name={item.name[1]}
         onChange={handleChange}
       />
       <label for="three">{item.variants[2]}</label>
       <input
         id="three"
         type="radio"
         checked={check === "option3"}
         name={item.name[2]}
         value="option3"
         onChange={handleChange}
       />
     </form>
   );
}

export default Variants;
