/**
 * 
 * @param {string} category
 */
import PropTypes from 'prop-types';

export function ProductCategoryRow({category}) {
    return <tr>
        <th colSpan="2">{category}</th>
    </tr>
}

ProductCategoryRow.propTypes = {
    category : PropTypes.string.isRequired
}