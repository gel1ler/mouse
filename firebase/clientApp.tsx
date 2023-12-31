import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, update, child, get, remove } from "firebase/database"
import { getStorage, ref as storageRef, listAll, getDownloadURL, deleteObject, uploadBytesResumable } from "firebase/storage"
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { TCard } from "@/GlobalTypes";

const firebaseConfig = {
    apiKey: "AIzaSyAfxoz-oqERMTDBwXis_c41Izes-z0Pe0I",
    authDomain: "mouse-7e37f.firebaseapp.com",
    databaseURL: "https://mouse-7e37f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mouse-7e37f",
    storageBucket: "mouse-7e37f.appspot.com",
    messagingSenderId: "956419156693",
    appId: "1:956419156693:web:c1d9e03e9aa2a94dc6d05c"
};

initializeApp(firebaseConfig)

////////////////////////////////////////////////////////////
//DB

type TCardData = {
    name: string;
    date: string;
    pos: { x: number, y: number }
}

const db = getDatabase()

export async function getCards(): Promise<TCard[]> {
    const dbRef = ref(db)
    const snapshot = await get(child(dbRef, "cards"))

    if (snapshot.exists()) {
        const cards = snapshot.val()
        return cards
    } else {
        return []
    }
}

export async function createCard(cardData: TCardData, file: File) {
    const src = await uploadImage(file)


    const reference = ref(db, 'cards/' + cardData.name)

    set(reference, {
        src,
        name: cardData.name,
        date: cardData.date,
        pos: cardData.pos

    }).then(() => console.log('succ')).catch(err => console.log(err))
}

export async function deleteCard(id: number) {
    try {
        await remove(ref(db, 'cards/' + id)).
            then(() => 'success')
    }
    catch (err) {
        console.log(err)
    }
}

//////////////////////////////////////////////////////////////////////
//Storage

const st = getStorage()

export async function uploadImage(file: File) {
    const imagesRef = storageRef(st, `${file.name}`);
    const uploadTask = uploadBytesResumable(imagesRef, file);

    const downloadUrl = await new Promise((resolve, reject) => {
        uploadTask.on(
            'state_changed',
            (snapshot) => { },
            (error) => {
                console.log(error)
            },
            async () => {
                try {
                    const url = await getDownloadURL(uploadTask.snapshot.ref)
                    resolve(url)
                } catch (err) {
                    console.error(err)
                    reject(err)
                }
            }
        )
    })

    return downloadUrl
}