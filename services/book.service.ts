import { collection, doc, collectionChanges, fromCollectionRef, fromDocRef } from 'rxfire/firestore';
import { map, switchMap, mergeMap, mergeAll, combineAll } from 'rxjs/operators';

import { db } from './firebase.service';
import { Book } from 'models/book';
import { Channel } from 'models/channel';
import { of, BehaviorSubject, combineLatest, from, merge } from 'rxjs';
import { uniq } from 'lodash';

class BookAndChannel extends Book {
  channelName:string;
  constructor(data: any = {}) {
    super(data);
    this.channelName = data.channelName || '';
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
      const channelIds = uniq(books.map(v => v.data()['channelId']));
      console.log('id ', channelIds)
      return combineLatest(
        of(books),
        combineLatest(
          channelIds.map(channelId =>
            collection(db.collection('channels').where('channelId', '==', channelId)).pipe(map(v => v[0]))
          )
        )
      );
    }),
    map(([books, channels]) => {
      
      return books.map(book => {
        const bookDoc = book.data();
        const channel = (channels.find(o => o.data().channelId === bookDoc.channelId));

        return new BookAndChannel({
          ...bookDoc,
          channelName: typeof channel === 'object' ? channel.data().name : '',
        });
      });
    })
  );
}

export { getAllBooks, getAllBooks2 };
