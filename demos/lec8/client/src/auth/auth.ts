import { auth } from "../utils/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const signIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    console.log(user);

    return { token, user };
  } catch (error: any) {
    const code = error.code;
    const message = error.message;
    const email = error.custonData.email;

    console.log(
      `An error ${code} occurred when logging user with email: ${email} with message: ${message}`
    );
    return null;
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};
