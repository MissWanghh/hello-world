
<template>
    <div>
        <div class="nav-box about-box">
            <router-link class="nav-item" to="/about/letConst">letConst</router-link>
            <router-link class="nav-item" to="/about/classExtendsSuper">classExtendsSuper</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="scss">
    $deepGreen:#3DAE7E;
    .about-box a{
        color:$deepGreen !important;
    }
</style>


