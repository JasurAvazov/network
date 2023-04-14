<template>
    <div>
        <div class="section py-4">
            <form @submit.prevent="handleSubmit" id="switchForm" class="card p-5">
                <h2 class="subtitle is-3">Add Switch</h2>
                <div class="field">
                <label class="label">ip</label>
                <div class="control">
                    <input
                    class="input"
                    type="text"
                    placeholder="Name (ex. 'help')"
                    v-model="formState.ip"
                    />
                </div>
                </div>

                <div class="field is-grouped mt-5">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                </div>
            </form>
            
        </div>
    </div>
</template>

<script setup>
console.log(await getFirestoreData("switches")); 


const formState = ref({
    ip: "",
    createdAt: new Date().toUTCString(),
    updatedAt: new Date().toUTCString(),
    ports: []
});

const emits = defineEmits(["submitForm"])

const handleSubmit = async () => {
    emits("submitForm", formState.value)
};
</script>

<style></style>
