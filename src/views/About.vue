<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Help page</h1>
      </v-col>
      <v-col cols="12">
        <h3>Usou-se o conteúdo disponível no site:<a target="_blank" href="https://vuetifyjs.com/en/getting-started/installation/">https://vuetifyjs.com/en/getting-started/installation/</a></h3>
        <h3>Sobre material icons: <a target="_blank" href="https://materialdesignicons.com/">https://materialdesignicons.com/</a></h3>
      </v-col>
      <v-col cols="12">
        <v-textarea
          name="input-7-1"
          background-color="amber lighten-4"
          color="orange orange-darken-4"
          label="Usando electron"
          rows="8"
          value="# Install
vue add electron-builder

# Usage
npm run electron:build
npm run electron:serve

#Gera até um instalador!!!!"
          hint="Gera até um instalador!!!!"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>
