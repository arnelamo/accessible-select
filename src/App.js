import DropDown from "./Dropdown";

const App = () => {
  return (
    <div
      style={{
        margin: "200px auto 0",
        width: "800px",
      }}
    >
      <button style={{ marginBottom: 50 }}>dummybutton 1</button>
      <DropDown onChange={(value) => console.log("returned value:", value)} />
      <button style={{ marginTop: 50 }}>dummybutton 2</button>
    </div>
  );
};

export default App;
