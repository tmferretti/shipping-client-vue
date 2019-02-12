<template>
  <div>
    <b-table hover :items="vendors" :fields="fields" selectable @select="selected">
      <template slot="id" slot-scope="data">
        <a :href="`#/vendors/${data.value}`">
          {{data.value}}
        </a>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'VendorsList',
  data () {
    return {
      vendors: [],
      fields: {
        id: {
          label: "ID",
          sortable: true
        },
        name: {
          label: "Name",
          sortable: true
        },
        industry: {
          label: "Industry",
          sortable: true
        }
      }
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
        .then((response) => {
          this.vendors = response.data
      })
      return this.vendors
    },

  },
  mounted: function () {
    this.getVendors();
  }

}
</script>
