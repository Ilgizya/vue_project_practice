<template>
  <button
  :class="{
    'buttonOut' : true,
    'buttonAdd' : buttonAdd
    }">
    {{ bigButtonTitle }}
  </button>
</template>

<script>
// import {ref} from 'vue'

export default {
  name: 'ButtonUI',
  components: {
  },
  props: {
    bigButtonTitle: {
      type: String,
      default: 'Выйти'
    },
    buttonAdd: {
      type: Boolean,
      default: false
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.buttonOut {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0%;
  text-align: left;
  padding: 12px 40px;

  color: var(--bg-color-hover);
  border: 2px solid var(--bg-color-hover);
  background-color: transparent; //var(--bg-color)

  &:hover {
    color: var(--bg-color);
    background-color: var(--bg-color-hover);
  }
}

.buttonAdd {
  color: var(--bg-color);
  background-color: var(--bg-color-hover);

  &:hover {
    color: var(--bg-color-hover);
    background-color: transparent;
  }
}
</style>
