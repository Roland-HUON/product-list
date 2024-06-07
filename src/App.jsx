import { Fragment, useState } from "react"
import PropTypes from "prop-types";

const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function App() {
  const [productName, setProductName] = useState("Search...")
  const [checked, setChecked] = useState(false)

  return <Fragment>
    <input type="text" value={productName} onChange={e => setProductName(e.target.value)} />
    <CheckedBox checked={checked} onCheck={setChecked}/>
    <div>
      <h2>Name</h2>
      <h2>Price</h2>
    </div>
    <VegetablesFruits/>
  </Fragment>
}

function CheckedBox({checked, onCheck}){
  return <label>
    <input 
      type="checkbox"
      onChange={(e)=> onCheck(e.target.checked)}
      checked={checked}
    />
    Show only products in stock
  </label>
}

CheckedBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired
}

function VegetablesFruits(){
  const Fruit = () => {
    const listFruits = PRODUCTS.filter(product => product.category === "Fruits")
    return listFruits.map((fruit, index) => {
      return <div key={index}>
        <h3>{fruit.name}</h3>
        <h3>{fruit.price}</h3>
      </div>
    })
  }
  const Vegetable = () => {
    const listVegetable = PRODUCTS.filter(product => product.category === "Vegetables")
    return listVegetable.map((vegetable, index) => {
      return <div key={index}>
        <h3>{vegetable.name}</h3>
        <h3>{vegetable.price}</h3>
      </div>
    })
  }

  return <div>
    <h2>Fruits</h2>
    <div className="fruits">
      <Fruit/>
    </div>
    <h2>Vegetables</h2>
    <div className="vegetables">
      <Vegetable/>
    </div>
  </div>
}

export default App