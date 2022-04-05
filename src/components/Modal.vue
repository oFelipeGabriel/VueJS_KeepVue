
<template>

    <v-dialog v-model="open" v-on:input="emitOutput"
      fullscreen >
      <template v-slot:activator="{ on }">
          <v-fab-transition>
            <v-btn
            v-show="!dialog"
            @click="abre"
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
          <v-btn icon dark @click="fechaModal">
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
            :value="nota.title"
            @input="setNotaTitle($event.target.value)"
            :counter="50"
            :rules="tituloRules"
            label="Titulo"
            required
            ></v-text-field>
        <v-row>
            <v-col cols="12">
            <v-textarea
            solo
            :value="nota.text"
            @input="setNotaValue($event.target.value)"
            height="210"
            name="input-7-4"
            label="Nota"
            ></v-textarea>
            </v-col>
            <v-col cols="2">
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
</template>

<script>
export default {
    name: 'ModalVue',
    props:['dialog', 'nota'],
    data(){
        return{
            titulo: '',
            tituloRules: [
                v => !!v || 'Titulo é obrigatório',
                v => (v && v.length <= 10) || 'Titulo deve ter no máximo 50 caracteres',
            ],
            color: '#1888c4',
            texto: '',
            valid: false,
            hidden: false,
            open: false
        }
        
    },
    methods:{
        fechaModal(){
            this.$emit('fecha')
        },
        abre(){
            this.$emit('abre')
        },
        validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      emitOutput() {
        this.$emit('setDialogValue', this.dialog)
      },
      reset () {
        this.$refs.form.reset()
        this.color = '#1888c4'
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      salvar(){
          let titulo = this.nota.title;
          let text = this.nota.text;
          let cor = '#1888c4';
          let nota = {title: titulo, text: text, flex: '6', color: cor}
          //this.cards.push(nota)
          this.$emit('novo', nota)
          this.reset()
      },
      remover(id){
          this.$emit('remover', id)
      },
      setDialogValue(value){
        this.$emit('setDialogValue', value)
      },
      setNotaTitle(value){
        this.$emit('setNotaTitle', value)
      },
      setNotaValue(value){
        this.$emit('setNotaValue', value)
      }

    },
    watch:{
        dialog(value){
          console.log('dialog', value)
          this.open = value
        }
    },
     created() {
    // props are exposed on `this`
      console.log('creaed', this.dialog)
    }
}
</script>