/**
 * 
 * @param {Object} product
 * @param {string} product.name
 * @param {string} product.price
 * @param {boolean} product.stocked
 */ 
import PropTypes from 'prop-types'

export function ProductRow({product}){
    
    const style = product.stocked ? undefined : {color : 'red'}
    
    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}
ProductRow.propTypes = {
    product : PropTypes.shape({
        name : PropTypes.string.isRequired,
        price : PropTypes.string.isRequired,
        stocked : PropTypes.bool.isRequired
    }).isRequired
}