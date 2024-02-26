<template>
  <button class="button">
    {{ buttonTitle }}
  </button>
</template>

<script>
// import {ref} from 'vue'

export default {
  name: 'ButtonUI',
  components: {
  },
  props: {
    buttonTitle: {
      type: String,
      default: '+'
    }
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
  color: var(--bg-color-text);
  width: 30px;
  height: 30px;
  border: 2px solid var(--bg-color-text);
  background-color: transparent;
  border-radius: 50%;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;

  &:hover {
    background-color: var(--bg-color-hover);
    border: 2px solid var(--bg-color-hover);
  }
}
</style>
