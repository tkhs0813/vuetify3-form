<script setup lang="ts">
import { ref } from "vue";
import { Form } from "vee-validate";
import * as yup from "yup";

import TextFieldWithValidation from "@/components/form/TextFieldWithValidation.vue";
import { RouterLink } from "vue-router";

const checkbox = ref(false);
const schema = yup.object({
  email: yup.string().email().required().label("email"),
  password: yup.string().min(6).required().label("password"),
});

function onSubmit(values: any) {
  console.log("Submitted with", values);
}
</script>

<template>
  <Form as="v-form" :validation-schema="schema" @submit="onSubmit">
    <TextFieldWithValidation
      name="email"
      label="Email"
      type="email"
      class="mt-4"
    />
    <TextFieldWithValidation
      name="password"
      label="Password"
      type="password"
      class="mt-4"
    />
    <div class="d-flex align-center mb-4 mb-sm-0">
      <v-checkbox
        v-model="checkbox"
        label="Remember me?"
        hide-details
      ></v-checkbox>
      <div class="ml-auto">
        <RouterLink to="/" class="text-primary text-decoration-none"
          >ホームに戻る</RouterLink
        >
      </div>
    </div>
    <v-btn color="secondary" block class="mr-4" type="submit">Sign In</v-btn>
  </Form>

  <div class="text-center mt-6">
    <div class="d-flex align-center justify-center gap-2">
      <v-btn icon color="secondary" class="mr-4">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon color="primary">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </div>
  </div>
</template>
