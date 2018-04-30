import angular from 'angular';
import appPreferences from './app-preferences.component';
import appPreferencesUsers from './components/app-preferences-users';
import appPreferencesUsersAddEditUser from './components/app-preferences-users/components/app-preferences-users-add-edit-user';
import PreferencesService from './services/preferences-service';

export default angular.module('hepicApp.appPreferences', [])
  .config(function($stateProvider, ROUTER) {
    'ngInject';

    $stateProvider
      .state(ROUTER.PREFERENCES.NAME, {
        url: ROUTER.PREFERENCES.PATH,
        component: 'appPreferences',
      })
      .state(ROUTER.PREFERENCES_USER_EDITOR.NAME, {
        url: ROUTER.PREFERENCES_USER_EDITOR.PATH,
        component: 'appPreferencesUsers',
      })
      .state(ROUTER.PREFERENCES_MOCK_EDITOR.NAME, {
        url: ROUTER.PREFERENCES_MOCK_EDITOR.PATH,
        component: 'appPreferencesMock',
      });
  })
  .factory('PreferencesService', /* @ngInject */ (UserService) => new PreferencesService(UserService))
  .component('appPreferencesUsers', appPreferencesUsers)
  .component('appPreferencesUsersAddEditUser', appPreferencesUsersAddEditUser)
  .component('appPreferences', appPreferences);
