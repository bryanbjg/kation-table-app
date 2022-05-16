
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
nav {
  width: 100%;

}

@media screen and (min-width: 780px) and (max-width: 1024px) {
  .btn-edit {
    border-radius: 5px;
    border: none;
    margin-left: 35%;
    background-color: white;
    color: blue;

  }

}

@media screen and (min-width: 480px) and (max-width: 780px) {

  .btn-edit{
  margin-left: 40%;
  }

}

@media screen and (min-width: 1920px) and (max-width: 1080px) {

  .btn-edit{
  margin-left: 77%;
  }

}

@media screen and (min-width: 1920px) and (max-width: 1080px) {

  .btn-edit{
  margin-left: 84%;
  }

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
