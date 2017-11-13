import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message: '',

  isMailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('message.length', 7),
  isValid: Ember.computed.and('isMessageValid', 'isMailValid'),
  isDisabled: Ember.computed.not('isValid'),


  actions: {

    messageSent() {
      alert(`Saving of the following is in progress: email address: ${this.get('emailAddress')} message: ${this.get('message')}`);
      // alert(`Saving of the following message is in progress: `);

      this.set('responseMessage', `Thank you! We got your message ${this.get('message')} for your email address: ${this.get('emailAddress')} and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
