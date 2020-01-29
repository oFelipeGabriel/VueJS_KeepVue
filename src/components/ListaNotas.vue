<template>
  <v-card
    class="mx-auto mh-100"
    
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          :md="card.flex"
        >
          <v-card :color="card.color" shaped dark>
              <v-card-title v-text="card.title"></v-card-title>
              <v-card-text class="text--lighten">
                <div >{{card.text}}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <span v-on="on">
                        <v-btn icon>
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                    </span>
                </template>
                <span>Editar</span>
                </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <span v-on="on">
                        <v-btn icon >
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </span>
                </template>
                <span>Apagar</span>
                </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
          <v-fab-transition>
            <v-btn
            v-show="!hidden"
            v-on="on"
            color="cyan"
            dark
            absolute
            bottom
            right
            fab
            >
            <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-fab-transition>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Nova Nota</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="salvar">Salvar</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="px-3"
        >
            <v-text-field
            v-model="titulo"
            :counter="50"
            :rules="tituloRules"
            label="Titulo"
            required
            ></v-text-field>
        <v-row>
            <v-col cols="10">
            <v-textarea
            solo
            v-model="nota"
            height="210"
            name="input-7-4"
            label="Nota"
            ></v-textarea>
            </v-col>
            <v-col cols="2">
            <v-color-picker v-model="color" hide-inputs></v-color-picker>
            </v-col>
        </v-row>

        <v-row justify="end" class="px-3">
            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >
            Validate
            </v-btn>

            <v-btn
            color="error"
            class="mr-4"
            @click="reset"
            >
            Reset Form
            </v-btn>

            <v-btn
            color="warning"
            @click="resetValidation"
            >
            Reset Validation
            </v-btn>
        </v-row>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
    </v-container>
    
  </v-card>
</template>

<script>
export default {
    name: 'ListaNotas',
    data(){
        return{
            dialog: false,
            titulo: '',
            tituloRules: [
                v => !!v || 'Titulo é obrigatório',
                v => (v && v.length <= 10) || 'Titulo deve ter no máximo 50 caracteres',
            ],
            nota: '',
            color: '#000000',
            cards:[
                {
                    title: "Testando1", 
                    flex: '12', 
                    color: '#3f51b5',
                    text: 'IPhone rip-offs, next Flash sucks for this reason Apple will only get better first iTunes makes it easy.'
                },
                {
                    title: "Testando2", 
                    flex: '6', 
                    color: '#2196f3',
                    text: 'Profit, in spite of CrackBerry.'
                },
                {
                    title: "Testando3", 
                    flex: '6', 
                    color: '#673ab7',
                    text: 'Profit, so that pleasure to use nevertheless gorgeous.'
                },
            ]
        }
    },
    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
        this.color = '#000000'
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      salvar(){
          this.dialog = false;
          let titulo = this.titulo;
          let text = this.nota;
          let cor = this.color;
          let nota = {title: titulo, text: text, flex: '6', color: cor}
          this.cards.push(nota)
          this.reset()
      }
    },
}
</script>

<style scoped>
.gray--text{
    color: gray
}
.text--primary{
    color: #fff;
}
.mh-100{
    min-height: 95%;
}
.px-3{
  padding: 0 .3rem;
}
</style>