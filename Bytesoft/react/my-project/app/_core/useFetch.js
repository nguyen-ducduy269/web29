import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCxzgw7fOEsS9Ctjmy8psGF2TDAVQtosRU",
  authDomain: "newproject-6b715.firebaseapp.com",
  projectId: "newproject-6b715",
  storageBucket: "newproject-6b715.appspot.com",
  messagingSenderId: "262978420003",
  appId: "1:262978420003:web:b06ce57671f1b1ba73a096",
  measurementId: "G-M3SXS4ZZQ8",
};

firebase.initializeApp(config);

export const useFetch = () => {
  const [singleDocs, setSingleDocs] = useState({});
  const db = firebase.firestore();

  db.collection("products")
    .doc("1")
    .get()
    .then((snapshot) => {
      if (snapshot) {
        setSingleDocs(snapshot.data());
      }
    });

  return singleDocs;
};
