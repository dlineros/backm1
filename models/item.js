const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
});


const PreInscripcionSchema = new mongoose.Schema({
    RutUsuario: { type: String, maxlength: 12, required: true },   // Rut del firmante sin puntos y con guion
    Nombre: { type: String, maxlength: 20, required: true },       // Nombre del firmante
    ApellidoPaterno: { type: String, maxlength: 20, required: true }, // Apellido paterno del firmante
    ApellidoMaterno: { type: String, maxlength: 20 },              // Apellido materno del firmante (opcional)
    Email: { type: String, maxlength: 60, required: true },        // Email del firmante
    RutEmpresa: { type: String, maxlength: 15, required: true },   // Rut de la empresa enrolada sin puntos y con guion
    CantidadDoctos: { type: Number, required: true },              // Cantidad de documentos que se enviarán a firmar
    UrlCallBack: { type: String, maxlength: 200 },                 // URL para el contexto de documentos firmados
    UrlWebHook: { type: String, maxlength: 200 },                  // URL para enviar documentos firmados
    TipoFirma: { type: Number, required: true },                   // Tipo de firma: 3 (Avanzada Online) o 4 (Simple)
    CaducaEnHoras: { type: Number },                               // Tiempo en horas para caducidad de prescripción (opcional)
    UrlWebHookEstadoEnrolamiento: { type: String, maxlength: 200 },// URL de escucha para estado de enrolamiento
    RutSponsor: { type: String, maxlength: 15 },                   // Rut de la empresa patrocinadora
    CorreoEnvioDocumentoFirmado: { type: String },                 // Correos para enviar el documento firmado (separados por coma)
    ProductoCombinadoId: { type: String, unique: true },           // Identificador único para producto combinado (opcional)
    Celular: { type: String, maxlength: 9 }                        // Número de celular del firmante para SMS (opcional)
});

module.exports = mongoose.model('PreInscripcion', PreInscripcionSchema);


module.exports = mongoose.model('Item', itemSchema);
