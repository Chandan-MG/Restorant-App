import './Input.css';

const Input = (props) => {
    return(
        <div className='input'>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* here we adding props to input element */}
            <input {...props.input} /> 
        </div>
    )
}

export default Input;