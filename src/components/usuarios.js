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

  // const confirmarCambio = () => {}
  // confirmarCambio()
}
