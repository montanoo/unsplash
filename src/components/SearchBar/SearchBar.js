import React, { useState } from "react";

export const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term)
  }
  // necesitamos que no se refresque la pagina al hacer submit.
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Pics Search</label>
          <input type="text" onChange={(e) => setTerm(e.target.value)}/>
        </div>
      </form>
    </div>
  );
};
