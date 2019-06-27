<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>&nbsp;|
      <router-link to="/game">Game</router-link>
    </div>
    <router-view id="content"/>
  </div>
</template>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 16px;
  background-color: #011627;
  color: #fdfffc;
}
#app {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  text-align: center;
  height: 100%;
}
#nav {
  grid-column: 3/5;
  padding: 1rem;
  a {
    font-weight: bold;
    color: #fdfffc;
    &.router-link-exact-active {
      color: #41ead4;
    }
  }
}
#content {
  grid-column: 1/7;
  grid-row: 2/7;
}
</style>
