import React from "react";
import Contact from "./Contact";

function KudoList(props) {
  return (
    <div>
        {props.contacts.map(c => <Contact key={c.id} name={c.name} fname={c.fname} lname={c.lname} kgive={c.kgive} kreceived={c.kreceived} /> )}
    </div>
  );
}

export default KudoList;
