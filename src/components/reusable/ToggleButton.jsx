
export const Toggle = ({ label, toggled, onClick }) => {
  return (
    <label className="toggle__label">
      <input className="toggle__input" type="checkbox" defaultChecked={toggled} onClick={onClick} />
      <span className="toggle__slider"/>
      <strong className="toggle__strong">{label}</strong>
    </label>
  );
};
