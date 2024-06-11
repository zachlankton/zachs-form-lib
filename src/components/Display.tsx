export function Display(props: any) {
  return (
    <div
      style={{
        ...props.style,
        maxWidth: "400px",
        margin: "20px auto",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 0 10px #ccc",
      }}
    >
      <pre>
        <code>{JSON.stringify(props.data, null, "  ")}</code>
      </pre>
    </div>
  );
}
