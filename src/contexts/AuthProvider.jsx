import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  createContext, useEffect, useMemo, useState,
} from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

// firebase auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggedInUserInfo, setLoggedInUserInfo] = useState({});
  const [dbUsers, setDbUsers] = useState([]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const parsedUserData = JSON.parse(localStorage.getItem('user-info'));
    const currentUserData = parsedUserData.find((userData) => userData.email === user?.email);
    setLoggedInUserInfo(currentUserData);
  }, [user]);

  // get all users
  useEffect(() => {
    const parsedUserData = JSON.parse(localStorage.getItem('user-info'));
    setDbUsers(parsedUserData);
  }, [user]);

  const authInfo = useMemo(() => ({
    user,
    loading,
    setLoading,
    createUser,
    loginUser,
    logoutUser,
    updateUserProfile,
    googleLogin,
    loggedInUserInfo,
    dbUsers,
  }), [user, loading, loggedInUserInfo, dbUsers]);

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}
