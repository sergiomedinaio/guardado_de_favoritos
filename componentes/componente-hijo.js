Vue.component("componente-hijo", {
    data: function(){
        return {
            dato_padre: "DATO DEL PADRE",
            elemento: "Dato del hijo"
        }
    },
    template: `
    <div class="hijo">
        <h3> Componente hijo </h3>
        <p> {{dato_padre}} </p>
        <p> {{elemento}} </p>
        <button type="button" v-on:click="enviarHaciaPadre">Enviar a padre</button>
    </div>
    `,
    methods: {
        enviarHaciaPadre: function() {
            this.$emit("clickOnButton", "Esto lo estamos cambiando desde el hijo");
            console.log("enviarHaciaPadre");
        }
    }

})