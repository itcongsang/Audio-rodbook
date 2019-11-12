export class Book {
  bookId: string;
  name: string;
  author: string;
  reader: string;
  description: string;
  categoryId: string;
  price: number;
  coverUrl: string;
  coverPath: string;
  likeCount: number;
  rating: number;
  created: any;
  updatedAt: any;
  status: string; //Approved,Disapproved
  listenCount: number;
  accountId: string;
  channelId: string;
  type: string; //fee, free
  durationTime: number; // seconds
  durationText: string;

  constructor(data: any = {}) {
    this.bookId = data.bookId || '';
    this.name = data.name || '';
    this.author = data.author || '';
    this.reader = data.reader || '';
    this.description = data.description || '';
    this.categoryId = data.categoryId || '';
    this.price = data.price || 0;
    this.coverUrl = data.coverUrl || '';
    this.coverPath = data.coverPath || '';
    this.likeCount = data.likeCount || 0;
    this.rating = data.rating || 0;
    this.created = data.created || new Date();
    this.updatedAt = data.updatedAt || new Date();
    this.status = data.status || 'Approved'; //Approved,Disapproved
    this.listenCount = data.listenCount || 0;
    this.accountId = data.accountId || '';
    this.type = data.type || 'free'; //fee, free
    this.durationTime = data.durationTime || 0; // seconds
    this.durationText = data.durationText || '';
    this.channelId = data.channelId || '';
  }
}
