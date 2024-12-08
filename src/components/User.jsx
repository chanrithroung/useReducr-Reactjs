import { useReducer } from "react";
import fetchUser from "./useFetchUser";
import "./User.css";
import UserCard from "./UserCard";
const users = await fetchUser();


const initailState = {
    users,
    isLogin: true,
}
const reducer = (state, action) => {
    switch(action.type) {
        case "CLEAR_LIST":
            return {...state, users: []}
        case "RESET_LIST":
            return {users}
        case "REMOVE":
            return { users: state.users.filter(e => e.id !== action.payload.id) }
        
    }
}

const User = () => {
    const [state, dispatch] = useReducer(reducer, initailState);
    const handleClear  = () => dispatch({type: "CLEAR_LIST"})
    const handleReset = () => dispatch({type: "RESET_LIST"})
    const handleRemove = id => dispatch({ type: "REMOVE", payload:{id:id} });
    return(
        <main>
            <div className="container">
                {state.users.map(e => <UserCard key={e.id}  {...e} handleRemove={handleRemove} />)}
            </div>
            {state.users.length && <button className="btn" onClick={ () => handleClear() }>Clear</button> 
            || <button onClick={handleReset}  className="btn">Reset</button> }       
        </main>
    ) 
}
export default User;