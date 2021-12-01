import { Card, Col, Button } from "antd";

export default function FoodBox(props) {
  function deleteFoodItem(foodName) {
    props.deleteItem(foodName);
  }

  const { food } = props;

  return (
    <div>
      <Col>
        <Card title={food.name} style={{ width: 230, height: 350, margin: 10 }}>
          <img src={food.image} alt="img" height={60} />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>
              Total Calories: {food.calories} * {food.servings}{" "}
            </b>{" "}
            kcal
          </p>
          <Button onClick={() => deleteFoodItem(food.name)} type="primary">
            {" "}
            Delete{" "}
          </Button>
        </Card>
      </Col>
    </div>
  );
}
