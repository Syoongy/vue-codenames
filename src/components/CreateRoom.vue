<template>
  <div id="createRoom">
    <MaterialInput label-name="Nickname" v-model="name"/>
    <MaterialInput label-name="Room" v-model="room"/>
    <MaterialInput label-name="Password" is-password="true" v-model="password"/>
  </div>
</template>

<script>
const MaterialInput = () => import("./MaterialInput");
export default {
  components: { MaterialInput },
  data() {
    return {
      name: "",
      room: "",
      password: ""
    };
  }
};
</script>

<style scoped lang="scss">
#createRoom {
  background-color: #fdfffc;
  width: 20%;
  margin: auto;
  padding: 3rem;
  border-radius: 10px;
}
</style>