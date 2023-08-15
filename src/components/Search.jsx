const Search = ({ handleClick, value }) => {
  return (
    <div className="search__wrapper">
      <input
        type="text"
        className="search__box"
        onChange={handleClick}
        value={value}
        placeholder="What are you looking for?"
      ></input>
    </div>
  );
};
export default Search;
