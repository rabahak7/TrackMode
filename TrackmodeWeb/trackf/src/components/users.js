import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([{}]);
    
    useEffect(() => {
        const fetchData = () => {
            axios
                .get("/data/users")
                .then((response) => {
                    if (response.data.length > 0) {
                        setUsers(response.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        fetchData();
        const timer = setInterval(() => {
            fetchData();
        }, 1000);
        // console.log(selected);
        return () => clearInterval(timer);
    }, []);
    
    return (
        <div className="content">
            <table>
                <thead>
                    <tr>
                        {Object.keys(users[0]).map((key) => {
                            return <td>{key}</td>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {users.map((users) => {
                        return (
                            <tr>
                                {Object.keys(users).map((key) => {
                                    return( <td>{users[key]}</td>);
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

// const dtx = [
//     {
//         user_id: 0,
//         user_name: "user1",
//         device_mac: "98:28:A6:D4:6F:0E",
//         creation_date: null,
//     },
// ];

export default Users;
