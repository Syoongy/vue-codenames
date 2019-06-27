<template>
  <div class="gametile" :class="{flip: isFlipped}">
    <div :class="type">
      <p>
        <b>{{word}}</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type", "isFlipped", "word"]
};
</script>

<style lang="scss" scoped>
.gametile {
  font-size: 1.3rem;
  width: 100%;
  height: 100%;
  div {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.death {
  color: #fff;
  background: #000;
  border-color: #000;
}
.red {
  color: #b32728;
  background: rgb(236, 170, 170);
  border-color: rgb(236, 170, 170);
}
.blue {
  color: #11779f;
  background: rgb(168, 216, 235);
  border-color: rgb(168, 216, 235);
}
.neutral {
  background: #f8fdff;
  color: #323032;
}
</style>