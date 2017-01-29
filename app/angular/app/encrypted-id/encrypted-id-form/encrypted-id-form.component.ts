
import {user} from '../../common/user';

export class encryptedIdForm {

	static config = {

		controller: encryptedIdForm,
		templateUrl: require('./encrypted-id-form.component.html'),
		bindings: <any> {
			getHash: '&formGetHash'
		}

	};

	user: user;

	constructor() {
		this.user = new user({});
	}

}