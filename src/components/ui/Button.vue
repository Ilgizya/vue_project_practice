<template>
  <button class="button">
    +
  </button>
</template>

<script>
// import {ref} from 'vue'

export default {
  name: 'ButtonUI',
  components: {
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.button{
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  color: var(--bg-color-text);
  width: 30px;
  height: 30px;
  border: 2px solid var(--bg-color-text);
  background-color: var(--bg-color);
  border-radius: 50%;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
}
</style>
