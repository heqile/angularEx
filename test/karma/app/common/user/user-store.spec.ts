
import {userStore} from '../../../../../app/angular/app/common/user-store';
import {user} from '../../../../../app/angular/app/common/user';
import {encryptedIdModule} from '../../../../../app/angular/app/encrypted-id/encrypted-id.module';

describe('UserStore', () => {

    it('should return user', () => {

        angular.mock.module(encryptedIdModule.name);
        inject((userStore) => {this.userStore = userStore});

        let userStore: userStore = this.userStore;
        userStore._user = new user({loginId: 'testLogin', encryptedId: 'testEncryptedId'});

        expect(userStore.user().loginId).toBe('testLogin');
        expect(userStore.user().encryptedId).toBe('testEncryptedId');
    });
});
