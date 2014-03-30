define("two", function(ko) {

    console.log('loading Module two.js')

    if (typeof (PORT) === "undefined") {
        PORT = {};
    }

    return {

        // Augmentation will create the module if it does not already exist
        PORT: (function (aug) {
            'use strict';

            aug.propagation = function(e){
                e.preventDefault();
                e.stopPropagation();
            };

            aug._storage = function() {
                try {
                    return 'localStorage' in window && window['localStorage'] !== null;
                } catch (e) {
                    return false;
                }
            };

            aug._matchMediaCapable = function() {
                return (typeof window.matchMedia === 'function');
            };

            aug.svgCapable = function() {
                var docElem = "document.documentElement.className";
                return (document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") || window.SVGSVGElement)? docElem += ' svg' : docElem += ' no-svg';
            };

            aug.online = function(){
                if (navigator.onLine || navigator.connection || window.clientInformation.onLine) return true;
            };

            aug.jsActivated = function(){
                document.documentElement.className = document.documentElement.className.replace("no-js","js");
            };

            aug.isRetina = function() {
                console.log("testing retina");
                window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches)
            };

            aug.isJsonString = function(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            };

        }(PORT)) // Loose Augmentation

    }

});

//var t0 = window.performance.now();
window.PORT.init();
//var t1 = window.performance.now();
//console.log("Call to init() took: " + (t1 - t0) + " ms.");

// not call it twice
// window.PORT.init();

function Port() {
    // Constructor
}
//console.log(Port.prototype);

var t0 = window.performance.now();
// Using new portfolio() is not an option,
// since it isn't a constructor. Is an Object!
Port.prototype = PORT;

// using Objects then
// create a new clone like object
var n = PORT.clone(PORT);
//var t1 = window.performance.now();
//console.log("Create clone object took: " + (t1 - t0) + " ms.");
//console.log('clone: ', n);

//console.log('General performance timing: ',  performance.timing)

//console.log(n.version.getName(), ' - Portfolio: ', n.version.getNum(),'v.');


