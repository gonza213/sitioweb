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
        $.toast({
          heading: "¡Mensaje no enviado!",
          text: "Complete los datos requeridos",
          showHideTransition: "slide",
          icon: "warning",
          position: "top-right",
      });

      } else {
        var form = this.form;
     
        // $.ajax({
        //   type: "POST",
        //   url: "backend/contact.php",
        //   data: form,
        //   success: function (data) {
            
        //     if(data){
        //       console.log(`${data}`);
        //     }
        //   },
        // });

        emailjs.send("service_7izq809", "template_hdba90r", this.form).then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );

        $.toast({
          heading: "¡Mensaje enviado!",
          text: "Estaremos en contacto con usted <i class='fa fa-smile-o'></i>",
          showHideTransition: "slide",
          icon: "success",
          position: "top-right",
      });

        // this.enviado = true;
        this.form = {};
      }
    },
  },
}).mount("#app");
