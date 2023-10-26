
<template>
    <div class="nav">
        <nav>
            <div>
                <center>2CHat</center>  
            </div>
            <div>
            <router-link to="/"><a class="text">Home </a></router-link>
            <router-link to="/chat"><a class="text">Chat </a></router-link>
            <router-link to="/test"><a class="text"> FAQ</a></router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavComponent'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sometype+Mono&display=swap');
.nav{
    background-color: black;
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #ffffff;
}
.text{
    color: antiquewhite;
    font-family: 'Sometype Mono', monospace;
}
</style>