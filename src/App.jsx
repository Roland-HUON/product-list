import { Fragment, useState } from "react"
import PropTypes from "prop-types";

function App() {

  const [productName, setProductName] = useState("Search...")
  const [checked, setChecked] = useState(false)

  return <Fragment>
    <input type="text" value={productName} onChange={e => setProductName(e.target.value)} />
    <CheckedBox checked={checked} onCheck={setChecked}/>
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

export default App