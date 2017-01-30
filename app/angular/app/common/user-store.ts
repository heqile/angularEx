
import {user} from './user'

export class userStore {

	constructor(private $http) {
		'ngInject';
	}

	_user: user;

	getHash(loginId: string) {
		var httpresonse;
		httpresonse = this.$http.get('http://localhost:8000/tmp/api.html').then(response => response.data);

		this._user = new user({loginId: '22222', encryptedId: httpresonse});
		// this._user = new user({loginId: loginId, encryptedId: 'testHash'});
	}

	user() {
		return this._user;
	}

}