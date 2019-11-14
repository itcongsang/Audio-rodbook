export class User {
    uid: string;
    password: string;
    email: string;
    displayName: string;
    photoURL: string;
  
    constructor(user: any = {}) {
      this.uid = user.uid || '';
      this.email = user.email || '';
      this.displayName = user.displayName || '';
      this.photoURL = user.photoURL || '';
      this.password = user.password || '';
    }
  }