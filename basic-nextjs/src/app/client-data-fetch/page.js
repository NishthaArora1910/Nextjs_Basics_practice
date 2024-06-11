'use client'

import { useState, useEffect } from "react";

export default function ClientSideDataFetching() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const apiResponse = await fetch('https://fakestoreapi.com/users');
            const result = await apiResponse.json();

            if (result) {
                setUsers(result);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setUsers([]);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, []);

    if (loading) return <h3 className="font-extrabold text-3xl">Loading Users! Please wait ..</h3>;

    return (
        <div>
            <h1>Client Side Data Fetching ....</h1>
            <ul>
                {users && users.length > 0 ? (
                    users.map(user => (
                        <li key={user.id} className="mt-5 cursor-pointer">
                            {user.username}
                        </li>
                    ))
                ) : null}
            </ul>
        </div>
    );
}
