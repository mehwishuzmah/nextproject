import React from 'react'

const Input = (props) => {
    const{name,labelfor,label,labelId,type}=props;
  return (
    <>
               <div className="mb-4">
                        <label htmlFor={labelfor}>{label}</label>
                        <input
                          type={type}
                          className="form-control"
                          id={labelId}
                          name={name}
                        
                        />
                      </div>
    </>
  )
}

export default Input
