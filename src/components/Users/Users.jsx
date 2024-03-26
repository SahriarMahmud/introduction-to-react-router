import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {


    const users = useLoaderData();
    console.log(users)

    // useState-->data
    // useState-->loader
    // useEffect
    // fetch-->  set state --> set state after loading\

    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Fantastic and vodro users</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;