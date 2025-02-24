import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked joke = "Why don't eggs tell jokes? They'd crack up! 😄";
  @tracked isLoading = false;

  @action
  async loadNewJoke() {
    this.isLoading = true;
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
      });
      const data = await response.json();
      this.joke = data.joke;
    } catch (error) {
      this.joke = "Even dad jokes fail sometimes! Try again? 😅";
    } finally {
      this.isLoading = false;
    }
  }
}
