// src/lib/auth.ts
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { database } from './firebase';

interface User {
  kissanId: string;
  name: string;
  phoneNumber: string;
  password: string;
}

const auth = getAuth();

export const signup = async (kissanId: string, name: string, phoneNumber: string, password: string): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, kissanId, password);
    const user = userCredential.user;

    // Store additional user data in Firebase Realtime Database
    set(ref(database, 'users/' + user.uid), {
      kissanId: kissanId,
      name: name,
      phoneNumber: phoneNumber,
    });

    console.log("User signed up successfully:", user);
    return true;
  } catch (error: unknown) {
    console.error("Error signing up user:", error);
    alert(error.message);
    return false;
  }
};

import { signInWithEmailAndPassword } from "firebase/auth";

export const login = async (kissanId: string, password: string): Promise<boolean> => {
  try {
    await signInWithEmailAndPassword(auth, kissanId, password);
    return true;
  } catch (error: unknown) {
    console.error("Error signing in user:", error);
    alert(error.message);
    return false;
  }
};