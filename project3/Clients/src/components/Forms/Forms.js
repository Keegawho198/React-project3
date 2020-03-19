import React from "react";



export function SelectedForm(props) {
  return (
    
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Choose your Coach</option>

  </select>
  )
}


export function UserForm(props) {
  let type = props.type;
  
  
  return (
    <div>
      <input className="form-control" id="exampleInput" type={type} {...props}></input>
    </div>


  );
}

export function FormSubmit(props) {
  return (
    <div>
      <button type="submit" className="btn btn-primary" {...props}>Join</button>
    </div>
  );
}