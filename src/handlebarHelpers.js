import * as Handlebars from "handlebars/runtime";

Handlebars.registerHelper('if_eq', function (a, b, opts) {
    if (a === b) {
        return opts.fn(this);
    }
    return opts.inverse(this);
});
Handlebars.registerHelper('degreeCalculator', function(opts) {
    let percentage = opts.hash.rating;
    percentage = (percentage > 100) ? 100 : (percentage < 0) ? 0 : percentage;
    return 1.8 * percentage;
});