<template>
    <div class="side-bar">
        <h6 class="side-bar-title">Управление свитчами</h6>
        <ul class="side-bar__ul">
            <li class="side-bar__ul-li">
                <NuxtLink class="side-bar__ul-li-btn" to="/switches">Список</NuxtLink>
            </li>
            <li class="side-bar__ul-li">
                <NuxtLink class="side-bar__ul-li-btn" to="/switches/delete">Корзина</NuxtLink>
            </li>
            <li class="side-bar__ul-li">
                <NuxtLink class="side-bar__ul-li-btn" to="/switches/create">Добавить новый</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.side-bar{
    background-color: #f2f2f2;
    width: 300px;
    border-radius: 4px;
    overflow: hidden;
}
.side-bar-title{
    font-size: 16px;
    color: gray;
    padding: 0 20px;
    padding-top: 10px;
}
.side-bar__ul{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    margin: 0;
}
.side-bar__ul-li{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.side-bar__ul-li-btn{
    width: 100%;
    padding: 10px 20px;
    font-size: 14px;
    color: black;
}
.side-bar__ul-li-btn:hover{
    color: white;
    background-color: #007bff;
}
</style>