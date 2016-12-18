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

dtotal: Ember.computed('total', function() {
    let btotal = 3991932;
    return btotal;
  })


// total: Ember.computed('donation.@each.amount', function() {
//   return this.get('donation').reduce(function(acc, value) {
//     return acc + value.get('amount');
//   }, 0);
// })

// total: Ember.computed('total', function() {
//     [1, 2, 3].reduce(function(acc, value) {return acc + value;}, 0);
// }),


// total: Ember.computed('total', function() {
//     this.store.reduce(function(acc, value) {
//     return acc + value;
// }, 0);
//   })


});



// total: Ember.computed('total', function() {
//     let dtotal = 0;
//     return dtotal;
//   })