import UsersList from '@/components/UsersList';
import React, { Suspense } from 'react';

const getUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
}

const Users2Page = () => {
    const usersPromise = getUsers();

    return (
        <div>
            <h2>Users 2 with suspense</h2>
            <Suspense fallback={<div>Loading....</div>}>
                <UsersList usersPromise={usersPromise} />
            </Suspense>
        </div>
    );
};

export default Users2Page;