export function Btn(props: any) {
  return (
    <button {...props} style={{ margin: 10 }}>
      {props.children}
    </button>
  );
}
