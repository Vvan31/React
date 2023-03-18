export default function Button({ label, onCLick }){
    return (
      <button onClick={ onCLick } className="Button">
        <div className="Button__Label">{label}</div>
      </button>
    );
}