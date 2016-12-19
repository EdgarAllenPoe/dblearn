import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        createDonation() {
            var donation = this.store.createRecord("donation", {
                name: this.get('name'),
                mobile: this.get('mobile'),
                email: this.get('email'),
                tdate: this.get('tdate'),
                amount: this.get('amount'),
            });

            donation.save();

            this.set('name', '');
            this.set('mobile', '');
            this.set('email', '');
            this.set('tdate', '');
            this.set('amount', '');
        },

        deleteDonation(donation) {
            donation.deleteRecord();
            donation.save();
        },
    },

    donationTotal: Ember.computed('model.@each.amount', function() {

        return this.get('model').reduce(function(acc, value) {
            return acc + value.get('amount');
        }, 0);
    })

});
