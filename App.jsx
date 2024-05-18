import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>Counter Example</h1>
      <Counter initialValue={0} incrementAmount={1} decrementAmount={1} />
    </div>
  );
}

export default App;
