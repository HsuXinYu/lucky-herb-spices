<template>
  <nav
    class="d-flex justify-content-center"
    aria-label="Page navigation example"
  >
    <ul class="pagination">
      <li
        class="page-item"
        :class="{ disabled: pagination.current_page === 1 }"
      >
        <a
          class="page-link"
          @click.prevent="getPages(pagination.current_page - 1)"
          >Previous</a
        >
      </li>
      <li class="page-item" v-for="page in pagination.total_pages" :key="page">
        <a class="page-link" @click="getPages(page)">{{ page }}</a>
      </li>
      <li
        class="page-item"
        :class="{
          disabled: pagination.current_page === pagination.total_pages,
        }"
      >
        <a
          class="page-link"
          @click.prevent="getPages(pagination.current_page + 1)"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pagination', 'view'],
  data() {
    return {};
  },
  methods: {
    getPages(page) {
      if (this.view === 'product') {
        this.$emit('get-product', page);
      } else if (this.view === 'order') {
        this.$emit('get-order', page);
      } else if (this.view === 'coupon') {
        this.$emit('get-coupon', page);
      }
    },
  },
};
</script>
