<template>
  <div class="group">
    <input
      type="password"
      @input="handleInput($event.target.value)"
      :value="value"
      required
      v-if="isPassword"
    >
    <input type="text" @input="handleInput($event.target.value)" :value="value" required v-else>
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>{{labelName}}</label>
  </div>
</template>

<script>
export default {
  props: ["isPassword", "labelName", "value"],
  data() {
    return {
      content: this.value
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.group {
  margin: auto;
  width: 300px;
  position: relative;
  margin-bottom: 2rem;
}
input {
  font-size: 16px;
  padding: 10px 0px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
  &:focus {
    border-bottom: 1px transparent;
    outline: none;
  }
}

/* LABEL ======================================= */
label {
  color: #999;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #b91372;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 300px;

  &:before,
  &:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #b91372;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position: absolute;
  height: 60%;
  width: 100%;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.2s ease;
  -moz-animation: inputHighlighter 0.2s ease;
  animation: inputHighlighter 0.2s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from {
    background: #b91372;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #b91372;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #b91372;
  }
  to {
    width: 0;
    background: transparent;
  }
}
</style>