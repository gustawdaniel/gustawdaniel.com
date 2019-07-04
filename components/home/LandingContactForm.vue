<template>
  <form class="bg-white rounded pb_form_v1" @submit.prevent="submit">
    <h2 class="mb-4 mt-0 text-center">
      {{ header }}
    </h2>
    <div class="form-group">
      <label class="w-100">
        <input v-model="name" required type="text" class="form-control pb_height-50 reverse" placeholder="Your name">
      </label>
    </div>
    <div class="form-group">
      <label class="w-100">
        <input v-model="email" required type="text" class="form-control pb_height-50 reverse" placeholder="Email">
      </label>
    </div>
    <div class="form-group">
      <label class="w-100">
        <textarea
          v-model="description"
          required
          class="form-control pb_height-150 reverse"
          rows="2"
          placeholder="Describe your project"></textarea>
      </label>
    </div>
    <div class="form-group">
      <input
        :disabled="disabled"
        type="submit"
        class="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue"
        :value="submitValue">
    </div>
    <p v-if="error" class="text-center text-danger">{{ error }}</p>
    <p v-if="disabled && !error" class=" text-center text-success">I will respond as soon as possible.</p>
  </form>
</template>

<script>
  export default {
    name: 'LandingContactForm',
    data() {
      return {
        name: '',
        description: '',
        email: '',
        disabled: false,
        header: 'Hire me now',
        submitValue: 'Send query',
        error: ''
      }
    },
    methods: {
      submit() {
        this.disabled = true;
        this.submitValue = 'Sending...';
        this.error = '';

        const url = new URL('https://us-central1-gustawdaniel-com.cloudfunctions.net/sendMail');

        const { name, description, email } = this.$data;
        const params = { name, description, email };

        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        fetch(url).then(() => {
          this.header = 'Message Sent';
          this.submitValue = 'Thank you.';
        }).catch((err) => {
          this.submitValue = 'Send query';
          this.error = err.message;
          this.disabled = false;
        })
      }
    }
  }
</script>
