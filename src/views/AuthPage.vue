<template>
  <div class="main">
    <form @submit.prevent class="form" action="">
      <!-- <router-link to="/register" class="register__link">Зарегистрироваться</router-link> -->
      <span class="form__toggle"
      @click="toggleForm"
      >
        {{ toggleName }}
      </span>
      <h2 class="form__title"> {{ title }}</h2>

      <div class="input">
        <input
         type="text"
         placeholder="Логин"
         v-model="loginValue"
         class="form__input"
         >
        <input
         type="password"
         placeholder="Пароль"
         v-model="passwordValue"
         class="form__input"
         >
      </div>

      <div class="checkbox__wrapper" v-if="!isAuthToggle">
        <input type="checkbox" id="checkbox" class="auth__checkbox" v-model="checkValue">
        <label for="checkbox" class="checkbox__label">Я согласен получать обновления на почту</label>
      </div>
      <BigButton
      :bigButtonTitle="buttonName"
      buttonAdd class="auth__button"
      @click="clickForm"/>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import BigButton from '@/components/ui/BigButton.vue'

export default {
  name: 'AuthPage',
  components: {
    BigButton
  },
  props: {
  },
  setup () {
    const router = useRouter()

    const title = ref('вход')
    const toggleName = ref('Зарегистрироваться')
    const buttonName = ref('Войти')
    const isAuthToggle = ref(true)
    const loginValue = ref('')
    const passwordValue = ref('')
    const checkValue = ref(false)

    const toggleForm = () => {
      if (isAuthToggle.value) {
        title.value = 'Регистрация'
        toggleName.value = 'Авторизоваться'
        buttonName.value = 'Зарегистрироваться'
      } else {
        title.value = 'Вход'
        toggleName.value = 'Зарегистрироваться'
        buttonName.value = 'Войти'
      }

      isAuthToggle.value = !isAuthToggle.value
    }

    const clickForm = () => {
      if (isAuthToggle.value) {
        authorization()
      } else {
        registration()
      }
      // валидация если все прошло, то переписать ключ локалстор, редирект главная страница
      // localStorage.setItem('isAuth', JSON.stringify(true))
      // router.push('/')
    }

    const authorization = () => {
      const users = JSON.parse(localStorage.getItem('users'))

      const user = users.find(item => {
        return item.login === loginValue.value
      })

      if (!user) {
        alert('Такой пользователь не существует')
      } else {
        if (user.password === passwordValue.value) {
          localStorage.isAuth = JSON.stringify(true)
          router.push('/')
        } else {
          alert('Неверный пароль')
        }
      }
    }

    const registration = () => {
      const users = JSON.parse(localStorage.getItem('users'))

      users.push({
        login: loginValue.value,
        password: passwordValue.value
      })

      localStorage.users = JSON.stringify(users)
    }

    return {
      title,
      toggleName,
      buttonName,
      loginValue,
      passwordValue,
      isAuthToggle,
      checkValue,
      toggleForm,
      clickForm
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: transparent;
  background-image: url("@/assets/images/Auth.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: var(--bg-color);
  font-family: Montserrat;
  display: flex;
  justify-content: center;
  align-items: center;
  //min-height: 100vh;
  height: 100vh;
  // width: 100%;
  // calc(400vh - 50px);
}

.form {
  background-color: var(--bg-color-text);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 3px solid var(--bg-color-hover);
  width: 460px;
  height: 340px;
  padding: 7px 20px;
  position: relative;
}
.form__toggle {
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  text-align: right;
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;

  &:hover {
    color: var(--bg-color-hover);
  }
}

.form__title {
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
.form__input {
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
