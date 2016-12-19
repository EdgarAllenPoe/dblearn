import {
	//currency,
	number,
	currency,
} from "accounting/settings";

export default {
	name: 'accounting.js',
	initialize: function() {
		currency.symbol = "Gs.";
		number.decimal = ",";
		number.thousand = ".";
		number.precision = 0;
	}
};