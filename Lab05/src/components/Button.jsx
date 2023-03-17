export default function Button({ label }){
    return (
      <button className="Button">
        <div className="Button__Label">{label}</div>
      </button>
    );
}