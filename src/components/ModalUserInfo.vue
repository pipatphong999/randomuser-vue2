<template>
  <div>
    <a-modal
      :visible="visible"
      :title="`${data.name.title} ${data.name.first} ${data.name.last}`"
      on-ok="handleOk"
      @cancel="handleCancel"
      width="700px"
    >
      <template slot="footer">
        <a-button key="back" @click="handleCancel"> close </a-button>
      </template>
      <a-row type="flex" align="middle" :gutter="16">
        <a-col :xs="24" :md="10" class="col-img-user">
          <div class="img-cover-wrap img-user" style="width: fit-content">
            <img width="250px" :src="data.picture.large" />
            <div class="age-text">
              Age : {{ data.dob.age }}
              <a-icon
                type="man"
                v-if="data.gender == 'male'"
                class="icon-man"
              />
              <a-icon type="woman" v-else class="icon-woman" />
            </div>
            <div class="country-flag">
              <country-flag :country="data.nat" size="normal" />
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :md="14" class="desc-user">
          <p>
            <b>Name : </b>
            {{ data.name.title }}
            {{ data.name.first }}
            {{ data.name.last }}
          </p>
          <p>
            <b>Gender : </b>
            {{ data.gender }}
          </p>
          <p>
            <b>Birthday : </b>
            {{ data.dob.date | moment("DD MMMM YYYY") }}
            <b> Age : </b>
            {{ data.dob.age }}
          </p>
          <p>
            <b>Nationality : </b>
            {{ data.nat }}
          </p>
          <p>
            <b>Location : </b>
            {{ data.location.street.number }}
            {{ data.location.street.name }}
            {{ data.location.city }}
            {{ data.location.postcode }}
            {{ data.location.description }}
          </p>
          <p>
            <b>Country : </b>
            {{ data.location.country }}
          </p>
          <p>
            <b>Email : </b>
            {{ data.email }}
          </p>
          <p>
            <b>Phone : </b>
            {{ data.phone }} | {{ data.cell }}
          </p>

          <!-- <p>{{ data }}</p> -->
        </a-col>
      </a-row>
      <!-- {{ data }} -->
    </a-modal>
  </div>
</template>
<script>
import CountryFlag from "vue-country-flag";
export default {
  components: {
    CountryFlag,
  },
  props: {
    visible: { default: false },
    data: { default: () => ({}) },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    handleCancel(e) {
      console.log("handleCancel");
      this.$emit("cancel");
    },
  },
};
</script>
<style scoped>
.img-user {
  border: solid 4px rgb(80, 80, 80);
  border-radius: 10px;
  overflow: hidden;
}
.col-img-user {
  justify-content: center;
  display: flex;
  padding: 5px 0px;
}
.desc-user p {
  margin-bottom: 0.8em;
}
</style>