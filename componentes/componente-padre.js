Vue.component('componente-padre', {
    data: function () {
        return {
            dato_padre: "DATO DEL PADRE",
            elemento: "Dato inicial",
        }
    },
    template: `
    <div class="padre">
        <h3> Componente padre </h3>
        <p> {{dato_padre}} </p>
        <p> {{elemento}} </p>
        <componente-hijo 
            @clickOnButton="recibirDelHijo"
            v-bind:mensajeParaElPadre="'Todo ok'"
        ></componente-hijo>
        <componente-hijo 
            @clickOnButton="recibirDelHijo"
            v-bind:mensajeParaElPadre="'Todo masomenos'"
        ></componente-hijo>
    </div>
    `,
    methods: {
        recibirDelHijo: function($event) {
            this.elemento = $event;
        }
    }
})