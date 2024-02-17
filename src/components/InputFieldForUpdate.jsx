import { useState } from 'react';
import './Register/Register.css'
function InputFieldUpdate({name,type,placeholder,children,required=false,disabled=false,value}) {
      const [xvalue,setXvalue] = useState(value);
    return (
        <>
        <div className='form_label'>
                    <label>{children}</label>
                    </div>
                    <input type={type} placeholder={placeholder} 
                    autoComplete='off' 
                    name={name}
                    required={required}
                    disabled={disabled}
                    value={xvalue}
                    onChange={(e)=>setXvalue(e.target.value)}
                     >
                    </input>
        </>
    );
}

export default InputFieldUpdate;