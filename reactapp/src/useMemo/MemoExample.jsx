import { useMemo, useState } from "react";

function MemoExample() {
  const [count, setCount] = useState(0);
  const [dark,setDark] = useState(false)
  // Simulate a heavy computation
  const expensiveValue = useMemo(() => {
    console.log('Calculating...');
    return count*1000;
  }, [count]);

  const theme = {
    backgroundColor: dark?"black":"white",
    color:dark?"white":"black"
  }

  return (
    <div style={theme}>
      <h2>useMemo Example</h2>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={()=>setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default MemoExample