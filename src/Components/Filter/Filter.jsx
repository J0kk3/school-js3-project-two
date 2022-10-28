import React from "react";

class Filter extends React.Component
{
    // constructor( props )
    // {
    //     super( props );
    //     this.state = {
    //         clickedAll: this.props.setClickedAll( false ),
    //     };
    // }
    setClickedAllFunction ()
    {
        this.props.setClickedAllFunction();
        console.log( "clickedAllFunction" );
    }

    renderButtons ()
    {
        const categories = [];
        this.props.itemArr.forEach( item =>
        {
            if ( !categories.includes( item.category ) )
            {
                categories.push( item.category );
            }
        } );

        return categories.map( ( category, index ) =>
        {
            return (
                <button key={ index } onClick={ () => { this.setCategory( category ); } }  >{ category }</button>
            );
        } );
    };

    setCategory ( category )
    {
        const filteredArr = this.props.itemArr.filter( item => item.category === category );
        console.log( filteredArr );
        this.props.setCategory( filteredArr );
    }

    showAllItems ()
    {
        this.props.setClickedAllFunction();
    }

    render ()
    {
        return (
            <div className="filterDiv">
                <button onClick={ () => this.showAllItems() }>All</button>
                { this.renderButtons() }
            </div>
        );
    }
}

export default Filter;