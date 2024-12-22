import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  joke = "Click the button to get your first dad joke!";

  @action
  async loadNewJoke() {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
      });
      const data = await response.json();
      this.set('joke', data.joke);
    } catch (error) {
      this.set('joke', "Oops! Something went wrong. Please try again.");
    }
  }
}
