import { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "./component/forms/input"
import { Checkbox } from "./component/forms/checkbox"
import { ProductCategoryRow } from "./component/products/productCategoryRow";
import { ProductRow } from "./component/products/productRow";

const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function App() {

  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState("")
  const [range,setRange] = useState(0)

  const visibleProducts = PRODUCTS.filter(product => {
    if(showStockedOnly && !product.stocked){
      return false
    }
    if(search && !product.name.toLowerCase().includes(search.toLowerCase())){
      return false
    }
    if(range && product.price.length < range){
      return false
    }
    return true
  })
  console.log(range)
  return <div className="container my-3">
    <SearchBar 
      range={range}
      onRangeChange={setRange}
      search={search}
      onSearchChange={setSearch}
      showStockedOnly={showStockedOnly} 
      onStockedOnlyChange={setShowStockedOnly}
    />
    <ProductTable products={visibleProducts}/>
  </div>
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange, range, onRangeChange}){
  return <div>
    <div className="mb-3">
      <Input 
        value={search} 
        onChange={onSearchChange} 
        placeholder="Search..."/>
      <input 
        type="range"
        className="form-range"
        min={0}
        max={10}
        value={range}
        onChange={(e)=>onRangeChange(e.target.value)}
      />
      <Checkbox 
        id="stocked" 
        checked={showStockedOnly} 
        onChange={onStockedOnlyChange} 
        label="Show only available products"/>
    </div>
  </div>
}
SearchBar.propTypes = {
  search : PropTypes.string.isRequired,
  onSearchChange : PropTypes.func.isRequired,
  range : PropTypes.number.isRequired,
  onRangeChange : PropTypes.func.isRequired,
  showStockedOnly : PropTypes.bool.isRequired,
  onStockedOnlyChange : PropTypes.func.isRequired
}

function ProductTable({products}){
  const rows = []
  let lastCategory = null

  for (let product of products){
    if(product.category !== lastCategory){
      rows.push(<ProductCategoryRow key={product.category} category={product.category}/>)
    }
    lastCategory = product.category
    rows.push(<ProductRow key={product.name} product={product}/>)
  }

  return <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {products.map(product => <ProductRow key={product.name} product={product}/>)}
    </tbody>
  </table>
}

ProductTable.propTypes = {
  products : PropTypes.array.isRequired
}
export default App