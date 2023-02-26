

const json = [
    {
      "id_cliente": 108,
      "id_tipo_documento": 2,
      "fecha_catastro": "2021-02-08T19:41:10.000Z",
      "nro_documento": "80050623-8",
      "nro_telefono": "595981222333",
      "tipo_persona": "J",
      "denominacion": "Frisco S.A.",
      "usuario_ultima_modificacion": null,
      "fecha_ultima_modificacion": null,
      "pep": false,
      "descripcion": "R.U.C."
    },
    {
      "id_cliente": 110,
      "id_tipo_documento": 1,
      "fecha_catastro": "2021-02-08T19:41:11.000Z",
      "nro_documento": "12345678",
      "nro_telefono": "595981222333",
      "tipo_persona": "F",
      "denominacion": "Mario Gonzalez",
      "usuario_ultima_modificacion": null,
      "fecha_ultima_modificacion": null,
      "pep": true,
      "descripcion": "Cédula de Identidad"
    },
    {
      "id_cliente": 109,
      "id_tipo_documento": 1,
      "fecha_catastro": "2021-02-08T19:41:11.000Z",
      "nro_documento": "1234567",
      "nro_telefono": "0981002333",
      "tipo_persona": "F",
      "denominacion": "Juan Perez",
      "usuario_ultima_modificacion": "nicoll",
      "fecha_ultima_modificacion": "2021-08-27T21:12:34.000Z",
      "pep": true,
      "descripcion": "Cédula de Identidad"
    }
]


for (const {id_cliente: idc,
id_tipo_documento: itd,
fecha_catastro: fc,
nro_documento: nd,
nro_telefono: nt,
tipo_persona: tp,
denominacion: d,
usuario_ultima_modificacion: uum,
fecha_ultima_modificacion: fum,
pep: p,
descripcion: des} of json) {
  console.log('id_cliente: ' + idc);
}

