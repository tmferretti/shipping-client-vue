<template>
  <div>
    {{ orders }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'VendorsShow',
  data () {
    return {
      vendor: {},
      orders: [],
      addresses: []
    }
  },
  methods: {
    getOrders: function () {
      let config = {
        headers: {
          Accept: 'application/json, application/vnd.negotiatus-challenge.com; version=1'
        }
      }
      axios
        .get('api/vendors/' + this.$route.params.id + '/orders', config)
        .then((response) => {
          console.log(response.data)
          this.orders = response.data
      })
      return this.orders
    },

  },
  mounted: function () {
    this.getOrders();
  }

}
</script>
