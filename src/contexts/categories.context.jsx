import { createContext, useState,useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children})=>{
    useEffect(()=>{
        const getCategoriesMap = async() =>{
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[]);

    const [categoriesMap , setCategoriesMap] = useState({});
    const value = {categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
        
   
}