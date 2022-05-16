<template>

  <v-main data-app>
    <NavbarVue />
    <div class="container-fluid ps-5 pe-5">
      <div>
        <h5>Consulta cliente domicilio</h5>
      </div>
      <hr width="100">
      <div class="row mb-3">
        <div class="col-md-6">
          <div class="d-flex flex-row">
            <h6 class="search">Buscar:</h6>
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1"><i class="uil uil-search"></i></span>
              <input v-model="search" type="text" class="form-control" placeholder="Escribe lo que desees buscar"
                aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="align-end">
            <button v-on:click="formVisibility = true" class="btn btn-primary"><i class="uil uil-plus"></i>Nuevo
              domicilio</button>
          </div>
        </div>
      </div>
    </div>

<div class="blue darken-4">
    <v-data-table  :headers="headers" :items="info" :search="search" :items-per-page="5" class="elevation-1">
    </v-data-table>
</div>
    <CreateDomicilie :visible="formVisibility" @close="onClose" @onSave="onSave" />
  </v-main>

</template>

<style>

.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th {
    color: white;
    background-color: #0D47A1;
}


#app {
  height: 100vh;
  font-weight: normal;
}

body {
  box-sizing: border-box;

}

/* Buttons styling */

.btn-primary {
    color: #fff;
    background-color: #0D47A1;
    border-color: #0D47A1;
}

.btn-edit {
  border-radius: 5px;
  border: none;
  margin-left: 77%;
  background-color: white;
  color: #0D47A1;

}

.btn-edit i {
  margin: 5px;
}

.btn-cancel {
  border: none;
  background-color: white;
  color: red;
  width: 2%;
  border-radius: 5px;
}

h5 {
  margin-top: 30px;
  color: #4B4B4B;

}

hr {
  background-color: black;
  width: 100%;

}

h5 {
  margin-top: 30px;
  color: #4B4B4B;

}

hr {
  background-color: black;
  width: 100%;

}

.input-group {
  padding-left: 1rem;
}

.search {
  color: black;
  margin-bottom: auto;
  margin-top: auto;
}

.align-end {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

}
</style>

<script>

import NavbarVue from './components/NavbarVue';
import CreateDomicilie from './components/CreateDomicilie';
import { getDomicilie, saveDomicilie } from './services/mockURL';



export default {
  name: 'App',
  components: {
    NavbarVue,
    CreateDomicilie,
  },

  data: () => ({
    info: [],
    headers: [
      {
        text: '...',
        align: 'start'
      },
      {
        text: 'PERSONA NO',
        align: 'start',
        value: 'id',
      },
      { text: 'TIPO DOMICILIO', value: 'domicilieType' },
      { text: 'CALLE', value: 'street' },
      { text: 'NUMERO', value: 'number' },
      { text: 'SECTOR', value: 'sector' },
      { text: 'PROVINCIA', value: 'province' },
      { text: 'ESTADO', value: 'state' },
    ],
    search: "",
    formVisibility: false,
  }),

  created() {

    this.load();

  },
  methods: {
    onClose(value) {
      this.formVisibility = value
    },
    onSave(value) {
      saveDomicilie(value)
        .then(() => this.load())
        .catch((err) => {
          console.log(err);
        })

    },

    load() {
      getDomicilie()
        .then((response) => {
          this.info = response.data;
        })
        .catch((error) => {
          console.log('error: ' + error);
        })
    }

  },

}


</script>
