import { useEffect, useState } from "react";
import { menuURL } from "../../utils/constants";

const useMenuData = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  // To fetch the data only at first render
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(menuURL + resId);
    const json = await data.json();
    setResInfo(json.data.cards[0].card.card.info);
  };
  return resInfo;
};

export default useMenuData;
