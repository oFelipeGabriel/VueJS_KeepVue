<template>
  <v-card
    class="mx-auto mh-100"
    
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(card,index) in cards"
          :key="card.title"
          cols="12"
          :md="card.flex"
        >
          <CardNota 
            :nota="card" 
            :id="index"
            @edita="editaNota"
            @remover="remover"/>
        </v-col>
      </v-row>
      <v-row justify="center">
    
  </v-row>
    </v-container>
    
    <ModalVue 
      :dialog="dialog" 
      @novo="getNota" 
      @fecha="dialog=false" 
      @abre="abreModal" 
      :nota="nota" 
      @remover="remover"
      @setNotaValue="(value)=>nota.text=value"
      @setNotaTitle="(value)=>nota.title=value"
      @setDialogValue="(value)=>dialog=value"
    />
  </v-card>
</template>

<script>
import ModalVue from './Modal';
import CardNota from './CardNota';
export default {
    name: 'ListaNotas',
    components:{
      ModalVue,
      CardNota
    },
    data(){
        return{
            dialog: false,
            titulo: '',
            tituloRules: [
                v => !!v || 'Titulo é obrigatório',
                v => (v && v.length <= 10) || 'Titulo deve ter no máximo 50 caracteres',
            ],
            nota: '',
            editar: false,
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
      abreModal(){
        this.dialog = true
        if(this.nota == ''){
          this.nota = {text: '', title: '', color: '#1888c4'}
        }
      },
     getNota(nota){
       if(this.editar){
         this.cards[this.editar] = nota
         this.editar = null
       }else{
         this.cards.push(nota);
       }
       
       this.dialog = false

     },
     editaNota(id){
       let nota = this.cards[id]
       this.nota = nota
       this.editar = id
       this.dialog = true
       console.log({nota, dialog: this.dialog})
     },
     remover(id){
       this.cards.splice(id,1)
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