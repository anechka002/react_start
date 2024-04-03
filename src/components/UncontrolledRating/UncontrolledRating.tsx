import React, { useState } from 'react';

type RatingPropsType = {
  // value: 0 | 1 | 2 | 3 | 4 | 5
};

function UncontrolledRating(props: RatingPropsType) {
  console.log('Rating rendering');

  let [value, setValue] = useState(0);
  console.log('value:', value);

  const onClickSpan = (value: number) => {
    setValue(value)
  }

  return (
    <div>
      <Star onClickSpan={() => onClickSpan(1)} selected={value > 0} />{' '}
      {/* <button onClick={() => setValue(1)}>1</button> */}
      <Star onClickSpan={() => onClickSpan(2)} selected={value > 1} />{' '}
      {/* <button onClick={() => setValue(2)}>2</button> */}
      <Star onClickSpan={() => onClickSpan(3)} selected={value > 2} />{' '}
      {/* <button onClick={() => setValue(3)}>3</button> */}
      <Star onClickSpan={() => onClickSpan(4)} selected={value > 3} />{' '}
      {/* <button onClick={() => setValue(4)}>4</button> */}
      <Star onClickSpan={() => onClickSpan(5)} selected={value > 4} />{' '}
      {/* <button onClick={() => setValue(5)}>5</button> */}
    </div>
  );
}

type StarPropsType = {
  selected: boolean
  onClickSpan: () => void
};

function Star(props: StarPropsType) {
  // console.log('Star rendering');
  return (
    <>
    
        <span onClick={props.onClickSpan}>
        {props.selected ? <b>star </b> : <span>star</span>}
        </span>
  
    </>
  );
}

export default UncontrolledRating;
