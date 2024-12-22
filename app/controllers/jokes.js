import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class JokesController extends Controller {
  @action
  async loadNewJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    });
    const jokeData = await response.json();
    this.set('model', jokeData); // Update the model with the new joke
  }
}
