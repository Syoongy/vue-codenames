<template>
  <div id="gameboard">
    <GameTile
      :type="tile.type"
      :is-flipped="tile.flipped"
      :word="tile.word"
      v-for="(tile, index) in tileArray"
      :key="index"
    />
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
      tileArray: []
    };
  },
  mounted() {
    //Select 25 random words from the array
    const selectedWords = this.selectWords();
    //Assign red and blue team the words
    this.tileArray = this.initTiles(selectedWords);
  },
  methods: {
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
      let tileIndex = this.selectRandomTile(selectedWords.length);
      retTileArray.push({
        word: selectedWords[tileIndex],
        type: "death",
        flipped: false
      });
      changedTiles.push(selectedWords[tileIndex]);
      selectedWords.splice(tileIndex, 1);
      let colour = this.turn;
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
</style>