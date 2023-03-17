export default function Field({ label }) {
    return (
      <div className="Field">
        <div className="Field__Label">{label}</div>
        <input className="Field__Input" />
        <div className="Field__HelperMessage">Helper message</div>
      </div>
    );
  }