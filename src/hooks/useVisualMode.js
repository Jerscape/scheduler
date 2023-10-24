
import { useState } from 'react';
const useVisualMode = function (initial) {

  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
     setHistory(prev => [...prev, newMode])
    //takes previous state which is an array with the current mode in it
    //uses an array function and the spread operator to create a new array with both the past and now current mode state in it
    // setHistory(prev => [...prev, new mode]);

  }

    function back() {
      //creates a new array for history based on the previous state/array
      //but slicing a vlaue off the end
      //in set mode, I guess we are getting the last index of the history state array
      //ie the previous mode
      // if(history.length >= 1){
      //   setHistory(prev => [...prev.slice(0, prev.length - 1)]);
      // }

      // if(mode !== initial){
      //   setHistory(prev => [...prev.slice(0, prev.length - 1)]);
      // }
     
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    }

    //in the below, transition is an property (I guess mode is to?, es short hand?)
    return { mode: history[history.length -1], transition, back };

  };

  export default useVisualMode;