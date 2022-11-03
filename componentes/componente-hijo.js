Vue.component("componente-hijo", {
    data: function(){
        return {
            dato_padre: "DATO DEL PADRE",
            elemento: "Dato del hijo"
        }
    },
    props: ['mensajeParaElPadre'],
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
            this.$emit("clickOnButton", this.mensajeParaElPadre);
            console.log("enviarHaciaPadre");
        }
    }

})