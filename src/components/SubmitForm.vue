<template>
  <form @submit.prevent="formSubmit">
    <div class="form-group">
      <label class="d-block">
        <div class="mb-2">Представьтесь</div>
        <input
            type="text"
            class="form-control"
            v-model.trim="$v.name.$model"
            placeholder="Ваше имя"
            :class="{'is-invalid' :$v.name.$error, 'is-valid' :!$v.name.$invalid }"
        />
        <div class="invalid-feedback">Введите своё имя</div>
        <div class="valid-feedback">Класс</div>
      </label>
    </div>
    <div class="form-group">
      <label class="d-block">
        <div class="mb-2">Адрес доставки</div>
        <input
            type="text"
            class="form-control"
            v-model.trim="$v.address.$model"
            placeholder="Адрес"
            :class="{'is-invalid' :$v.address.$error, 'is-valid' :!$v.address.$invalid }"
        />
        <div class="invalid-feedback">Введите свой адрес</div>
        <div class="valid-feedback">Класс</div>
      </label>
    </div>
    <div class="form-group">
      <label class="d-block">
        <div class="mb-2">Телефон</div>
        <input
            type="text"
            v-mask="'#-###-###-##-##'"
            class="form-control"
            v-model.trim="$v.phone.$model"
            placeholder="7-999-999-9999"
            :class="{'is-invalid' :$v.phone.$error, 'is-valid' :!$v.phone.$invalid }"
        />
        <div class="invalid-feedback">
          Введите своё номер телефона
        </div>
        <div class="valid-feedback">Класс</div>
      </label>
    </div>
    <div class="form-group">
      <label class="d-block">
        <div class="mb-2">Эл. почта</div>
        <input
            type="email"
            class="form-control"
            v-model.trim="$v.email.$model"
            placeholder="random@ran.com"
            :class="{'is-invalid' :$v.email.$error, 'is-valid' :!$v.email.$invalid }"
        />
        <div class="invalid-feedback">Введите свой Email</div>
        <div class="valid-feedback">Класс</div>
      </label>
    </div>
    <div class="form-group">
      <label class="d-block">
        <div class="mb-2">Комментарий</div>
        <textarea
            type="text"
            class="form-control"
            v-model.trim="$v.comment.$model"
            placeholder="Введите комментарий"
            :class="{'is-invalid' :$v.comment.$error, 'is-valid' :!$v.comment.$invalid }"
        >
        </textarea>
        <div class="invalid-feedback">Введите комментарий</div>
        <div class="valid-feedback">Класс</div>
      </label>
    </div>
    <button type="submit" class="btn btn-primary" :disabled="$v.$invalid !== false">Отправить</button>
  </form>
</template>

<script>
import {required, email, minLength, maxLength} from 'vuelidate/lib/validators'
import axios from "axios";

export default {
  name: "SubmitForm",
  data() {
    return {
      name: '',
      address: '',
      phone: '',
      email: '',
      comment: '',
    }
  },
  validations: {
    name: {required, minLength: minLength(1)},
    address: {required, minLength: minLength(1)},
    phone: {required, minLength: minLength(15), maxLength: maxLength(15)},
    email: {required, email},
    comment: {required, minLength: minLength(1)}
  },
  methods: {
    async formSubmit() {
      await axios
          .post("https://vue-study.skillbox.cc/api/orders?userAccessKey=%2Fapi%2Fusers%2FaccessKey", {
            name: this.name,
            address: this.address,
            phone: this.phone,
            email: this.email,
            comment: this.comment
          })
            this.name = ''
            this.address = ''
            this.phone = ''
            this.email = ''
            this.comment = ''
    },
  }
}
</script>

<style scoped>

</style>