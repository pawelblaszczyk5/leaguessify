# Leaguessify

Leaguessify is a League of Legends related game where your analytics skills are put to the test. How much do you need to know about the game to guess the result? And for how long you can keep the streak on?

Whether you get the highest scores with more gambling approach or you will calculate every single inch - good luck & have fun!

## Live version

You can play it online right now [here](https://leaguessify.netlify.app/)!

[![Leaguessify](readme-assets/screenshot.png 'Leaguessify screenshot')](https://leaguessify.netlify.app/)

## Technologies

![Svelte](readme-assets/svelte.jpg 'Svelte & SvelteKit') ![Typescript](readme-assets/typescript.png 'Typescript') ![Tailwind](readme-assets/tailwind.jpg 'TailwindCSS') ![Redis](readme-assets/redis.jpg 'Redis') ![Netlify](readme-assets/netlify.jpg 'Netlify')

SvelteKit - framework for building webapps with Svelte is the main thing behind all of it, I used it with Typescript. It's used for frontend and for backend part, which is compiled to serverless functions. To style it I used Tailwind CSS. Redis is cache provider to limit API queries number. Netlify is current cloud functions and hosting provider.

## Running locally

To run it locally, you firstly need to obtain a Riot API key and Redis server. Then follow these steps:

- Clone the repository
- Make sure Node and NPM are installed
- Run `npm ci`
- Create `.env` file according to interface in `src/env.d.ts`
- Run `npm dev`

## Contributing

Feel free to open issue or create pull requests. I am always open for any feedback, thanks in advance.

## License

[MIT](https://choosealicense.com/licenses/mit/)
