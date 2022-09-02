  function calcular(){

  var PESO=document.getElementById("peso").value;
  if (PESO==""){

      Swal.fire({
          title: '¡Datos ingresados incorrectamente!',
          text: '¡Recuerda ingresar tu peso!',
          toast: true,
          position:'center',
          confirmButtonText: 'Intente de nuevo',
          icon:'error'
      });

  }else{

  const PESOTIERRA=9.8
  for (var a=1; a<=14;a++){
      let PESO_FINAL;
      let PLANETA=document.getElementById(a);
      switch(a){
          case 1:
          PESO_FINAL= PESO*273.70/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
          case 2:
          PESO_FINAL= PESO*3.7/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
          case 3:
          PESO_FINAL= PESO*8.87/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
          case 4:
          PESO_FINAL= PESO*1.62/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
          case 5:
          PESO_FINAL= PESO*3.71/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
          case 6:
          PESO_FINAL= PESO*0.27/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
          case 7:
          PESO_FINAL= PESO*24.79/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
          case 8:
          PESO_FINAL= PESO*10.44/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
          case 9:
          PESO_FINAL= PESO*8.87/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
          case 10:
          PESO_FINAL= PESO*11.15/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
          case 11:
          PESO_FINAL= PESO*0.62/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
          case 12:
          PESO_FINAL= PESO*0.401/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
          case 13:
          PESO_FINAL= PESO*0.5/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
          case 14:
          PESO_FINAL= PESO*0.82/PESOTIERRA
          PLANETA.value=`${parseFloat(PESO_FINAL).toFixed(2)} Kg`
          break;
      }
  }
  }
  }
