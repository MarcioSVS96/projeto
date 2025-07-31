import React, { createContext, useState, useContext } from 'react';

const UsersContext = createContext();

const initialUsers = [
  { id: 1, email: 'admin@ead.com', password: '1234', role: 'admin' },
  { id: 2, email: 'instrutor@ead.com', password: '1234', role: 'instrutor' },
  // alunos serão adicionados via cadastro
];

export function UsersProvider({ children }) {
  const [users, setUsers] = useState(initialUsers);

  function addUser(newUser) {
    setUsers(prev => [
      ...prev,
      { ...newUser, id: prev.length + 1, role: 'aluno' }
    ]);
  }

  function findUser(email, password) {
    const emailLower = email.trim().toLowerCase();
    return users.find(
      u => u.email.toLowerCase() === emailLower && u.password === password
    );
  }

  return (
    <UsersContext.Provider value={{ users, addUser, findUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
