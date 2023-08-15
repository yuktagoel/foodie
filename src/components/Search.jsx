const Search = ({ handleClick, value }) => {
  return (
    <input
      type="text"
      className="p-2.5 bg-slate-400 rounded-md h-3 w-72"
      onChange={handleClick}
      value={value}
    ></input>
  );
};
export default Search;
