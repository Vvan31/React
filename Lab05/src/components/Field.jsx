export default function Field({ label, onChange, value, errorMessage="Helper message"}) {
    return (
      <div className="Field">
        <div className="Field__Label">{label}</div>
        <input className="Field__Input" onChange={onChange} value={value}/>
        <div className="Field__HelperMessage">{ errorMessage }</div>
      </div>
    );
  }