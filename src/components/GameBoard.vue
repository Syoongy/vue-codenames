<template>
  <div>
    <h1 id="turn" :class="{red: turn!=='blue'}">{{turn}}'s turn</h1>
    <div id="gameboard">
      <GameTile
        :type="tile.type"
        :is-flipped="tile.flipped"
        :word="tile.word"
        :index="index"
        v-for="(tile, index) in tileArray"
        :key="index"
        @click="flipTile"
      />
    </div>
  </div>
</template>

<script>
import wordsArray from "@/assets/defaultwords.json";
const GameTile = () => import("./GameTile");
export default {
  components: { GameTile },
  data() {
    return {
      turn: "",
      tileArray: [],
      playerTeam: ""
    };
  },
  mounted() {
    //Get the player's team
    this.playerTeam = "red";
    //Select 25 random words from the array
    const selectedWords = this.selectWords();
    //Assign red and blue team the words
    this.tileArray = this.initTiles(selectedWords);
    //debugging
    this.playerTeam = this.turn;
  },
  methods: {
    flipTile(tileIndex) {
      if (this.playerTeam === this.turn) {
        const flippedTile = this.tileArray[tileIndex];
        //Flip the tile for all players
        flippedTile.flipped = true;
        this.checkFlippedCorrectTile(flippedTile.type);
      }
    },
    checkFlippedCorrectTile(tileType) {
      if (tileType !== this.playerTeam) {
        if (this.turn === "red") {
          this.turn = "blue";
        } else {
          this.turn = "red";
        }
      }
    },
    selectWords() {
      const wordArray = wordsArray.val0;
      let selectedWordsArray = [];
      let foundword = "";
      //Get the 25 words
      for (let index = 0; index < 25; index++) {
        // Pick a random word from the pool
        foundword = wordArray[Math.floor(Math.random() * wordArray.length)];
        // If the word is already on the board, pick another
        while (selectedWordsArray.includes(foundword)) {
          foundword = wordArray[Math.floor(Math.random() * wordArray.length)];
        }
        selectedWordsArray.push(foundword);
      }
      return selectedWordsArray;
    },
    initTiles(selectedWords) {
      //Assign who goes first
      this.selectTeamTurn();
      const retTileArray = [];
      let changedTiles = [];
      //Select the death word
      let tileIndex = this.selectRandomTile(selectedWords.length);
      retTileArray.push({
        word: selectedWords[tileIndex],
        type: "death",
        flipped: false
      });
      changedTiles.push(selectedWords[tileIndex]);
      selectedWords.splice(tileIndex, 1);
      //Check the first team's colour
      let colour = this.turn;
      //Give the rest of the tiles a word and colour
      for (let index = 0; index < 24; index++) {
        if (changedTiles.length < 18) {
          tileIndex = this.selectRandomTile(selectedWords.length);
          while (changedTiles.includes(selectedWords[tileIndex]))
            tileIndex = this.selectRandomTile(selectedWords.length);
          retTileArray.push({
            word: selectedWords[tileIndex],
            type: colour,
            flipped: false
          });
          changedTiles.push(selectedWords[tileIndex]);
          selectedWords.splice(tileIndex, 1);
          if (colour === "blue") colour = "red";
          else colour = "blue";
        } else {
          retTileArray.push({
            word: selectedWords.pop(),
            type: "neutral",
            flipped: false
          });
        }
      }
      retTileArray.sort(() => Math.random() - 0.5);
      return retTileArray;
    },
    selectRandomTile(length) {
      return Math.floor(Math.random() * length);
    },
    selectTeamTurn() {
      let turn = "blue";
      if (Math.random() < 0.5) turn = "red";
      this.turn = turn;
    }
  }
};
</script>

<style lang="scss" scoped>
#gameboard {
  margin: auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, 11rem);
  grid-template-rows: repeat(5, 11rem);
  text-align: center;
}
#turn {
  text-transform: capitalize;
  color: #11779f;
}
.red {
  color: #b32728 !important;
}
</style>