export default defineNuxtPlugin(async (nuxtApp) => {
  try {
    await getFirestoreData("switches");
  } catch (error) {
    console.log(error.message);
  }
});
