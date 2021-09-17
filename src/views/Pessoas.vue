<template>
  <v-container>
    <v-list dense>
      <v-subheader
        >Exibe uma lista de Pessoas (sempre que acessar insere uma
        pessoa)</v-subheader
      >
      <v-list-item-group color="primary">
        <v-list-item v-for="p in pessoas" :key="p.id">
          <v-list-item-icon>
            <v-icon large color="green darken-2">
              mdi-account
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="p.nome"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div class="text-center">
      <!-- <v-pagination v-model="pagina" :length="0" circle></v-pagination> -->

      <v-btn class="mx-2" fab dark small color="primary" @click="decPagina" :disabled="this.pagina <= 0">
        <v-icon dark>
          mdi-arrow-left-drop-circle-outline
        </v-icon>
      </v-btn>
      <v-btn class="mx-2" fab dark small color="primary" @click="incPagina" :disabled="this.pagina >= this.totalPaginas - 1">
        <v-icon dark>
          mdi-arrow-right-drop-circle-outline
        </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>
<script>
import db from "../dados/baseDados";

export default {
  name: "Pessoas",
  data() {
    return {
      pessoa: { nome: null, idade: null },
      pessoas: [],
      pagina: 0,
      porPagina: 2,
      totalPaginas: 0,
      totalRegistros: 0,
    };
  },
  mounted() {
    //console.log(db);
    this.pessoa = {
      nome: "joao",
      idade: 25,
    };
    /**/
    this.cadastra();
  },
  methods: {
    decPagina: function() {
      if (this.pagina > 0) {
        this.pagina--;
        this.seleciona();
      }
    },
    incPagina: function() {
      if (this.pagina < this.totalPaginas - 1) {
        this.pagina++;
        this.seleciona();
      }
    },
    cadastra() {
      db.pessoas.count().then((c) => {
        this.totalRegistros = c;
        this.pessoa.nome += " " + c;
        db.pessoas
          .add(this.pessoa)
          .then((r) => {
            console.log("salvou", r);
            this.seleciona();
          })
          .catch((e) => {
            console.log("erro", e);
          });
      });
    },
    seleciona() {
      db.pessoas.count().then((c) => {
        this.totalRegistros = c;
        this.totalPaginas = Math.ceil(this.totalRegistros / this.porPagina);
        this.totalPaginas = this.totalPaginas == 0 ? 1 : this.totalPaginas;
        db.pessoas
          .orderBy("nome")
          .offset(this.pagina * this.porPagina)
          .limit(this.porPagina)
          .toArray()
          .then((ps) => {
            this.pessoas = ps;
          });
      });
    },
  },
};
</script>
