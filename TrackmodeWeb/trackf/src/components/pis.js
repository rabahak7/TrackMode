import { useState, useEffect } from "react";
import axios from "axios";

const Pis = () => {
    const [pis, setPis] = useState([{}]);
    
    useEffect(() => {
        const fetchData = () => {
            axios
                .get("/data/pis")
                .then((response) => {
                    if (response.data.length > 0) {
                        setPis(response.data);
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
                        {Object.keys(pis[0]).map((key) => {
                            return <td>{key}</td>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {pis.map((pis) => {
                        return (
                            <tr>
                                {Object.keys(pis).map((key) => {
                                    return( <td>{pis[key]}</td>);
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

export default Pis;
