
import {user} from '../../common/user'

export class encryptedIdDisplay {

	static config = {

		controller: encryptedIdDisplay,
		templateUrl: require('./encrypted-id-display.component.html'),
		bindings: <any> {

			displayUser: '&displayUser'
			
		}
	};


	constructor() {
	}

}