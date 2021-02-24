const app = Vue.createApp({
    data() {
        return {
        }
    },
    watch: {

    },
    computed: {

    },
    methods: {
        
    },
});

app.component('friend-component', {
    template: `
        <li>
          <h2>{{ friend.name }} {{ friend.lastname }}</h2>
          <button @click="toggleDetailsVisibility">{{ detailIsVisible ? 'Hide Details' : 'Show Details' }}</button>
          <ul v-if="detailIsVisible">
            <li><strong>Phone:</strong> {{ friend.phone }} </li>
            <li><strong>Email:</strong> {{ friend.email }} </li>
          </ul>
        </li>
     `,
    data() {
        return {
            detailIsVisible: false,
            friend: 
                {
                    name: 'Valerio',
                    lastname: 'Modica',
                    phone: '333 33 33 33',
                    email: 'valerio.modica@localhost.com',
                },
        }
    },
    watch: {

    },
    computed: {

    },
    methods: {
        toggleDetailsVisibility() {
            this.detailIsVisible = !this.detailIsVisible;
        }
    },
});

app.mount('#app');