import './App.css';
import React,{useState} from 'react';
import EmployeList from './EmployeList';

function App() {

  const [markedNames, setmarkedNames] = useState([]);
  const [allchecked, setallcheckd] = useState(false);
  let IsAllChecked = false;

  const handleCheck = (e, id) => {
    
    if (e.target.checked) {
      setmarkedNames([...markedNames, id]);
    } else {
      setmarkedNames(markedNames.filter((item) => item !== id));
    }
    if (markedNames.length !== 30) {
      // setallcheckd(false);
      IsAllChecked = false;
    }
  };

  const handleCheck2 = (e, id) => {
    if (e.target.checked) {
      EmployeList[id].IsSelected = true;
      console.log(EmployeList[id]);
    }
  }

  const handleAllCheck = (e) => {
    console.log("click")
    if (e.target.checked) {
      const allId = EmployeList.map((emp) => emp.ID)
      setmarkedNames(allId);
      // setallcheckd(true);
      IsAllChecked = true;
      console.log("alll");
      console.log(IsAllChecked);
    }
    else {
      console.log(markedNames.length);
      // setallcheckd(false);
      // IsAllChecked = false;
      setmarkedNames([]);
    }
  }
  function lookCheck() {
    console.log("called");
    console.log(IsAllChecked);
    return IsAllChecked;
  }

  return (
    <>
      <ul>
        {EmployeList.map((emp) => (
          <li key={emp.ID}>
            <input
              type="checkbox"
              id={emp.ID}
              checked={markedNames.includes(emp.ID)}
              // checked={emp.IsSelected}
              onChange={(e) => handleCheck(e, emp.ID)}
            />
            <label
              style={{ textDecoration: markedNames.includes(emp.ID) ? 'line-through' : 'none' }}
            >
              {emp.Name}
            </label>
          </li>
        ))}

        <li key={'select-all'}>
          <input
            type='checkbox'
            id='select-all'
            checked={lookCheck()}
            onChange={(e) =>handleAllCheck(e)}
            />{lookCheck}
          <label>Select All</label>
        </li>
      </ul>
    </>
  );
}

export default App;
