# Connect Four App

## Ryan Boris<ryan.boris@gmail.com>

### Brainstorming

_The bare minimum required for this application to be considered "Connect Four" is the first goal, then additional features can follow..._

#### What?

_Begin with largest perspective and decompose in order to move to smaller and smaller perspectives._
_What is needed for this game: features, data, resources...?_

- A rectangular game board.
- A pattern of circular "holes" which represent possible locations players can place a token.
- Two circular tokens that are differentiated by some property to indicate player ownership.

#### How?

_Work from largest to smaller perspectives._
_How does the game progress, how does the user interact, how do things evolve...?_

- The game must indicate a way to begin playing.
- The game must welcome a user and prompt for user information.
- The game must allow for two players, one player is the user, and the other player can be another user or the computer.
- A user is decided, at random, to make the first move.
- A move consists of a user clicking a permitted location on the game board.
- Once an approved move is made, the next player can now select a permitted location to place a token.
- Each player, alternatively, continues to place a token when it is their turn.
- The game, effectively, comes to an end if:
  - a player connects four of their tokens as four points in a line
  - all the locations are filled with no player making a connection of four tokens which ends in a draw
  - the timer elapses (maybe)
