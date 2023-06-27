import './App.css';
import React,{useState} from 'react';
import EmployeList from './EmployeList';

function App() { 

    const [users, setUsers] = useState(EmployeList);
    
    const handleCheck = (id) => {
        console.log(users)
        const updatedUsers = users.map((user) => {
        if (user.ID === id) {
            return { ...user, IsSelected: !user.IsSelected };
        }
        return user;
        });
    
        setUsers(updatedUsers);
    };
    
    const handleAllSelect = () => {
        const allChecked = users.every((user) => user.IsSelected);
    
        const updatedUsers = users.map((user) => ({
        ...user,
        IsSelected: !allChecked,
        }));
    
        setUsers(updatedUsers);
    };
    
    return (
    <div className='d-flex justify-content-center w-100'>
            
    <div>
    <label>
        <input
        type="checkbox"
        checked={users.every((user) => user.IsSelected)}
        onChange={handleAllSelect}
        />
        Select All
    </label>

    <ul>
        {users.map((user) => (
        <li
            key={user.ID}
            style={{ textDecoration: user.IsSelected ? 'line-through' : 'none' }}
        >
            <label>
            <input
                type="checkbox"
                checked={user.IsSelected}
                onChange={() => handleCheck(user.ID)}
            />
            {user.Name}
            </label>
        </li>
        ))}
    </ul>
    </div>
    </div>
            
    );
}
export default App;