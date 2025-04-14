import React from 'react';

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return {
    props: { users },
  };
}

export default function UsersPage({ users }) {
  return (
    <div>
      <h1>Daftar Pengguna</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
