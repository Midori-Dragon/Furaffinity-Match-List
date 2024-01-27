# Furaffinity Match List

Helper Script to create a Matchlist for your custom Furaffinitiy Script. Also see this Script on Greasy Fork as [Furaffinity-Match-List](https://greasyfork.org/de/scripts/485827-furaffinity-match-list)

#### Table of Contents

- [How to use](#how-to-use)
- [Documentation](#documentation)

## How to use

- `@require` this script with the following url "https://raw.githubusercontent.com/Midori-Dragon/Furaffinity-Match-List/main/Furaffinity-Match-List.js"
  <br>
- Create a new MatchList:
  ```javascript
  const matchlist = new MatchList(customSettings); //customSettings is optional
  ```
  See [CustomSettings](https://github.com/Midori-Dragon/Furaffinity-Custom-Settings) for more info
  <br>
- Add Matches to the list with either `addMatch` or `matches.push`:
  ```javascript
  matchlist.addMatch("part/of-url");
  matchlist.matches.push("part/of-url");
  ```
  See [MatchList](#matchlist) for more info
  <br>
- Check for matches:
  ```javascript
  if (matchlist.hasMatch())
    doSomething();
  ```

## Documentation

### MatchList

The MatchList class contains following Properties:

- `matches` - The array of matches for which to check
- `runInIFrame` - Wethere your Script is allowed to run in an IFrame
- `customSettings` - The CustomSettings which to display if your Script is allowed to run _(See [CustomSettings](https://github.com/Midori-Dragon/Furaffinity-Custom-Settings))_

It has following functions:

- `addMatch(match)` - Adds a new match to the list
- `removeMatch()` - Removes the last match from the list
- `hasMatch()` - Checks if the list contains a match
- `getMatch()` - Returns a Match if there is one
