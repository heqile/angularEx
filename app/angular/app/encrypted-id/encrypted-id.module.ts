
import {encryptedIdForm} from './encrypted-id-form/encrypted-id-form.component';
import {encryptedIdDisplay} from './encrypted-id-display/encrypted-id-display.component';
import {userModule} from '../common/user.module';
import {encryptedId} from './encrypted-id.component';


export const encryptedIdModule = angular.module('app.encryptedIdApp', [userModule.name]);

encryptedIdModule.component('encryptedId', encryptedId.config);
encryptedIdModule.component('encryptedIdForm', encryptedIdForm.config);
encryptedIdModule.component('encryptedIdDisplay',encryptedIdDisplay.config);