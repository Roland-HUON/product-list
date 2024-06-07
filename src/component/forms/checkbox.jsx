/**
 * @param {object} props
 * @param {string} props.id
 * @param {boolean} props.checked
 * @param {(checked:boolean)=>void} props.onChange
 * @param {string} props.label
*/

import PropTypes from 'prop-types';

export function Checkbox({checked, onChange, label, id}){
    return <div className='form-check'>
        <input 
            id={id}
            type="checkbox"
            className="form-check-input"
            checked={checked}
            onChange={(e)=>onChange(e.target.checked)} 
        />
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}

Checkbox.propTypes = {
    id : PropTypes.string,
    checked : PropTypes.bool.isRequired,
    onChange : PropTypes.func.isRequired,
    label : PropTypes.string.isRequired
}