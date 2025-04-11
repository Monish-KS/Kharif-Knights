// src/lib/auth.ts

interface User {
  kissanId: string;
  name: string;
  phoneNumber: string;
  password: string;
}

const users: User[] = [];

export const signup = (kissanId: string, name: string, phoneNumber: string, password: string): boolean => {
  if (users.find(user => user.kissanId === kissanId)) {
    return false; // User already exists
  }
  users.push({ kissanId, name, phoneNumber, password });
  return true;
};

export const login = (kissanId: string, password: string): boolean => {
  const user = users.find(user => user.kissanId === kissanId && user.password === password);
  return !!user; // Returns true if user exists, false otherwise
};