import React from 'react';
import users from './users';
// TODO - 2
// Import variabel users dari file users.js


const UsersController = () => {
    (async () => {
        console.log("Formatted Users:", await formatUser(users));
        console.log("Found User:", await findByName("Serly"));
        console.log("Filtered Users by Major:", await filterByMajor("Web"));
    })();
    return (
        <div>
            <h3>Cek hasilnya pada konsole</h3>
        </div>
    );
}

// TODO - 3
// Buatlah function formatUser yang menampilkan seluruh nama users
// Gunakan metode async await
// Gunakan metode map untuk format user
const formatUser = async () => {
    try {
        const formattedUsers = await Promise.all(users.map(async user => {
            return `${user.name} - ${user.major}`;
        }));
        return formattedUsers;
    } catch (error) {
        console.error("Error in formatUser:", error);
    }
}

// TODO - 4
// Buatlah function findByName yang mencari 1 user berdasarkan nama
// Gunakan metode async await
// Gunakan metode find untuk mencari user
const findByName = async (name) => {
    try {
        const user = await users.find(user => user.name === name);
        return user ? user : "User not found";
    } catch (error) {
        console.error("Error in findByName:", error);
    }
}

// TODO - 5
// Buatlah function filterByMajor yang mencari semua user berdasarkan major
// Gunakan metode async await
// Gunakan metode filter untuk menyaring user
const filterByMajor = async (major) => {
    try {
        const filteredUsers = await users.filter(user => user.major === major);
        return filteredUsers.length > 0 ? filteredUsers : "No users found with the specified major";
    } catch (error) {
        console.error("Error in filterByMajor:", error);
    }
}

export default UsersController;
