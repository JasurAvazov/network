<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <NuxtLink class="navbar-brand" to="/">Logo</NuxtLink>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink to="/switches" class="nav-link active">Switches</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/ports" class="nav-link active">Ports</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>