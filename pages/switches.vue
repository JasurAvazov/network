<template>
  <div>
    <TheModal
      :isActive="showModal"
      :page="selectedSwitch"
      title="Confirm Delete"
      @close="showModal = !showModal"
      @confirm="handleConfirm"
    />
    <NuxtLayout>
      <TheHero :pageContent="pageContent" />
      <div class="container mt-4">
        <SwitchTabs @activeTab="handleChangeTab" />
        <TheSwitchForm @submitForm="handleSwitchSubmit" v-if="showTab === 'add'"/>
        <SwitchList :switches="content?.switches" @delete="handleDelete" v-if="showTab === 'list'"/>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();
const content = useContent();
const showModal = ref(false);
const selectedSwitch = ref();
const showTab = ref("list");

const pageContent = computed(() => {
  return getPageContent(content, route);
});

const handleSwitchSubmit = async (formState) => {
  const result = await addFirestoreData("switches", formState);
  document.getElementById("switchForm").reset();
  await getFirestoreData("switches");
};

const handleDelete = (mySwitch) => {
  selectedSwitch.value = mySwitch;
  showModal.value = true;
};

const handleConfirm = async () => {
  showModal.value = false;
  await deleteFirestoreData("switches", selectedSwitch.value.id);
  await getFirestoreData("switches");
};

const handleChangeTab = async (tab) => {
  showTab.value = tab;
};
</script>

<style></style>
