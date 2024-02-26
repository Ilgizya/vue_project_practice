<template>
  <div class="main">
    <form @submit.prevent class="form" action="">

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
         <span class="auth__error"> {{ errorLoginInfo }} </span>
        <input
         type="password"
         placeholder="Пароль"
         v-model="passwordValue"
         class="form__input"
         >
         <span class="auth__error"> {{ errorPasswordInfo }} </span>

        <div class="checkbox__wrapper" v-if="!isAuthToggle">
          <input type="checkbox" id="checkbox" class="auth__checkbox" v-model="checkValue">
          <label for="checkbox" class="checkbox__label">Я согласен получать обновления на почту</label>
        </div>
      </div>

      <span v-if="isErrorUsers" class="auth__error">Логин или пароль неверен</span>

      <BigButton
        :bigButtonTitle="buttonName"
        buttonAdd class="auth__button"
        @click="clickForm"
      />
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
    const isErrorUsers = ref(false)
    const errorLoginInfo = ref('')
    const errorPasswordInfo = ref('')
    const isExistUser = ref(false)

    const toggleForm = () => {
      errorLoginInfo.value = ''
      isErrorUsers.value = false
      errorPasswordInfo.value = false

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
      if (validateRegistration() && isAuthToggle.value) {
        authorization()
      } else {
        if (validateRegistration()) {
          registration()
        }
      }
    }

    const validateRegistration = () => {

      if (isAuthToggle.value) {
        if (loginValue.value.trim().length === 0) {
          errorLoginInfo.value = 'Поле не должно быть пустым'
        }
        if (passwordValue.value.trim().length === 0) {
          errorPasswordInfo.value = 'Поле не должно быть пустым'
        }

        if (passwordValue.value.trim().length >= 1 && loginValue.value.trim().length >= 1) {
          errorLoginInfo.value = ''
          errorPasswordInfo.value = ''
          return true
        }
      } else {
        if (loginValue.value.trim().length === 0) {
          errorLoginInfo.value = 'Поле не должно быть пустым'
        }

        if (passwordValue.value.trim().length === 0) {
          errorPasswordInfo.value = 'Поле не должно быть пустым'
        }

        if (loginValue.value.trim().length < 4 && loginValue.value.trim().length >= 1) {
          errorLoginInfo.value = 'Логин должен содержать не менее 4 символов'
        }

        if (passwordValue.value.trim().length < 4 && passwordValue.value.trim().length >= 1) {
          errorPasswordInfo.value = 'Пароль должен содержать не менее 4 символов'
        }

        if (passwordValue.value.trim().length >= 4 && loginValue.value.trim().length >= 4) {
          errorLoginInfo.value = ''
          errorPasswordInfo.value = ''
          return true
        }

      }
    }

    const registration = () => {
      const users = JSON.parse(localStorage.getItem('users'))

      const isExistUser = users.some (item => {
        return item.login === loginValue.value
      })
      if (!isExistUser) {
        users.push({
          login: loginValue.value,
          password: passwordValue.value
        })

        localStorage.users = JSON.stringify(users)
        isAuth.value = ''
      } else {
        errorLoginInfo.value = 'Пользователь с таким логином существует'
      }
        
    }

    const authorization = () => {

      const users = JSON.parse(localStorage.getItem('users'))

      const user = users.find(item => {
        return item.login === loginValue.value
      })

      if (user?.login === loginValue.value && user?.password === passwordValue.value) {
        localStorage.isAuth = JSON.stringify(true)
        router.push('/')
      } else {
        isErrorUsers.value = true
      }
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
      clickForm,
      isErrorUsers,
      errorLoginInfo,
      errorPasswordInfo,
      isExistUser
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
  width: 500px;
  // height: 340px;
  padding: 35px 20px;
  position: relative;
  // justify-content: space-around;
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
  border-radius: 61px;
  border: 2px solid var(--bg-color-hover);
  // width: 100%;
  width: calc(100% - 40px);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  padding: 10px 18px;
}
.checkbox__wrapper {
  display: flex;
  align-items: center;
  // margin-top: 15px;
}

.auth__checkbox {
  box-sizing: border-box;
  border: 1px solid rgb(213, 140, 81);
  margin-right: 8px;
}

.checkbox__label {
  color: rgb(48, 20, 17);
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  text-align: left;
}

.auth__error {
  color: rgb(255, 11, 11);
  font-size: 8px;
  font-weight: 300;
  line-height: 10px;
  text-align: center;
  align-self: center;
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
