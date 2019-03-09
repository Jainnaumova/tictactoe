import _ from 'lodash';
import { checkHumanThreeInARow } from './difficultyLevelOne';
import { checkHumanThreeInARowEmpty } from './difficultyLevelTwo';

export const turnGenerator = (board, difficalty = 1) => {
  let potentialTurns;
  switch(difficalty) {
    case 0:
      potentialTurns = checkHumanThreeInARow(board);
      break;
    case 1:
      potentialTurns = checkHumanThreeInARow(board).concat(checkHumanThreeInARowEmpty(board));
      break;
    default:
      return;
  }
  return pickCellForTurn(potentialTurns);
}

// selects cell with highest count among turns with higher priority
const pickCellForTurn = (potentialTurns) => {
  const maxCount = _.maxBy(potentialTurns, 'count').count;
  const maxPriority = _.maxBy(potentialTurns, 'priority').priority;
  console.log("POTENTIAL: ", potentialTurns);
  if (isPriorityDiffer(potentialTurns)) {
    let turn = potentialTurns.filter(el => el.count === maxCount && el.priority === maxPriority)[0];
    if (!turn) {
      turn = potentialTurns.filter(el => el.count === maxCount && el.priority === maxPriority - 1)[0];
    }
    if (!turn) {
      turn = potentialTurns.filter(el => el.count === maxCount && el.priority === maxPriority - 2)[0];
    }
    return turn.cell;
  } else {
    return potentialTurns.filter(el => el.count === maxCount)[0].cell;
  }
}

// checks if potential turns have different priority
const isPriorityDiffer = (turns) => {
  const priorities = [];
  for (let el in turns) {
    if (!priorities.includes(el.priority)) {
      priorities.push(el.priority);
    }
  }
  return priorities.length > 1 ? true : false;
}
