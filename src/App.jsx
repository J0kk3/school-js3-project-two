import { useState, useEffect } from "react";
import Card from './Components/Card/Card';
import Form from './Components/Form/Form';
import Filter from "./Components/Filter/Filter";
import Output from "./Components/Output/Output";

const App = () =>
{
  const [ itemArr, setItemArr ] = useState( [] );
  const [ filteredArr, setFilteredArr ] = useState( [] );
  const [ clickedAll, setClickedAll ] = useState( true );


  useEffect( () =>
  {
    setFilteredArr( itemArr );
  }, [ itemArr ] );

  const handleSubmit = () =>
  { };

  const setClickedAllFunction = () =>
  {
    setFilteredArr( [ ...itemArr ] );
  };

  const setCategory = ( ss ) =>
  {
    setFilteredArr( ss );
  };

  const clickedAllBtn = () =>
  {
  };

  return (
    <div>
      <Card className="form">
        <Form itemArr={ itemArr } setItemArr={ setItemArr } handleSubmit={ handleSubmit } />
      </Card>
      <Filter itemArr={ itemArr } setCategory={ setCategory } filteredArr={ filteredArr } clickedAllBtn={ clickedAllBtn } clickedAll={ clickedAll } setClickedAll={ setClickedAll } setClickedAllFunction={ setClickedAllFunction } />
      <Output filteredArr={ filteredArr } />
    </div>
  );
};

export default App;