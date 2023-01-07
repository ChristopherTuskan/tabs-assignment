import { useState } from "react";

const Tab = (props) => {
    const {allTabs, tabIndex, setTabIndex} = props;

    const tabClicked = (index) => {
        // console.log(index);
        if (index === tabIndex){
            return "tabClicked";
        }else {
            return "tabNotClicked";
        }
    }

    const setClickedTab = (index) => {
        // console.log(tabIndex);
        setTabIndex(index);
        console.log(tabIndex);
    }
    
    return(
        allTabs.map((tab, index) =>
            <button className={`m-2 ${tabClicked(index)}`} key={index} onClick={(e) => setClickedTab(index)}>{tab.label}</button>
        )
    );
}

export default Tab;