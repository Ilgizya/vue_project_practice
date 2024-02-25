<template>
  <div class="container auth">
    <div class="auth__wrapper">
      <router-link to="/register" class="register__link">Зарегистрироваться</router-link>
      <h1 class="auth__title">Вход</h1>

      <div class="input">
        <input type="text" placeholder="Логин" class="auth__input">
        <input type="password" placeholder="Пароль" class="auth__input">
      </div>

      <div class="checkbox__wrapper">
        <input type="radio" class="auth__checkbox">
        <label class="checkbox__label">Я согласен получать обновления на почту</label>
      </div>
      <BigButton bigButtonTitle = "Войти" buttonAdd class="auth__button"/>
    </div>
  </div>
</template>

<script>
import BigButton from '@/components/ui/BigButton.vue'

export default {
  name: 'AuthPage',
  components: {
    BigButton
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.auth {
  background-color: transparent;
  background-image: url("@/assets/images/Auth.jpg");
  background-size: cover;
  background-position: auto;
  color: var(--bg-color);
  font-family: Montserrat;
  display: flex;
  justify-content: center;
  align-items: center;
  //min-height: 100vh;
  height: calc(100vh - 50px);
  width: 100%;
  // calc(400vh - 50px);
}

.auth__wrapper{
  background-color: var(--bg-color-text);
  display: flex;
  flex-wrap: wrap;
  //align-items: center;
  //justify-content: space-between;
  flex-direction: column;
  border: 1px black;
  width: 460px;
  height: 340px;
  padding: 7px 20px;
}
.register__link {
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  text-align: right;
}

.auth__title {
  font-weight: 700;
  font-size: 31px;
  line-height: 38px;
  text-align: center;
  margin-top: 15px;
  text-transform: uppercase;
}

.input {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  flex-direction: column;
  margin-top: 35px;
}
.auth__input {
  top: 468px;
  left: 510px;
  border-radius: 61px;
  border: 2px solid var(--bg-color-hover);
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  padding: 10px 18px 10px auto;
}

.checkbox__wrapper {
  top: 576px;
  left: 510px;
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.auth__checkbox {
  box-sizing: border-box;
  border: 1px solid rgb(213, 140, 81);
}

.checkbox__label {
  color: rgb(48, 20, 17);
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  text-align: left;
  margin-left: 10px;
}

.auth__button {
  width: 200px;
  top: 622px;
  left: 620px;
  align-self: center;
  padding: 12px 77px;
  margin-top: 30px;
}
</style>
