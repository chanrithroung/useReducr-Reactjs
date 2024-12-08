// import { useState, useEffect } from "react"
// const UseFetchUser = () => {
//     const [user, setUser] = useState([]);
//     const [initialUser, setInitialUser] = useState([]);
//     useEffect( () => {
//         fetch('/assets/User.json')
//         .then(response => response.json())
//         .then(data => {setUser(data); setInitialUser(data) })
//         .catch(error => console.log("An error ocrren : ", error))
//     } ,[]);
//     return {user, setUser, initialUser};
// }
// export default UseFetchUser;

const fetchUser = async () => {
    try {
        const response = await fetch('/assets/User.json');
        const data =  await response.json();
        return data;
    } catch (error) {
        console.log("An error occurent : ", error);
        return null;
    }
}

export default fetchUser;