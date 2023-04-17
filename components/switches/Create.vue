<template>
    <div class="create">
        <h3 class="title">Создать новый свитч</h3>
        <form @submit.prevent="handleSubmit">
            <div class="create__input">
                <label for="ip">ip: </label>
                <input type="text" id="ip" v-model="ip" required />
            </div>
            <button class="btn" type="submit">Создать</button>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { createDocument } from '../../services/switch';
  
export default Vue.extend({
    data() {
        return {
            ip: '',
            ports: [],
            createdAt: new Date().toUTCString,
            updatedAt: new Date().toUTCString,
        };
    },
    methods: {
        async handleSubmit() {
            const data = {
                ip: this.ip,
                ports: [],
                createdAt: new Date().toUTCString(),
                updatedAt: new Date().toUTCString(),
            };
            await createDocument(data);
            this.$router.push('/switches');
        },
    },
});
</script>

<style scoped>
.create{
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 4px;
}
.btn{
    border: none;
    background-color: green;
    padding: 5px 15px;
    border-radius: 4px;
    color: white;
}
.title::after{
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #e2e2e2;
    margin: 20px 0;
}
.create__input{
    margin-bottom: 20px;
}
input{
    box-shadow: inset 0 0 5px 3px #e2e2e2;
    padding: 5px 15px;
    border-radius: 4px;
    border: none;
    outline: none;
}
label{
    font-size: 20px;
    margin-right: 10px;
}
</style>