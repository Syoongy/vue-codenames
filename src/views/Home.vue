<template>
  <div class="home">
    <h1>This is the home page</h1>
    <CreateRoom/>
  </div>
</template>

<script>
// @ is an alias to /src
const CreateRoom = () => import("@/components/CreateRoom");

export default {
  name: "home",
  components: { CreateRoom }
};
</script>
