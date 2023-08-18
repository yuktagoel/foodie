
export const Toggle = ({ label, toggled, onClick }) => {
  return (
    <label>
      <input type="checkbox" defaultChecked={toggled} onClick={onClick} />
      <span />
      <strong>{label}</strong>
    </label>
  );
};
