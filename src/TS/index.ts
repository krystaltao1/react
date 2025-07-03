import { Game } from './game';

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const app = () => {
  console.log(greet('TypeScript'));
  new Game().start();
};

app();
