import { useState } from "react";
//import Filter from "../Filter/Filter";

const Form = props =>
{
    const [ name, setName ] = useState( "" );
    const [ category, setCategory ] = useState( "" );
    const [ amount, setAmount ] = useState( "" );
    const [ date, setDate ] = useState( "" );

    const handleSubmit = ( event ) =>
    {
        event.preventDefault();
        props.setItemArr( [ ...props.itemArr, { name, category, amount, date } ] );

        setName( "" );
        setCategory( "" );
        setAmount( "" );
        setDate( "" );
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input type="text" value={ name } required placeholder="Product Name" onChange={ e => setName( e.target.value ) } />
                <input type="text" value={ category } placeholder="Product Category" onChange={ e => setCategory( e.target.value ) } />
                <input type="number" value={ amount } placeholder="Product Amount" onChange={ e => setAmount( e.target.value ) } />
                <input type="date" value={ date } onChange={ e => setDate( e.target.value ) } />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;