
import {user} from '../common/user'

export class encryptedId {
	
	static config = {
		
		templateUrl: require('./encrypted-id.component.html'),
		controller: encryptedId

	};

	constructor(private userStore) {
		'ngInject';
	}

	getHash(login: string) {
		this.userStore.getHash(login);
	}

	getUser() {
		return this.userStore.user();
	}

}