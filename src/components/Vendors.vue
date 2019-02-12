<template>
  <h1>{{ vendors }}</h1>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Vendors',
  data () {
    return {
      vendors: []
    }
  },
  methods: {
    getVendors: function () {
      let config = {
        headers: {
          Accept: 'application/json, application/vnd.negotiatus-challenge.com; version=1'
        }
      }
      axios
        .get('api/vendors', config)
        .then(console.log(response))
      return console.log(vendors)
    }
  },
  mounted: function () {
    this.getVendors();
  }

}
</script>
