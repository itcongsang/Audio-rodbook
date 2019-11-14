import { Observable } from 'rxjs';
// import * as Cookies from 'js-cookie';
import { mergeMap, filter } from 'rxjs/operators';
import { authState } from 'rxfire/auth';
import { initializeApp } from 'firebase';
import 'firebase/auth';
import { auth } from './firebase.service';
import firebase from 'firebase';
import Cookies from 'universal-cookie';
import { User } from 'models/user';

const TOKEN_KEY = 'rodbook_access_token';
const CURRENT_USER_KEY = 'current_user_key';
// const app = db.app;
// const auth = app.auth();
const cookies = new Cookies();
// const userData: Observable<firebase.User> = authState(this.auth);
// user: User;

const _isLogin = false;
const _token = '';

const loginFirebase = async(email: string, password: string, redirect) => {
    try {
        const res = await auth.signInWithEmailAndPassword(
            email,
            password
        );
        const idToken = await res.user.getIdToken(true);

        setCookieToken(idToken);

        this.user = new User({
            uid: res.user.uid,
            email: res.user.email,
            displayName: res.user.displayName,
            photoURL: res.user.photoURL,
            emailVerified: res.user.emailVerified
        });

        this._token = idToken;
        this._isLogin = true;
        redirect();

        return true;
    } catch (error) {
        console.log('Something is wrong:', error.message);
        return false;
    }
}
function setCookieToken(token: string) {
    const dateExpires: Date = new Date(
        new Date().getTime() + 360 * 1000 * 60 * 60 * 24
    );
    this.cookies.set(TOKEN_KEY, token, {
        path: '/',
        domain: this.getDomain(),
        expires: dateExpires
    });
}
function loadToken() {
    const token = this.cookies.get(TOKEN_KEY) || '';
    //const token = 'daiHotBoyCode';
    if (token) {
        this._token = token;
        this._isLogin = true;
    } else {
        this._token = '';
        this._isLogin = false;
    }
}

function getDomain() {
    const domain = document.domain;
    const domainParts = domain.split('.');
    if (domainParts.length === 1) {
        return domain;
    } else {
        domainParts.shift();
        return domainParts.join('.');
    }
}
function isLogin(): boolean {
    return this._isLogin;
}

function token(): string {
    return this._token;
}
function createAcc() {
    //rodbooks.com@gmail.com    khFD5yU1zNccJuB7oipl6NrOFR42
    firebase.auth().createUserWithEmailAndPassword(
        'rodbooks@gmail.com',
        'Rodbooks@114'
    );
}
const createUser = async(email: string, password: string) => {
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('Response create New User', res);
        return res.user.uid;
    }
    catch (err) {
        console.log('Response create User Fail');
        return null;
    }
}
function Logout() {
    this.cookies.remove(this.TOKEN_KEY);
    this._token = '';
    this._isLogin = false;
    firebase.auth().signOut();
}
function InitLogin() {
        loadToken();
        const userData: Observable<firebase.User> = authState(auth);
        authState(auth)
            .pipe(
                filter(user => user !== null),
                mergeMap(
                    user => user.getIdToken(),
                    (user, idToken) => ({ user, idToken })
                )
            )
            .subscribe(({ user, idToken }) => {
                if (user) {
                    this.user = new User({
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        emailVerified: user.emailVerified
                    });
                    this.setCookieToken(idToken);
                    this._token = idToken;
                    this._isLogin = true;
                } else {
                }
            });
}
export { InitLogin, Logout, createUser, createAcc, loadToken, isLogin, token, loginFirebase, getDomain }
