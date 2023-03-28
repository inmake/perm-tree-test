<template>
  <button
    class="button black"
    v-for="(item, index, i) in object"
    :key="index"
    style="display: flex; position: fixed; margin-left: 20px"
    :style="{ top: i !== 0 ? i * 40 + 'px' : '0px' }"
    @click="selectIndex(index)"
  >
    <!-- <input
      type="checkbox"
      :checked="checked && checkedIndex === index"
      @click="toggleCheck(index)"
    /> -->
    <span>{{ object2 && object2[index]["title"] }} {{ index }} [{{ i }}]</span>

    <div>
      <Part
        v-if="selectedIndex === index && index !== 'action'"
        :object="object[index]"
        :object2="object2[index]['items']"
      />
      <span v-if="selectedIndex === index && index === 'action'">
        <Part :object="object[index]" />
      </span>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    object: Object,
    object2: Object,
  },
  data() {
    return {
      checked: false,
      checkedIndex: "",
      selectedIndex: "",
    };
  },
  methods: {
    selectIndex(index) {
      this.selectedIndex = index;
    },
    toggleCheck(index) {
      this.checked = !this.checked;
      this.checkedIndex = index;
    },
  },
};
</script>

<style scoped></style>
