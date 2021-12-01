import { useState } from "react";
import { Input} from "antd";

export default function Search(props) {
    const [string, stringState] = useState("");

    function handleSelect(event){
        stringState(event.target.value)
        props.filteredFoods(event.target.value)
    }
    return(
            <div className="Search">
              <label>Search</label>
              <Input value={string} onChange={handleSelect} />
              <button type="submit">Search</button>
              
            </div>
    )}
