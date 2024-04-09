import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, { RatingValueType } from './components/Rating/Rating';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';



function App() {
  // console.log('App rendering');

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  const [value, setValue] = useState(false)
  // console.log('value:', value)

  return (
    <div className='App'>
      <PageTitle title={'This is APP component'}/>
      
      <Rating value={ratingValue} onClick={setRatingValue} />

      <UncontrolledRating/>

      <Accordion 
        titleValue={'Menu'} 
        collapsed={accordionCollapsed} 
        onChange={ () => setAccordionCollapsed(!accordionCollapsed) 
      }/>

      <UncontrolledAccordion titleValue={'Users'}/>

      {/* <OnOff value={value} onChange={() => setValue(!value)}/> */}

      <UncontrolledOnOff onChange={setValue}/> {value.toString()}
      
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  // debugger
  // console.log('Title rendering');
  return <h1>{props.title}</h1>
}

export default App;

