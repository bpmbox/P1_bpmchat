// @deno-types="https://cdn.esm.sh/v58/firebase@9.6.0/app/dist/app/index.d.ts"
import {
    deleteApp,
    initializeApp,
  } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
  // @deno-types="https://cdn.esm.sh/v58/firebase@9.6.0/database/dist/database/index.d.ts"
  import {
    get,
    getDatabase,
    ref,
    // enableLogging,
  } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyCsOjFyAAuFr1CITcnufG-GpZBKpLgUP90",
    authDomain: "rpa999-56929.firebaseapp.com",
    databaseURL: "https://rpa999-56929.firebaseio.com",
    projectId: "rpa999-56929",
    storageBucket: "rpa999-56929.appspot.com",
    messagingSenderId: "155298248089",
    appId: "1:155298248089:web:e25d64dc9f5370c4"
  };
  
  // このコメントアウトを解除すると詳細なログが表示される
  enableLogging(console.log);
  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const docSnap = get(ref(db, `graphList/`));
  await deleteApp(app) // これを呼ばないと実行が終わらない