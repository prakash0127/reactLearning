import ChildC from "./ChildC";

function ChildB({ name }) {
  return (
    <div>
      <ChildC name={name} />
    </div>
  );
}

export default ChildB;
