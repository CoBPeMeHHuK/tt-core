<template>
  <VRow>
    <VCol>
      <label
        class="d-inline-flex align-center flex-column"
        style="position: fixed"
      >
        <TTBtn
          fab
          color="tt-light-mono-0"
          elevation="1"
          large
          class="mb-2"
          :data-test-label="dataTestLabel"
          @click="() => ($router.go(-1))"
          v-on="$listeners"
        >
          <VIcon size="19">$arrowLeft</VIcon>
        </TTBtn>

        <span class="tt-text-footnote tt-light-mono-46--text">Назад</span>
      </label>
    </VCol>
  </VRow>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { IUser } from '../../types'

export default {
  name: 'TTBackButton',
  props: {
    dataTestLabel: {
      type: String,
      default: 'button-back',
    },
    user: {
      type: Object as PropType<IUser>,
      default: () => {}
    }
  },
};
</script>
