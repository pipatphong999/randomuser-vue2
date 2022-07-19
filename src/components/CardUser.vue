<template>
  <div>
    <a-card hoverable :bordered="false" @click="() => $emit('click')">
      <!-- <img slot="cover" alt="example" :src="data.picture.large" /> -->
      <template slot="cover">
        <div class="img-cover-wrap">
          <img slot="cover" class="w-100" :src="data.picture.large" />
          <div class="age-text">
            Age : {{ data.dob.age }}
            <a-icon type="man" v-if="data.gender == 'male'" class="icon-man" />
            <a-icon type="woman" v-else class="icon-woman" />
          </div>
          <div class="country-flag">
            <country-flag :country="data.nat" size="normal" />
          </div>
        </div>
      </template>
      <a-card-meta :title="fullName">
        <template slot="description">
          <p class="country">
            <a-icon type="home" />{{ data.location.country }} |
            {{ data.location.city }}
            <!-- {{ countries.includes(data.nat) }} -->
          </p>
          <p>
            <a-icon type="calendar" />
            {{ data.dob.date | moment("DD MMMM YYYY") }}
          </p>
          <!-- countries.includes('US') -->
          <p><a-icon type="mail" /> {{ data.email }}</p>
          <p><a-icon type="phone" />{{ data.phone }}</p>
          <!-- <p>{{ data.dob }}</p> -->
        </template>

        <!-- { "title": "Mr", "first": "Frank-Michael", "last": "Reiser" } -->
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";

export default {
  props: {
    data: {
      default: () => {},
    },
  },
  components: {
    CountryFlag,
  },
  data() {
    return {};
  },
  mounted() {
    // console.log("countries",countries)
    // console.log("mounted", countries);
  },
  computed: {
    fullName() {
      if (this.data.name) {
        return `${this.data.name.title}. ${this.data.name.first} ${this.data.name.last}`;
      }
      return "";
    },
  },
};
</script>

<style scoped>
::v-deep .ant-card-meta-description p {
  margin-bottom: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
::v-deep .ant-card-meta-description i {
  color: rgb(255, 145, 0);
  font-size: 18px;
  padding-right: 5px;
}
::v-deep .ant-card {
  border-radius: 15px;
  overflow: hidden;
}
::v-deep .ant-card-body {
  padding: 15px;
}

::v-deep .ant-card:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
::v-deep .ant-card:active {
  box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 15px;
}
::v-deep .ant-card-cover {
  overflow: hidden;
  display: flex;
  align-items: center;
}
::v-deep .ant-card-cover img {
  height: fit-content;
}
::v-deep .ant-card-meta-title {
  margin-bottom: 0px !important;
}
</style>
