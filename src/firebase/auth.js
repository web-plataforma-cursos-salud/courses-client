import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updatePassword,
  sendEmailVerification,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  console.log(result.user);
  return result;
};

export const doSignOut = async () => {
  return await auth.signOut();
};

export const doPasswordReset = async (email) => {
  return await sendPasswordResetEmail(auth, email); // Asegúrate de pasar `auth` aquí
};

export const doPasswordChange = async (password) => {
  return await updatePassword(auth.currentUser, password); // Debes pasar el usuario actual
};

export const doSendEmailVerification = async () => {
  return await sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/`,
  });
};
