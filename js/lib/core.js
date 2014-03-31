// declared a global module named WMS
// defining the main object with self-invoking function using Singleton and Module Pattern with Encapsulation
if (typeof (PORT) === "undefined") {
    PORT = {};
}

var PORT = (function(){

    // strict mode eliminates some JavaScript silent errors by changing them to throw errors
    // strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations
    'use strict';

    var aug = {};

    // we want private members so we improving Singleton Pattern with a Module Pattern
    return {

        version: {

            num: "1.6",
            me : '@leolaneseltd',
            _TheseIsTheCodeWhatAreYouLookingFor: 'Yo! interested on my code?...cool!...drop a line at @leolaneseltd',

            getNum: function(){
                return( this.num );
            },

            getName: function(){
                return( this.me );
            }



        },

        // Douglas Crockford default-common class
        clone: function(o) {
            function F(){}
            F.prototype = o;
            return new F();
        }

    };

}(PORT));
