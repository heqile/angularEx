
import {userStore} from './user-store'

export const userModule = angular.module('app.user.module', []);

userModule.service('userStore', userStore);