<template>
  <div>
    <div class="section py-4">
      <div class="box p-5">
        <h2 class="subtitle is-3">Switches</h2>
        <template v-for="mySwitch in switches" :key="mySwitch.id">
          <SwitchDetail :mySwitch="mySwitch" @delete="handleDelete" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  switches: {},
});

const emits = defineEmits(["delete"]);

const handleDelete = (mySwitch) => {
  emits("delete", mySwitch);
};
</script>

<style></style>
