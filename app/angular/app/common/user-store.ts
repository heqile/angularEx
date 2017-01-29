
import {user} from './user'

export class userStore {

	constructor() {
		this._user = new user({loginId: 'sdfsdf', encryptedId: 'testHashsdfsdf'});
	}

	_user: user;

	getHash(loginId: string) {
		this._user = new user({loginId: loginId, encryptedId: 'testHash'});
	}

	user() {
		return this._user;
	}

}