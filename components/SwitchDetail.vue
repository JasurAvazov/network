<template>
  <article class="message" :class="mySwitch.background">
    <div class="message-header" @click="isExpanded = !isExpanded">
      <p class="">{{ mySwitch.ip }}</p>
      <button
        class="delete"
        aria-label="delete"
        @click="handleDelete(mySwitch)"
      ></button>
    </div>
    <div class="message-body" v-if="isExpanded">
      <ClientOnly>
        <pre>{{ mySwitch }}</pre>
      </ClientOnly>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  mySwitch: {},
});

const emits = defineEmits(["delete"]);

const isExpanded = ref(false);

const handleDelete = (mySwitch) => {
  emits("delete", mySwitch);
};
</script>

<style scoped></style>
