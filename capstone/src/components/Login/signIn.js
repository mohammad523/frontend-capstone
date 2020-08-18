import firebase from 'firebase/app'

const signIn = async (email, password) => {
    try{
    const result = await firebase.auth().signInWithEmailAndPassword(email, password)
    return {};
    } catch(e) {
        throw new Error('error signing in');
    }
}

export default signIn