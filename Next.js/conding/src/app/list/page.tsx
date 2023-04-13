const List = () => {
  let arr = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <div className="text-center font-bold">Products</div>
      {arr.map((data, i) => {
        return (
          <div className="food" key={i}>
            <h4>{data} $40</h4>
          </div>
        );
      })}
    </div>
  );
};

export default List;
