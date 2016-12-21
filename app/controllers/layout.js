import Ember from 'ember';

export default Ember.Controller.extend({
  donationController: Ember.inject.controller('donation'),
  donation: Ember.computed.reads('donationController.model')
});







