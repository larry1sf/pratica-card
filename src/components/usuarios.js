/* eslint-disable indent */
export default function miniReact () {
  const usuarios = ({
    avatar = 'sin ruta de avatar',
    srcFondo = 'No tiene ruta de fondo',
    name = 'Default',
    ubicacion = 'nombe pre def',
    desc = 'Este Usuario de tiene descripcion',
    ruta = { urlName: 'url default', urlFN: '', urlFM: '', urlUbi: 'sin ubicaion', imgsFooter: ['', '', ''] },
    fechas = {
      fechaNacimiento: 'Fecha de nacimiento vacia',
      fechaMuerte: 'Fecha no fallecimineto vacia'
    },
    color = {
      colorPrimario: 'Color primario vacio',
      colorSegundario: 'Color segundario vacio'
    }
  }) => ({ avatar, srcFondo, ruta, ubicacion, name, fechas, desc, color })

  let estado = true
  const personajeXXXTentacion = {
    avatar: 'https://e0.pxfuel.com/wallpapers/715/612/desktop-wallpaper-xxxtentacion-smiling-face.jpg',
    srcFondo: 'https://wallpapercave.com/wp/wp6686864.png',
    name: 'xxxtentacion',
    ubicacion: 'Deerfield Beach',
    desc: 'Un conocido rapero ingles que se dio a cononer por su espontaniedad y variedad pues manifestaba sus sentimientos en diferentes estilos y se plasmaba con autoriedad en todos ellos',
    ruta: {
      urlName: 'https://www.instagram.com/xxxtentacion/',
      urlFN: 'https://en.wikipedia.org/wiki/XXXTentacion',
      urlFM: 'https://www.nytimes.com/2018/06/18/arts/music/xxxtentacion-dead.html',
      urlUbi: 'https://www.bing.com/maps?q=deerfield+beach%2C+florida&FORM=HDRSC6&cp=26.301203%7E-80.093508&lvl=13.6',
      imgsFooter: {
        urls: [
          'https://images.genius.com/a899338be5f606ea4efcc2d371a87a6c.939x939x1.png',
          'https://www.thefamouspeople.com/profiles/images/xxxtentacion-1.jpg',
          'https://preview.redd.it/81ql9so6x6w11.jpg?auto=webp&s=e81f9ce8ddbfb3589cc476995a156ae506992853'],
        names: ['fase-1', 'fase-2', 'fase-3']
      }
    },
    fechas: {
      fechaNacimiento: 'Nacido el 23/enero/1998',
      fechaMuerte: 'Fallecido el 18 de junio de 2018'
    },
    color: { colorPrimario: '#404e67', colorSegundario: '#fff3eb' }
  }
  const personajeLarry = {
    avatar: 'https://github.com/larry1sf/pratica-card/blob/main/public/imgs/me2.jpg?raw=true',
    srcFondo: 'https://github.com/larry1sf/pratica-card/blob/main/public/imgs/bg-codigo.jpg?raw=true',
    name: 'Larry Moncada',
    ubicacion: ' Bucaramanga, cra19 #39-26',
    desc: 'Un joven desarrollador apasionado por las tegnologias nuevas de programacion y administracion de proyectos enfocado en el front-end y con conocimientos fundamentales del back-end',
    ruta: {
      urlName: 'https://www.facebook.com/alarry.ceballos',
      urlFN: 'https://www.google.com.co/maps/place/Cabecera+del+Llano/@6.9906174,-73.0474784,17z/data=!4m10!1m2!2m1!1sCalle+7+18-18,+Cabecera+Del+Llano,+Piedecuesta,+Santander,+681012,+Colombia!3m6!1s0x8e6847aa32a7ed7b:0x6e7027a2fa0e310c!8m2!3d6.99149!4d-73.04569!15sCktDYWxsZSA3IDE4LTE4LCBDYWJlY2VyYSBEZWwgTGxhbm8sIFBpZWRlY3Vlc3RhLCBTYW50YW5kZXIsIDY4MTAxMiwgQ29sb21iaWGSAQhidXNfc3RvcOABAA!16s%2Fg%2F11flbp_b0z?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D',
      urlFM: undefined,
      urlUbi: 'https://www.google.com/maps/place/Cra.+19+%2339-26,+Bol%C3%ADvar,+Bucaramanga,+Santander/@7.1170044,-73.1249267,930m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e683fd9e89e4a09:0xd6723fd288cf619c!8m2!3d7.1170044!4d-73.1223518!16s%2Fg%2F11j3nbsgh2?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D',
      imgsFooter: [
        'https://s.zst.com.br/cms-assets/2021/03/funciona-html-1-.jpg',
        'https://www.dicoding.com/blog/wp-content/uploads/2022/11/aaassdsd.png',
        'https://www.amincharoliya.com/_next/image?url=%2Fimages%2Farticles%2Fjs-class.png&w=3840&q=75']
    },
    fechas: { fechaNacimiento: 'nacido el 12/05/2005', fechaMuerte: undefined },
    color: {
      colorPrimario: '#85CEFF',
      colorSegundario: '#fff3eb'
    }
  }

  document.querySelector("[for='btnConfir2']")
    .addEventListener('click', () => {
      estado
        ? estado = false
        : estado = true

      const personaMostrar = estado
        ? usuarios(personajeLarry)
        : usuarios(personajeXXXTentacion)

      cambioInformacion(personaMostrar)
      avatarSiguiente()
    })
  const avatarSiguiente = () => {
    // inicio-miniAvatar&name
    const name = document.getElementsByClassName('name')[0]
    const img = [name.parentElement.children][0].img.children[0]

    const cambioImg = (Name) => { img.src = Name.avatar }
    const cambioName = (Name) => { name.innerText = Name.name }

    const cambioPorEstado = (nameInRound) => { cambioImg(nameInRound); cambioName(nameInRound) }
    estado
      ? cambioPorEstado(personajeXXXTentacion)
      : cambioPorEstado(personajeLarry)
  // fin-miniAvatar&name
  }

  const cambioInformacion = (personaMostrar) => {
    // inicio-fondo
    const bg = document.getElementById('bg-fondo')
    const bgFondo = window.getComputedStyle(bg).backgroundImage
    let newBgFondo = bgFondo; newBgFondo = `url('${personaMostrar.srcFondo}')`
    bg.style.background = newBgFondo; bg.style.backgroundSize = '100% 100%'
    // final-fondo

    // inicio-avatar
    const avatar = document.getElementById('a-1')
    avatar.ariaLabel = avatar.title = avatar.alt = personaMostrar.name
    avatar.src = personaMostrar.avatar
    // fin-avatar
    // inicio-name-perfil
    const namePerfil = document.getElementById('n-1')
    namePerfil.innerText = namePerfil.title = namePerfil.ariaLabel = namePerfil.title = personaMostrar.name
    namePerfil.href = personaMostrar.ruta.urlName
    // fin-name-pefil

    // inicio-fechas
    // eslint-disable-next-line no-unused-vars
    const [_, fechaNacimiento, fechaMuerte, Ubicacion] = namePerfil.parentElement.parentElement.children
    const [FechaNacimiento, FechaMuerte] = [personaMostrar.fechas.fechaNacimiento, personaMostrar.fechas.fechaMuerte]
      // const Undefinided = (value) => {
      // if (value === undefined) {
      // const after = window.getComputedStyle(fechaMuerte, '::after')
      // } return value
      // }
      ;[fechaNacimiento.href, fechaMuerte.href] = [personaMostrar.ruta.urlFN, personaMostrar.ruta.urlFM]
      ;[fechaNacimiento.innerText, fechaMuerte.innerText] = [FechaNacimiento, FechaMuerte]
    // fin-fechas
    // inicio-ubicacion
    Ubicacion.ariaLabel = Ubicacion.title = Ubicacion.innerText = personaMostrar.ubicacion
    Ubicacion.href = personaMostrar.ruta.urlUbi
    // fin-ubicacion
    // inicio-desc
    const [Desc] = document.getElementsByClassName('card-text')
    Desc.title = Desc.ariaLabel = `Descripcion de ${personaMostrar.name}`
    Desc.innerText = personaMostrar.desc
    // fin-desc

    // inicio-footer

    // final-footer
  }

  avatarSiguiente()
}
