import {SCRIPTS} from './scripts.js';

const dominantWritingDirection = (scripts) => {
  let directions = new Map();
  for (const script of scripts) {
    let count = directions.get(script.direction) || 0;
    directions.set(script.direction, count + 1);
  }

  let dominantDirection = Array.from(directions).reduce((prev, current) => {
    return (current[1] > prev[1]) ? current : prev;
  });

  console.log("dominant direction is: " + dominantDirection[0]);
}

dominantWritingDirection(SCRIPTS);

