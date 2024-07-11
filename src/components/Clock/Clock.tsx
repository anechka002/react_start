import React, { useEffect, useState } from 'react';
import { DigitalClockView } from './DigitalClockView';
import { AnalogClockView } from './AnalogClockView';

// type PropsType = {
//   mode?: 'analog' | 'digital';
// };

// const get2digitsString = (num: number) => (num < 10 ? '0' + num : num);

// export const Clock: React.FC<PropsType> = (props) => {
//   const [date, setDate] = useState(new Date());

//   useEffect(() => {
//     // debugger
//     const intervalId = setInterval(() => {
//       console.log('Tick');
//       setDate(new Date());
//     }, 1000);

//     return () => {
//       // debugger
//       clearInterval(intervalId);
//     };
//   }, []);


//   return (
//     <div>
//       {props.mode === 'analog' 
//         ? <AnalogClockView date={date}/>
//         : <DigitalClockView date={date}/>
//       }
//     </div>
//   );
// };

// type ClockViewPropsType = {
//   date: Date
// }

// export const DigitalClockView = ({date}: ClockViewPropsType) => {
//   return (
//     <>
//           <span>{get2digitsString(date.getSeconds())}</span>
//           :
//           <span>{get2digitsString(date.getMinutes())}</span>
//           :
//           <span>{get2digitsString(date.getHours())}</span>
//         </>
//   )
// }

// export const AnalogClockView = ({date}: ClockViewPropsType) => {
//   return <span>Analog</span>
// }

type ClockProps = {
  mode?: 'analog' | 'digital'
}

export type ClockViewPropsType = {
  date: Date
}

export const Clock = ({mode}: ClockProps) => {
  const[date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      // debugger
      console.log('Tick')
      setDate(new Date())
    }, 1000)
    return () => {
      // debugger
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      {mode === 'analog' 
      ? <AnalogClockView date={date}/>
      : <DigitalClockView date={date}/>}
    </div>
  )
}










