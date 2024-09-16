import { db } from '../firebase'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    uploadProfile,
    signOut
} from 'firebase/auth'
import { useState, useEffect } from 'react'