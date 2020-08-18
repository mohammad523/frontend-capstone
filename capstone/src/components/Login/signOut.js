import firebase from 'firebase/app';

export const signOut = async () => {
    try{
        await firebase.auth().signOut();
    } catch (e) {
        throw new Error('error while signing out')
    }
}