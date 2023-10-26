<template>
  <div>
    <NavComponent></NavComponent>
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavComponent from './components/Navigation.vue';
import 'bootstrap/dist/css/bootstrap.css';


export default {
    name: 'App',
    components: {
      NavComponent
    }

}

</script>


<style>
.main{
  display: flex;
  justify-content: center;
  align-items: center;
}
.msginput{
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 3vh  ;
  padding-bottom: 2vh;
}
</style>
