import { NavLink } from "react-router-dom";

const ListUsers = ({ users }) => {
    return (
        <>
            {users.map(user => (
                <div className="col-md-4" key={user.id}>
                    <div className="card">
                        <div className="card-header fw-bold">
                            <NavLink to={`/users/${user.id}`} >{user.name}</NavLink>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">username : {user.username}</li>
                            <li className="list-group-item">email : {user.email}</li>
                            <li className="list-group-item">phone : {user.phone}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListUsers;