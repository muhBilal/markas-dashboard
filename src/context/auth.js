import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';
import { auth, db } from '../../service/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const router = useRouter()

  const createUser = (nama_lengkap, username, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: username,
        })

        setDoc(doc(db, 'Candidate', auth.currentUser.uid), {
          Address: '',
          Bio: '',
          City: '',
          Country: '',
          Email: email,
          Name: nama_lengkap.toLoweCase(),
          Phone: '',
          Postal: '',
          Province: '',
          Skills: '',
          Website: ''
        })
        
        .then(res => console.log(res))
        .catch(err => console.log(err))
      })
      .then((res) => router.push('/'))
      .catch((err) => console.log(err))
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn, forgotPassword }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};