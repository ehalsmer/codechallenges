this.color = 'red'

var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("In logColor - this.color: " + this.color); // Blue, this refers to object we're in, still the myCar object
        console.log("In logColor - self.color: " + self.color); // Blue, because it's below where self is initialized, self = this
        (function() {
            console.log("In IIFE - this.color: " + this.color); // UNDEFINED (or red from global scope) b/c we're inside the scope of a new function which isn't a method on the myCar object. 
            // This has lost its reference to myCar, and only references the global object. 
            // Watch out using this inside nested functions! You're likely to lose the object you were trying to reference.
            console.log("In IIFE - self.color: " + self.color); // BLUE
        })();
    }
};
 
myCar.logColor();