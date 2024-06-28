<template>
  <div class="industry_list">
    <h1>Industry List</h1>
    <div :disabled="loading">
      <span v-show="loading" class="spinner-border spinner-border-sm"></span>
      <v-data-table :custom-filter="filterOnlyCapsText" :headers="headers" :items="items" :search="search"
        item-value="name">
        <template v-slot:top>
          <v-text-field v-model="search" class="pa-2" label="Search"></v-text-field>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
import useAuthStore from "@store/AuthStore.js"
import callAPI from "@repositories/HttpRepository.js"
const col_headers = [
  {
    title: 'ID',
    align: 'start',
    key: 'id',
  },
  {
    title: 'Industry Name EN',
    align: 'start',
    key: 'industry_name_en',
  },
  {
    title: 'Industry Name JA',
    align: 'end',
    key: 'industry_name_ja',
  },
]
export default {
  data: () => ({
    search: '',
    headers: col_headers,
    items: [],
  }),
  methods: {
    filterOnlyCapsText(value, query, item) {
      return (
        value != null &&
        query != null &&
        typeof value === 'string' &&
        value.toString().toLocaleUpperCase().indexOf(query) !== -1
      )
    },
    handleFetchAPI(value, query, item) {
      let _access_token = localStorage.getItem("access_token");
      let authStore = useAuthStore();
      if (_access_token != null && _access_token != "") {
        authStore.setAccessToken(_access_token)
        callAPI.updateBearToken(_access_token)
      }
      this.loading = true
      callAPI.callAPIMethodGet("industry", null).then((response) => {
        if (response.data != null) {
          this.loading = false;
          this.items = response.data;
        }
        else {
          this.loading = false;
        }
      });
    },
  },
  beforeMount() {
    this.handleFetchAPI()
  },
}
</script>