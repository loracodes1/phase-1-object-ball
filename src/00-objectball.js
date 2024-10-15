// Step 1: Building the gameObject function
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // Step 2: Functions to access data from gameObject
  
  // Function to return the number of points scored by a player
  function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
  }
  
  // Function to return the shoe size of a player
  function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
  }
  
  // Function to return the colors of a team
  function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
  }
  
  // Function to return an array of team names
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // Function to return the jersey numbers of players on a team
  function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
  }
  
  // Function to return the stats of a player
  function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName];
      }
    }
  }
  
  // Function to return the number of rebounds for the player with the biggest shoe size
  function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoeSize = 0;
    let rebounds = 0;
  
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (players[player].shoe > biggestShoeSize) {
          biggestShoeSize = players[player].shoe;
          rebounds = players[player].rebounds;
        }
      }
    }
    return rebounds;
  }
  
  // Bonus functions:
  
  // Function to find the player with the most points
  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = "";
  
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (players[player].points > maxPoints) {
          maxPoints = players[player].points;
          topPlayer = player;
        }
      }
    }
    return topPlayer;
  }
  
  // Function to find the team with the most points
  function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
  
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
  
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
  
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  
  // Function to find the player with the longest name
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  
  // Super Bonus:
  
  // Function to check if the player with the longest name also has the most steals
  function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let maxSteals = 0;
    let playerWithMostSteals = "";
  
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (players[player].steals > maxSteals) {
          maxSteals = players[player].steals;
          playerWithMostSteals = player;
        }
      }
    }
    return longestName === playerWithMostSteals;
  }
  