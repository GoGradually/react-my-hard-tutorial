import Button from "../components/Button";

function Playground() {
  return (
    <div>
      <div>Playground Component</div>
      
      <Button
        description="Click Me"
        variant="primary"
        size="small"
      />
        <Button description="Small" variant="primary" size="small" />
        <Button description="Medium" variant="primary" size="medium" />
        <Button description="Large" variant="primary" size="large" />

    </div>
  );
}

export default Playground;
