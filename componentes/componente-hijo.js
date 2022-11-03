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
    </div>
    `

})