
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd2jPFR1RmyHKGKGzpF3SE-B_EKPC01fw",
  authDomain: "clothing-db-7214.firebaseapp.com",
  projectId: "clothing-db-7214",
  storageBucket: "clothing-db-7214.appspot.com",
  messagingSenderId: "327696034630",
  appId: "1:327696034630:web:59a81643898aec57141347"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = ()=>signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = () =>signInWithRedirect(auth,googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async(collectionKey,objectsToAdd)=>{
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    });

    await batch.commit();
    console.log('done');
}

export const getCategoriesAndDocuments = async()=>{
    const collectionRef = collection(db,'categories');

    const q = query(collectionRef);
    const querySnapShot = await getDocs(q);
    const categoryMap = querySnapShot.docs.reduce((acc,docSnapshot)=>{
        const {title,items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    },{});
    return categoryMap;
}

export const createUserDocumentFromAuth = 
async (
    userAuth,
    additionalInformation={}
    ) =>{
    if(!userAuth){
        return;
    }

    const userDocRef = doc(db,'users',userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        }catch(error){
            console.log('error creating user:'+error);
        }
    }


};

export const createAuthUserWithEmailAndPassword = async(email,password) =>{
    if(!email || !password){
        return;
    }

    return await createUserWithEmailAndPassword(auth,email,password); 
}

export const signInWithAuthUserWithEmailAndPassword = async(email,password) =>{
    if(!email || !password){
        return;
    }
    return await signInWithEmailAndPassword(auth,email,password); 
}

 export const signOutUser = () => signOut(auth);

 export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);