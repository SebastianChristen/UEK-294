import { useState } from "react";
import { useEffect } from "react";

export default function SearchList(props) {
  const names = props.names;
  const [filter, setFilter] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setFilter(inputValue);
  };

  useEffect(() => {
    //TODO: This doesn't work yet
    var el = names.find(a =>a.includes(filter));

    setFilteredNames(el)



  }, [filteredNames]);

  return (
    <div>
      <input type="text" onChange={handleChange}></input>

      {filteredNames.map((name) => {
        return (
          <div key={name}>
            <div>{name}</div>
          </div>
        );
      })}
    </div>
  );
}
