export default function Button({ label, onCLick }){
    return (
      <button className="Button" onClick={onCLick}>
        <div className="Button__Label">{label}</div>
      </button>
    );
}