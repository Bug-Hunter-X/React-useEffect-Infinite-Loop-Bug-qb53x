```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: The effect runs only once after mounting.
    // No state update here
    console.log('Component Mounted'); //added console log to show that component mounted only once
  }, []); // Empty dependency array prevents re-rendering

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```