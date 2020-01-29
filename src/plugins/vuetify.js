import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        light: true,
        themes:{
            light:{
                primary: '#607d8b',
                secondary: '#2196f3',
                accent: '#8bc34a',
                error: '#f44336',
                warning: '#00bcd4',
                info: '#673ab7',
                success: '#3f51b5'
                }
        }
      },
      
});

