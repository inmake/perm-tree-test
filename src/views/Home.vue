<template>
  <div style="height: 100vh">
    <Part :object="rootPermission" :object2="rootPermissionTitles" />
  </div>

  <!-- <button class="button black" @click="createPermission">create</button> -->
</template>

<script>
import API from "@/api/api";
import Part from "../components/Part.vue";

export default {
  name: "Home",
  components: { Part },
  data() {
    return {
      rootPermission: {},
      rootPermissionTitles: {},
    };
  },
  methods: {
    async getTemplates() {
      const { data } = await API.getTemplates();
      this.rootPermission = data.rootPermission;
      this.rootPermissionTitles = data.rootPermissionTitles;
    },
    async createPermission() {
      await API.createPermission();
    },
    openModalTest() {
      //   const store = useStore();
      //   store.dispatch("modalAdd");
    },
  },
  mounted() {
    this.getTemplates();
  },
};
</script>
