const Search = ({ handleClick, value }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        className="w-full p-2 outline-0"
        onChange={handleClick}
        value={value}
        placeholder="What are you looking for?"
      ></input>
    </div>
  );
};
export default Search;
