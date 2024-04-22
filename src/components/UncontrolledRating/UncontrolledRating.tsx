import React, { useState } from 'react';

type RatingValueProps = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
  defaultValue?: RatingValueProps
  onChange: (value: RatingValueProps) => void
};

function UncontrolledRating(props: RatingPropsType) {
  // console.log('Rating rendering');

  let [value, setValue] = useState<RatingValueProps>(props.defaultValue ? props.defaultValue : 0);
  // console.log('value:', value);

  // const onClickSpan = (value: number) => {
  //   setValue(value)
  // }

  return (
    <div>
      {/* <Star onClickSpan={() => onClickSpan(1)} selected={value > 0} />{' '}
      <Star onClickSpan={() => onClickSpan(2)} selected={value > 1} />{' '}
      <Star onClickSpan={() => onClickSpan(3)} selected={value > 2} />{' '}
      <Star onClickSpan={() => onClickSpan(4)} selected={value > 3} />{' '}
      <Star onClickSpan={() => onClickSpan(5)} selected={value > 4} />{' '} */}
      <Star selected={value > 0} setValue={() => { setValue(1); props.onChange(1); } }/>
      <Star selected={value > 1} setValue={() => { setValue(2); props.onChange(2); } }/>
      <Star selected={value > 2} setValue={() => { setValue(3); props.onChange(3); } }/>
      <Star selected={value > 3} setValue={() => { setValue(4); props.onChange(4); } }/>
      <Star selected={value > 4} setValue={() => { setValue(5); props.onChange(5); } }/>
    </div>
  );
}

type StarPropsType = {
  selected: boolean
  // onClickSpan: () => void
  setValue:() => void
  // value: number
};

function Star(props: StarPropsType) {
  // console.log('Star rendering');
  return (
    <>
                              
        <span onClick={props.setValue}> {/* onClick={props.onClickSpan} */}
        { props.selected ? <b>star </b> : 'star' }
        </span>
  
    </>
  );
}

export default UncontrolledRating;
