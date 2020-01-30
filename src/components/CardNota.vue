<template>
    <v-card :color="nota.color" shaped dark>
        <v-card-title v-text="nota.title"></v-card-title>
        <v-card-text class="text--lighten">
            <div >{{nota.text}}</div>
        </v-card-text>
    <v-card-actions>
        <v-spacer></v-spacer>

    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
            <span v-on="on" @click="editaNota(id)">
                <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
            </span>
        </template>
        <span>Editar</span>
        </v-tooltip>
        <v-tooltip bottom>
        <template v-slot:activator="{ on }">
            <span v-on="on" @click="remover(id)">
                <v-btn icon >
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </span>
        </template>
        <span>Apagar</span>
        </v-tooltip>
    </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'CardNota',
    props:['nota','id'],
    data(){
        return{

        }
    },
    methods:{
        editaNota(id){
            this.$emit('edita', id)
        },
        remover(id){
            this.$emit('remover', id)
        }
    }
}
</script>