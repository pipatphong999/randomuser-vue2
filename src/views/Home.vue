<template>
  <div class="container">
    <a-spin tip="Loading..." size="large" :spinning="loading">
      <div class="spin-content">
        <a-row :gutter="[16, 16]">
          <a-col
            :xs="24"
            :md="12"
            :lg="6"
            v-for="(item, index) in data"
            :key="index"
          >
            <CardUser :data="item" @click="handleOpenModal(item)" />
          </a-col>
        </a-row>
        <a-row>
          <a-pagination
            :style="{ float: 'right' }"
            v-model="pagination.page"
            :total="pagination.total"
            @change="pageChange"
          />
        </a-row>
      </div>
    </a-spin>
    <ModalUserInfo
      :visible="modalInfo.visible"
      @cancel="() => (modalInfo.visible = false)"
      :data="modalInfo.data"
    />
  </div>
</template>

<script>
import CardUser from "@/components/CardUser.vue";
import ModalUserInfo from "@/components/ModalUserInfo.vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      data: [],
      pagination: {
        page: 1,
        results: 12,
        total: 10000,
      },
      modalInfo: {
        visible: false,
        data: {},
      },
      loading: true,
    };
  },
  components: { CardUser, ModalUserInfo },
  mounted() {
    this.getDataUserList();
  },
  methods: {
    ...mapActions(["getUserList"]),
    getDataUserList() {
      this.loading = true;
      this.getUserList({ ...this.pagination })
        .then(({ data }) => {
          this.data = [...data.results];
        })
        .catch((err) => {
          console.log("error from getDataUserList", err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    pageChange(page, pageSize) {
      let tempPage = { ...this.pagination };
      tempPage.page = page;
      this.pagination = { ...tempPage };
      this.getDataUserList();
    },
    handleOpenModal(data) {
      console.log("data", data);
      this.modalInfo.data = { ...data };
      this.modalInfo.visible = true;
    },
  },
};
</script>
