<template>
  <div class="text-end mt-4">
    <button
      id="postProductBtn"
      type="button"
      class="btn btn-primary"
      @click.prevent="showModal('post')"
    >
      建立優惠券
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>優惠券名稱</th>
        <th>優惠券代碼</th>
        <th>優惠折扣率</th>
        <th>到期日</th>
        <th>啟用狀態</th>
        <th colspan="2">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="coupon in coupons" :key="coupon.id">
        <td>{{ coupon.title }}</td>
        <td>{{ coupon.code }}</td>
        <td>{{ 100 - coupon.percent }} %</td>
        <td>{{ new Date(coupon.due_date).toLocaleDateString() }}</td>
        <td>
          <span class="text-success" v-if="coupon.is_enabled">啟用中</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              id="showDelModalBtn"
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click.prevent="showModal('edit', coupon)"
            >
              編輯
            </button>
            <button
              id="showDelModalBtn"
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click.prevent="showModal('del', coupon)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <PostCouponModal
    ref="postmodal"
    :event="event"
    :coupon="coupon"
    @get-coupon="getCoupon"
  ></PostCouponModal>
  <DelCouponModal
    ref="delmodal"
    :coupon="coupon"
    @get-coupon="getCoupon"
  ></DelCouponModal>
  <PaginationComponent
    :view="view"
    :pagination="pagination"
    @get-coupon="getCoupon"
  ></PaginationComponent>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import PostCouponModal from '@/components/PostCouponModal.vue';
import DelCouponModal from '@/components/DelCouponModal.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default {
  data() {
    return {
      view: 'coupon',
      coupons: [],
      event: '',
      coupon: {},
      pagination: {},
    };
  },
  components: {
    PostCouponModal,
    DelCouponModal,
    PaginationComponent,
  },
  methods: {
    getCoupon() {
      const loader = this.$loading.show();
      const url = `${import.meta.env.VITE_APP_API_URL}/api/${
        import.meta.env.VITE_APP_API_PATH
      }/admin/coupons`;

      axios
        .get(url)
        .then((res) => {
          // console.log(res.data);
          this.pagination = res.data.pagination;
          this.coupons = res.data.coupons;
        })
        .catch((err) => {
          swal('', err.response.data.message, 'warning', { timer: 2000 });
        })
        .finally(() => {
          loader.hide();
        });
    },
    showModal(event, coupon) {
      this.event = event;

      if (event === 'post') {
        this.coupon = {};
        this.$refs.postmodal.openModal();
      } else if (event === 'edit') {
        this.coupon = coupon;
        this.$refs.postmodal.openModal();
      } else if (event === 'del') {
        this.coupon = coupon;
        this.$refs.delmodal.openModal();
      }
    },
  },
  mounted() {
    // 取得所有優惠券
    this.getCoupon();
  },
};
</script>
