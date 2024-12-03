export default function InputField({ onChange, labelText, children }) {
  return (
    <p>
      <label>{labelText}</label>
      <input type="number" required value={children} onChange={onChange} />
    </p>
  );
}
