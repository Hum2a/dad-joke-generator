import Route from '@ember/routing/route';

export default class JokesRoute extends Route {
  async model() {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    });
    const jokeData = await response.json();
    return jokeData;
  }
}
