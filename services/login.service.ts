import { Observable } from 'rxjs';
import * as Cookies from 'js-cookie';
// import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'models/user';
import { mergeMap, filter, map } from 'rxjs/operators';
import { authState } from 'rxfire/auth';
import { db, auth, authProvider } from './firebase.service';

export class AuthenticationService {
    // private readonly CURRENT_USER_KEY = 'current_user_key';
    // userData: Observable<firebase.User>;            
    // user: User;
    userDataToken: Observable<{user: User, idToken: string}>;
  
    _isLogin = false;
    googleProvider = new authProvider.GoogleAuthProvider();
    facebookProvider = new authProvider.FacebookAuthProvider();
    private readonly TOKEN_KEY = 'rodbook_access_token';
    private _token = '';
    constructor() {
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
        //Cách này không hay, do lắng nghe ngay trong này, vậy làm sao gọi ra
        //Chỉ nên truyền vào Obsẻvable và khi new CLass thì chúng ta lắng nghe Observable.
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
    //Lắng nghe bên ngoài rồi thì cần chi 2 hàm này.
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
    async loginWithGoogle() {
      try {
        const res = await auth.signInWithPopup(this.googleProvider);
        //(res success)=> get idtoken
        const idToken = await res.user.getIdToken(true);
        //set token vào cookie
        this.setCookieToken(idToken);
        this._token = idToken;
        this._isLogin = true;
        return true;
      } catch (error) {
        console.log('Something is wrong:', error.message);
        return false;
      }
    }
    async loginWithGoogleRedirect(){
        await auth.signInWithRedirect(this.googleProvider);
        auth.getRedirectResult().then(async (result) => {
          if (result.credential) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const idToken = await result.user.getIdToken(true);
            this.setCookieToken(idToken);
            this._token = idToken;
            this._isLogin = true;
            console.log('loginWithGoogleRedirect ' + result.user.email);
            return true;
          }
          // The signed-in user info.
          //var user = result.user;
        }).catch((error) => {
          console.log('Something is wrong:', error.message);
          return false;
        });
        //Đang nghiên cứu áp dụng serviceWorker
        // Có thể dùng cookie của google có sẵn trong firebase, cũng tiện lợi
        //navigator.serviceWorker.
    }
    async loginWithFacebook() {
      try {
        const res = await auth.signInWithPopup(this.facebookProvider);
        //(res success)=> get idtoken
        const idToken = await res.user.getIdToken(true);
        //set token vào cookie
        this.setCookieToken(idToken);
        this._token = idToken;
        this._isLogin = true;
        return true;
      } catch (error) {
        console.log('Something is wrong:', error.message);
        return false;
      }
    }
    //đăng nhập có ghi nhớ tài khoản
    //khi dùng hàm này thì khi đóng web thì mọi trạng thái đăng nhập bị mất
    persistenceAccount(email, password){
      auth.setPersistence(authProvider.Auth.Persistence.SESSION)
        .then(() => {
          // New sign-in will be persisted with session persistence.
          return this.loginFirebase(email, password, null);
        })
        .catch((error) => {
          console.log('Response create User Fail with ' + error);
          return null;
        });
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
    async createUser(email: string, password: string, responseLogin) {
      try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        console.log('Response create New User', res);
        //Trở về trang login, truyền vào 1 Redirect về trang chủ và show login popup
        responseLogin();
        return res.user.uid;
      } catch (err) {
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