import { collection, doc, collectionChanges, fromCollectionRef, fromDocRef } from 'rxfire/firestore';
import { map, switchMap, mergeMap, mergeAll, combineAll } from 'rxjs/operators';

import { db } from './firebase.service';
import { Book } from 'models/book';
import { Channel } from 'models/channel';
import { of, BehaviorSubject, combineLatest, from, merge } from 'rxjs';

class BookAndChannel {
  books: Book;
  nameChannel: string;
  constructor(data: any = {}) {
    this.books = data.books || null;
    this.nameChannel = data.nameChannel || '';
  }
}

function getAllBooks() {
  let res= collection(db.collection('books').limit(12)).pipe(
    switchMap(snapshot =>
      snapshot.map(doc0 => {
        const rsd= new Book(doc0.data());
        return combineLatest(of(rsd), GetChanelName(doc0.data())).pipe(
          map(val=>{
            let ob=new BookAndChannel({books: val[0], nameChannel: val[1][0]})
            return ob;
          })
        )
      }),
    ), map(val=>{return val})
  );
  return res;
}

function GetChanelName(object){
  let rs= new Book(object);
  let channelId = rs.channelId;
  let res= collection(db.collection('channels').where('channelId', '==', channelId)).pipe(
    map(res => res.map(doc1 => {
      let resChennel = new Channel(doc1.data());
      return resChennel.name;
    }))
  );
  return res;
}


function getAllBooks2() {
  return collection(db.collection('books').limit(12)).pipe(
    switchMap(books => {
      const channelIds = books.map(v => v.data()['channelId']);
      const books2 = books.map(v => v.data());
      return combineLatest(of(books2), combineLatest(channelIds.map(channelId => {
        collection(db.collection('channels').where('channelId', '==', channelId)).pipe(map(v => {
          return v[0].data();
        }))
      })))
    }),
    map(([books, channels]) => {
      return books.map(book => {
        let ob=new BookAndChannel({books: book, nameChannel: channels})
            return ob;
      })
      //return {books, channels};
    })
  );
}

export { getAllBooks, getAllBooks2 };
