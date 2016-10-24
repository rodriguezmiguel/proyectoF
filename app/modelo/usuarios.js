System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Usuario;
    return {
        setters:[],
        execute: function() {
            Usuario = (function () {
                function Usuario(idusuario, personajeusuario, claseusuario, ramasusuario, profesionesusuario, altersusuario) {
                    this.idusuario = idusuario;
                    this.personajeusuario = personajeusuario;
                    this.claseusuario = claseusuario;
                    this.ramasusuario = ramasusuario;
                    this.profesionesusuario = profesionesusuario;
                    this.altersusuario = altersusuario;
                }
                return Usuario;
            }());
            exports_1("Usuario", Usuario);
        }
    }
});
//# sourceMappingURL=usuarios.js.map