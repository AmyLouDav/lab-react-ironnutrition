import { useState } from "react";
import { Input} from "antd";

export default function AddFoodForm(props) {

const [formState, setFormState] = useState({})

function handleSubmit(event){
    event.preventDefault()
    props.parentCb(formState)
    setFormState({})
}

function handleInput(event){
    let {name, value} = event.target
    setFormState(Object.assign({}, formState, {[name]: value}))
}


  return (
    <div>
      <div className="AddFoodForm">
        <h4>Add Food Entry</h4>
        <form onSubmit={handleSubmit}>
          <label for="title">Name</label>
          <Input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleInput}
          />

          <label htmlFor="image">Image</label>
          <Input
            type="text"
            name="image"
            value={formState.image}
            onChange={handleInput}
          />

          <label htmlFor="calories">Calories</label>
          <Input
            type="number"
            name="calories"
            value={formState.calories}
            onChange={handleInput}
          />

          <label htmlFor="servings">Servings</label>
          <Input
            type="number"
            name="servings"
            checked={formState.servings}
            onChange={handleInput}
          />

          <br />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}
