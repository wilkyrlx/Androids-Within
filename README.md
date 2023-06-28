# Androids Within
Androids Within is a social deduction game designed by Dave Wilkinson. With 19 gamemodes allowing for games of 5 to 12 players, Androids Within is a game that can be played over and over again. Although the game has an online component, it is designed to be played in person.

## How to Play
Every player should have a device with a web browser. 

The game leader should start a game by going to [https://android-game-83d73.web.app/](https://android-game-83d73.web.app/) and selecting the `create game` button. After entering the exact number of players playing the game, they will be given a room code. Afterwards, the game leader will be able to choose one of the available gamemodes.

The other players should go to the same website and select the `join game` button. They should enter the room code given to them by the game leader.

Once all players have joined, players will receive their roles and the game will begin. Keep these secret! The game leader will be able to see all roles on their device after the game has concluded. After, the game leader can choose a new gamemode and start a new game (although please note that the game must have the same group of players).

## Troubleshooting
Please report any bugs to [John Wilkinson (developer)](mailto:john_wilkinson@brown.edu) or [Dave Wilkinson (game designer)](mailto:wilkdave@gmail.com).

## Add a new game
1. Add a new game mode to `src/games/`
2. Add that game mode to `src/games/allGamemodes.json`
3. Add that game mode to `src/games/gameExports.js`
4. Add a switch case for that game mode to `src\utils\gamemodeSelector.ts`

## Deploy Notes
Last deployed: 2023-06-27
Last database cleanse: 2023-06-01