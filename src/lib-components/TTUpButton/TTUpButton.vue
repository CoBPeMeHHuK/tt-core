<template>
  <VFadeTransition>
    <div
      v-if="isVisibleBtn"
      class="up-button d-inline-flex align-center flex-column"
      @scroll.passive="handleScroll"
    >
      <TTBtn
        fab
        color="tt-light-mono-0"
        elevation="1"
        large
        class="mb-2"
        @click="scrollUp"
      >
        <VIcon size="19">
          $arrowToTop
        </VIcon>
      </TTBtn>

      <span class="tt-text-footnote tt-light-mono-46--text">{{ $t('UpButton.up') }}</span>
    </div>
  </VFadeTransition>
</template>

<script>
export default {
  name: 'TTUpButton',
  props: {
    visibleHeight: {
      type: Number,
      default: 150,
    },
  },
  data() {
    return {
      isVisibleBtn: false,
    };
  },
  computed: {

  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandle); // привязываем событие прокрутки страницы
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandle); // удаляем событие прокрутки страницы
  },
  methods: {
    scrollHandle(e) {
      const top = e.srcElement.scrollingElement.scrollTop; // Получить высоту прокрутки страницы
      this.isVisibleBtn = top > this.visibleHeight;
    },
    scrollUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.up-button {
  position:fixed;
  bottom:20px;
}
</style>
