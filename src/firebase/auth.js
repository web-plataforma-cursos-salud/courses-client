import { auth } from "./firebase";
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
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  console.log(result.user);
  return result;
};

export const doSignOut = async () => {
  return auth.signOut();
};

export const doPasswordRestet = async (email) => {
  return sendPasswordResetEmail(email);
};

export const doPasswordChange = async (password) => {
  return updatePassword();
};

export const doSendEmailVerificartion = async () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/`,
  });
};
