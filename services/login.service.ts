import { Observable } from 'rxjs';
import * as Cookies from 'js-cookie';
// import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'models/user';
import { mergeMap, filter, map } from 'rxjs/operators';
import { authState } from 'rxfire/auth';
import { db, auth } from './firebase.service';

export class AuthenticationService {
    // private readonly CURRENT_USER_KEY = 'current_user_key';
  
    // userData: Observable<firebase.User>;            
    // user: User;
    userDataToken: Observable<{user: User, idToken: string}>;
    private readonly TOKEN_KEY = 'rodbook_access_token';
  
    _isLogin = false;
    private _token = '';
  
    constructor(
      
    ) {
      this.loadToken();
  
      //dữ liệu về user
      //this.userData = authState;
  
      //step2
      this.userDataToken = authState(auth)
        .pipe(
          filter(user => user !== null),
          mergeMap(
            user => user.getIdToken(),
            (user, idToken) => ({ user, idToken })
          )
        ).pipe(map(val => {
          const idToken = val.idToken;
          const user = new User({
            uid: val.user.uid,
            email: val.user.email,
            displayName: val.user.displayName,
            photoURL: val.user.photoURL,
            emailVerified: val.user.emailVerified
          });
          return {
            user,
            idToken
          }
        }))

        // dataAuth.subscribe(({ user, idToken }) => {
        //   if (user) {
        //     //gán dữ liệu user
        //     this.user = new User({
        //       uid: user.uid,
        //       email: user.email,
        //       displayName: user.displayName,
        //       photoURL: user.photoURL,
        //       emailVerified: user.emailVerified
        //     });
        //     console.log(user);
  
        //     //tại sao lại có thể gán dc
        //     this.setCookieToken(idToken);
        //     this._token = idToken;
        //     this._isLogin = true;
        //   } else {
        //   }
        // });
    }
  
    // //lấy trạng thái login
    // get isLogin(): boolean {
    //   return this._isLogin;
    // }
  
    // //lấy token
    // get token(): string {
    //   return this._token;
    // }
  
  
    //hàm Đăng nhập (Lấy dữ liệu data)
    async loginFirebase(email: string, password: string, Redirect) {
      try {
  
        //gọi library dăng nhập
        const res = await auth.signInWithEmailAndPassword(
          email,
          password
        );
  
        //(res success)=> get idtoken
        const idToken = await res.user.getIdToken(true);
  
        //set token vào cookie
        this.setCookieToken(idToken);
        
        //set user data
        // this.user = new User({
        //   uid: res.user.uid,
        //   email: res.user.email,
        //   displayName: res.user.displayName,
        //   photoURL: res.user.photoURL,
        //   emailVerified: res.user.emailVerified
        // });
  
        //gán trạng thái đăng nhập
        this._token = idToken;
        this._isLogin = true;
        Redirect();
  
        return true;
      } catch (error) {
        console.log('Something is wrong:', error.message);
        return false;
      }
    }
  
    logout() {
      Cookies.remove(this.TOKEN_KEY);
      this._token = '';
      this._isLogin = false;
      auth.signOut();
    }
  
    createAcc() {
      //rodbooks.com@gmail.com    khFD5yU1zNccJuB7oipl6NrOFR42
      auth.createUserWithEmailAndPassword(
        'rodbooks@gmail.com',
        'Rodbooks@114'
      );
    }
    async createUser(email: string, password: string) {
      try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        console.log('Response create New User', res);
        return res.user.uid;
      }
      catch (err) {
        console.log('Response create User Fail');
        return null;
      }
    }
  
    //step 1: kiểm tra trạng thái login 
    loadToken() {
      const token = Cookies.get(this.TOKEN_KEY) || ''; //boolen
      if (token) {
        //nếu token=true thì gán token
        //login đã login
        this._token = token;
        this._isLogin = true;
      } else {
  
        this._token = '';
        this._isLogin = false;
      }
    }
  
    //Dữ liệu token và thời gian suy trì đăng nhập đưa vào cookie
    private setCookieToken(token: string) {
      const dateExpires: Date = new Date(
        new Date().getTime() + 360 * 1000 * 60 * 60 * 24
      );
      Cookies.set(this.TOKEN_KEY, token, {
        path: '/',
        domain: this.getDomain(),
        expires: dateExpires
      });
    }
  
    private getDomain() {
      const domain = document.domain;
      const domainParts = domain.split('.');
      if (domainParts.length === 1) {
        return domain;
      } else {
        domainParts.shift();
        return domainParts.join('.');
      }
    }
  }