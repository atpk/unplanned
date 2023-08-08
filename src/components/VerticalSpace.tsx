interface Props {
  space: string;
}

function VerticalSpace({ space }: Props) {
  return (
    <div style={{ margin: space + " 0" }}>{/* some vertical space */}</div>
  );
}

export default VerticalSpace;
