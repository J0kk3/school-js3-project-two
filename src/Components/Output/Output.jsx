// import { useState } from "react";
import Card from "../Card/Card";

const Output = props =>
{
    const itemList = () =>
    {
        return props.filteredArr.map( ( item, index ) =>
        {
            return (
                <Card className="output" key={ index }>
                    <p>{ item.name }</p>
                    <p>{ item.category }</p>
                    <p>{ item.amount }</p>
                    <p>{ item.date }</p>
                </Card>
            );
        } );
    };

    return (
        <>
            { itemList() }
        </>
    );
};

export default Output;