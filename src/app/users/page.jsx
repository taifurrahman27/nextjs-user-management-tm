import React from 'react';

const UsersPage = async () => {
    const res = await fetch('http://localhost:5000/users')
    const users = await res.json();

    console.log(users, "My Users");

    return (
        <div>
            <h1>
                Users: {users.length}
            </h1>
            <div className='grid grid-cols-3 justify-between items-center gap-3'>
                {
                    users.map(user => <div key={user.id} className='border-2 p-4'>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default UsersPage;