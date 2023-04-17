<template>
    <div>
        <NavBar />
        <div class="container">
            <SideBar />
            <main>
                <Create />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import NavBar from "../../components/switches/NavBar.vue"
import SideBar from "../../components/switches/SideBar.vue"
import Create from "../../components/switches/Create.vue"

export default {
    components: {
        NavBar,
        SideBar,
        Create
    }
}
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
</style>