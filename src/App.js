import { useState } from 'react';
import Tab from "./components/Tab";
import Display from "./components/Display";
import './App.css';

function App() {
  const tabArray = [
    {label: "Tab 1", content: "This is Tab 1 content"},
    {label: "Tab 2", content: "This is Tab 2 content"},
    {label: "Tab 3", content: "This is Tab 3 content"}
  ]

  const [allTabs, setAllTabs] = useState(tabArray);

  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className="App ">
      <div className="d-flex mx-auto col-6 justify-content-center">
        <Tab allTabs={allTabs} tabIndex={tabIndex} setTabIndex={setTabIndex}/>
      </div>
      <Display allTabs={allTabs} tabIndex={tabIndex}/>
    </div>
  );
}

export default App;
