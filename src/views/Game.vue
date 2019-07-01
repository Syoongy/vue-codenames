<template>
  <div class="game">
    <div id="gameboardwrapper">
      <GameBoard/>
    </div>
  </div>
</template>

<script>
const GameBoard = () => import("@/components/GameBoard");
export default {
  components: { GameBoard }
};
</script>

<style lang="scss" scoped>
#gameboardwrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>