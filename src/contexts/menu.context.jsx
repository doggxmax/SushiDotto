import { createContext, useState, useEffect } from "react";
import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from "../components/utils/firebase/firebase.utils";
export const MenuContext = createContext({
  menuMap: {},
});

export const MenuProvider = ({ children }) => {
  const [menuMap, setMenuMap] = useState([]);

  useEffect(() => {
    const getMenuMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setMenuMap(categoryMap);
    };
    getMenuMap();
  }, []);

  // useEffect(() => {
  //   addCollectionAndDocuments("collections", MENU_DATA);
  // }, []);

  const value = { menuMap };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
