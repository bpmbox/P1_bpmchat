import firebase from "../firebase";

const db = firebase.ref("/messagess");
//serach をここに記載する
class TutorialDataService {

  seach() {
    const sdb = firebase.ref("/messagess/" + "aaa");
    return sdb;
  }

  getAll() {
    return db;
  }

  create(tutorial) {
    return db.push(tutorial);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new TutorialDataService();
