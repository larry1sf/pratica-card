export function miniReact () {
  const usuarios = ({
    srcFondo = 'No tiene ruta de fondo',
    ruta = 'No tiene ruta de imagen',
    name = 'Default',
    fechas = {
      fechaNacimiento: 'Fecha de nacimiento vacia',
      fechaMuerte: 'Fecha no fallecimineto vacia' | 'sss'
    },
    desc = 'Este Usuario de tiene descripcion',
    color = {
      colorPrimario: 'Color primario vacio',
      colorSegundario: 'Color segundario vacio'
    }
  }) => ({ srcFondo, ruta, name, fechas, desc, color })

  const estado = true
  const personajeXXXTentacion = {
    srcFondo: 'https://wallpapercave.com/wp/wp6686864.png',
    ruta: 'https://e0.pxfuel.com/wallpapers/715/612/desktop-wallpaper-xxxtentacion-smiling-face.jpg',
    name: 'xxxtentacion',
    fechas: [
      'Plantation, 23 de enero de 1998',
      'Deerfield Beach, 18 de junio de 2018'
    ],
    desc: 'Un conocido rapero ingles que se dio a cononer por su espontaniedad y variedad pues manifestaba sus sentimientos en diferentes estilos y se plasmaba con autoriedad en todos ellos',
    color: ['Negro', 'Gris claro']
  }
  const personajeLarry = {
    srcFondo: '../../public/imgs/bg-codigo.jpg',
    ruta: '../../public/imgs/me2.jpg',
    name: 'Larry Moncada',
    fechas: { fechaNacimiento: '12/05/2005', fechaMuerte: undefined },
    desc: 'Un joven desarrollador apasionado por las tegnologias nuevas de programacion y administracion de proyectos enfocado en el front-end y con conocimientos fundamentales del back-end',
    color: { colorPrimario: 'blanco-opaco', colorSegundario: 'celeste cian' }
  }

  // const personaMostrar =
  estado ? usuarios(personajeLarry) : usuarios(personajeXXXTentacion)
  // const perosajeAMostrar = { ...personaMostrar }
  // console.log()

  const confirmarCambio = () => {
    const btnCambio = document.getElementById('svg')
    // const cardFooter = document.getElementsByClassName('opacar')
    // const bgFondo = document.getElementById('bg-fondo')
    // const array = [...cardFooter]

    function toolTip () {
      function btnsConfirmacion ({ textoBtn, id, checked = '' }) {
        return `
          <input type="radio" class="btn-check" name="options-base" id="btnConfir${id}" autocomplete="off" ${checked}> 
          <label class="btn col-5 mx-1" for="btnConfir${id}" aria-label="${textoBtn}" title="${textoBtn}">${textoBtn}</label>
           `
      }

      const textConfirmacion =
        ` 
        <span>¿Estas seguro de cambiar de cuenta? </span> 
        ${btnsConfirmacion({ textoBtn: 'Confirmar', id: 0, checked: 'checked' })}
        ${btnsConfirmacion({ textoBtn: 'Cancelar', id: 1 })}
        `
      const toolTipConfir = document.createElement('div')
      toolTipConfir.innerHTML = textConfirmacion
      toolTipConfir.classList = 'row align-items-center text-center g-0 p-2 py-4 col-9 col-sm-7 mx-auto borde rounded position-absolute'
      toolTipConfir.style = 'top:0; left:0; right:0;bottom:0; margin:auto; height:35vh; background:var(--bg);opacity:1;'
      document.body.children[0].children[0].children[0].children[0].append(toolTipConfir)
    }

    btnCambio.addEventListener('click', (event) => {
      // array.forEach((e) => {
      //   e.classList.toggle('opa-40')
      // })
      // toolTip()
      // if(event.target !== mou)
    })
  }
  confirmarCambio()
}

export function btnSeguir () {
  const estados = ['Seguir', 'Seguido']
  let estadoBtn = false
  document.getElementById('seguir')
    .addEventListener('click', (e) => {
      const seguir = ({ el = {}, array = Number() }) => {
        el.target.innerText = el.target.title = el.target.ariaLabel = estados[array]
      }
      const qr = estadoBtn ? estadoBtn = false : estadoBtn = true
      qr ? seguir({ el: e, array: 1 }) : seguir({ el: e, array: 0 })
    })
}
