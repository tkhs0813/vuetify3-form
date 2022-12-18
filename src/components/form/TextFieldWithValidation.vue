<script lang="ts" setup>
import { defineProps, toRef } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    requird: true,
  },
  type: {
    type: String,
    requird: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const { value, errors } = useField(
  toRef(props, "name").value as string,
  undefined
);
</script>

<template>
  <v-text-field
    v-model="value"
    :label="label"
    :error-messages="errors"
    :type="type"
    variant="outlined"
  />
</template>
