
import {user} from './user'

export class userStore {

	constructor(private $http) {
		'ngInject';
	}

	_user: user;

	getHash(loginId: string) {
		this.$http.get('http://localhost:8000/tmp/api.html')
			.then((response) => {
				let httpResponse = response.data;
				this._user = new user({loginId: httpResponse.loginId, encryptedId: httpResponse.encryptedId});
			});
	}

	user() {
		return this._user;
	}

}