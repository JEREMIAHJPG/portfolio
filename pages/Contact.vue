<template>
    <v-container class="py-10">
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="pa-6 rounded-xl elevation-4">
            <v-card-title class="text-h5 mb-4">Contact Me</v-card-title>
            <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
              <v-text-field
                v-model="form.name"
                label="Full Name"
                :rules="[rules.required]"
                outlined
                dense
                required
              />
              <v-text-field
                v-model="form.email"
                label="Email Address"
                :rules="[rules.required, rules.email]"
                outlined
                dense
                required
              />
              <v-text-field
                v-model="form.subject"
                label="Subject"
                :rules="[rules.required]"
                outlined
                dense
                required
              />
              <v-textarea
                v-model="form.message"
                label="Your Message"
                :rules="[rules.required]"
                outlined
                rows="5"
                required
              />
              <v-btn type="submit" color="primary" :loading="loading" class="mt-4" block>
                Send Message
              </v-btn>
            </v-form>
          </v-card>
          <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="3000">
            {{ snackbarText }}
          </v-snackbar>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const valid = ref(false)
  const loading = ref(false)
  const snackbar = ref(false)
  const snackbarText = ref('')
  const snackbarColor = ref('success')
  
  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const rules = {
    required: v => !!v || 'This field is required',
    email: v => /.+@.+\..+/.test(v) || 'Email must be valid'
  }
  
  const submitForm = async () => {
    if (!valid.value) return
  
    loading.value = true
  
    try {
      await $fetch('/api/contact-email', {
        method: 'POST',
        body: form.value
      })
  
      snackbarColor.value = 'success'
      snackbarText.value = 'Message sent successfully!'
      form.value = { name: '', email: '', subject: '', message: '' }
    } catch (err) {
      snackbarColor.value = 'error'
      snackbarText.value = 'Failed to send message. Try again.'
    } finally {
      snackbar.value = true
      loading.value = false
    }
  }
  </script>
  