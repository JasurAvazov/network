<template>
    <div>
        <NavBar />
        <div class="container">
            <SideBar />
            <main>
                <h3 class="title">Список свитчей</h3>
                <ul v-if="switches">
                    <li v-for="mySwitch in switches" :key="mySwitch.id">
                        <p>id: {{ mySwitch.id }},</p>
                        <p>ip: {{ mySwitch.ip }},</p>
                        <p>createdAt: {{ mySwitch.createdAt }},</p>
                        <p>updatedAt: {{ mySwitch.updatedAt }},</p>
                        <p>ports: {{ mySwitch.ports }},</p>
                        <div class="btns">
                            <button @click="openDelete(mySwitch.id)" class="delete">Удалить</button>
                            <button class="edit">Редактировать</button>
                        </div>
                    </li>
                </ul>
            </main>
        </div>
    </div>
</template>

<script>
import NavBar from "../../components/switches/NavBar.vue";
import SideBar from "../../components/switches/SideBar.vue";
import { readDocuments, deleteDocument } from '../../services/switch';

export default {
    components: {
        NavBar,
        SideBar,
    },
    data() {
        return {
            switches: [],
            deleteModal: false
        };
    },
    async asyncData() {
        const switches = await readDocuments();
        return { switches };
    },
    methods: {
        async openDelete(id) {
            let text = "вы точно хотите удалить?"
            if (confirm(text) == true) {
                await deleteDocument(id);
                this.switches = await readDocuments();
            } else {}
        }
    },
    created() {
        this.switches = this.switches.map(item => ({
            id: item.id,
            ip: item.ip,
            ports: item.ports,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
        }));
    },
};
</script>

<style scoped>
.container{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px auto;
}
main{
    width: calc(100% - 320px);
}
ul{
    list-style: none;
}
li{
    background-color: #f2f2f2;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 4px;
}
.title::after{
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #e2e2e2;
    margin: 20px 0;
}
.delete{
    background-color: red;
    color: white;
    padding: 5px 15px;
    border: none;
    border-radius: 4px;
}
.edit{
    background-color: rgb(255, 208, 0);
    color: white;
    padding: 5px 15px;
    border: none;
    border-radius: 4px;
}
.btns{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 10px;
}
</style>