
<template>
<main>

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <i class="uil uil-user"></i>
      Bryan Jimenez
    </a>
    <button type="button" class="btn-edit"><i class="uil uil-pen"></i>Editar</button>
    <button type="button" class="btn-cancel"><i class="uil uil-times"></i></button>
  </div>
</nav>

</main>

</template>

<style>
nav{
        width: 100%;
        
    }
</style>

<script>

export default {

    name: "NavbarVue",
    data() {
        return {

        }
    }
}
</script>
