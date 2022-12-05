import React, {useState} from 'react';

export const CustomReactHook = () => {

  const [currentValue, setCurrentValue] = useState('');

  const handleChange = (e) => {
    const newValue = e?.target?.value;
    setCurrentValue(newValue);
  }
  
  return <div>
    Search: <input type="text" onChange={handleChange} />
    <br/>
    <br/>

    <div>
      <b>
        Current value:
      </b>
      <p>
        {`${currentValue ? currentValue : 'No value'}`}
      </p>
    </div>
    <br/>

    <div>
      <b>
        Debounced value:
      </b>
      <p>
        {/* Add the debounced value here */}
      </p>
    </div>
    <br/>

  </div>

}