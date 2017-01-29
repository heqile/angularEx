/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */


import * as angular from 'angular';
import {encryptedIdModule} from './encrypted-id/encrypted-id.module';

export const appModule = angular.module('app', [
    encryptedIdModule.name
]);
