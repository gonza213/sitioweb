Vue.createApp({
  data() {
    return {
      form: {
        nombre: "",
        tel: "",
        email: "",
        asunto: "",
        mensaje: "",
      },
      no_enviado: false,
      enviado: false,
    };
  },
  methods: {
    contact() {
      if (
        !this.form.nombre ||
        !this.form.tel ||
        !this.form.email ||
        !this.form.asunto ||
        !this.form.mensaje
      ) {
        this.no_enviado = true;
      } else {
        emailjs.send("service_7izq809", "template_hdba90r", this.form).then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );

        this.enviado = true;
        this.form = {};
      }
    },
  },
}).mount("#app");
