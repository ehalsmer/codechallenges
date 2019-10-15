// Examples of uses of closures to have a function that counts the number of times it has been invoked, or toggles between on and off
// Functions with their own internal state maintained by the inner function (closure):


// write a function that counts itself.
// use a closure (an inner function along with its 'lexical environment')

function counting(){
    let count = 0;
    console.log('Count outside', count)
    return function(){
      // count here is enclosed inside the anonymous function
      console.log('Count inside', count)
      count++
      return count;
    }
  }
  
  // let instance1 = counting();
  // console.log(instance1());
  // console.log(instance1());
  // console.log(instance1());
  
  function lightSwitch(){
    let light = 'off';
    return function (){
      if (light === 'off'){
        light = 'on'
      } else {
        light = 'off'
      }
      return light;
    }
  }
  
  let lightSwitchInstance = lightSwitch();
  
  console.log(lightSwitchInstance());
  console.log(lightSwitchInstance());
  console.log(lightSwitchInstance());
  console.log(lightSwitchInstance());
  console.log(lightSwitchInstance());