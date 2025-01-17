import 'dotenv/config';
//import { getRPSChoices } from './game.js';
import { capitalize, InstallGlobalCommands } from './utils.js';


// Command containing options
const CHALLENGE_COMMAND = {
  name: 'challenge',
  description: 'Challenge to a match of rock paper scissors',
  options: [
    {
      type: 3,
      name: 'object',
      description: 'Pick your object',
      required: true,
      // choices: createCommandChoices(),
    },
  ],
  type: 1,
};

const BALANCE_COMMAND = {
  name: 'balance',
  description: 'Get your current balance',
  type: 1,
}



const ALL_COMMANDS = [CHALLENGE_COMMAND, BALANCE_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);