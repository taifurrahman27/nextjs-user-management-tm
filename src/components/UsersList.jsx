import React, { use } from 'react';

const UsersList = ({ usersPromise }) => {
    const users = use(usersPromise);

    return (
        <div>
            <h2>Users List: {users.length}</h2>

            <div className='grid grid-cols-3 justify-between items-center gap-3'>
                {
                    users.map(user => <div key={user.id} className='border-2 p-4 border-cyan-300'>
                        <h2 className='text-2xl text-blue-400 font-bold'>{user.name}</h2>
                        <p className='font-bold text-slate-200'>{user.email}</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default UsersList;