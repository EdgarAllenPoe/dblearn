import DS from 'ember-data';

const {Model, attr} = DS;

export default Model.extend({
name: attr('string'),
mobile: attr('string'),
email: attr('string'),
tdate: attr('string'),
amount: attr('number'),
rev: attr('string'),
//donationTotal: attr('number'),


});

