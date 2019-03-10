import _ from 'lodash';
import { checkHumanThreeInARow } from './difficultyLevelOne';
import { checkHumanThreeInARowEmpty } from './difficultyLevelTwo';

export const turnGenerator = (board, difficulty) => {
  let potentialTurns;
  switch(difficulty) {
    case 'easy':
      potentialTurns = checkHumanThreeInARow(board);
      break;
    case 'medium':
      potentialTurns = checkHumanThreeInARow(board).concat(checkHumanThreeInARowEmpty(board));
      break;
    default:
      return;
  }
  return pickCellForTurn(potentialTurns);
}

// selects cell with highest count among turns with higher priority
const pickCellForTurn = (potentialTurns) => {
  // find max count (length) of the line
  const maxCount = _.maxBy(potentialTurns, 'count').count;
  // find max priority of the line
  const maxPriority = _.maxBy(potentialTurns, 'priority').priority;
  if (isPriorityDiffer(potentialTurns)) {
    // trying to find maxcount and max priority
    let turn = potentialTurns.filter(el => el.count === maxCount && el.priority === maxPriority)[0];
    // no turn with max count and max priority
    if (!turn) {
      turn = potentialTurns.filter(el => el.count === maxCount && el.priority === maxPriority - 1)[0];
    }
    // if (!turn) {
    //   turn = potentialTurns.filter(el => el.count === maxCount && el.priority === maxPriority - 2)[0];
    // }
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
