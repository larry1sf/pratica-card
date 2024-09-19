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
    avatar: 'https://github.com/larry1sf/pratica-card/blob/main/public/imgs/me2.webp?raw=true',
    srcFondo: 'https://github.com/larry1sf/pratica-card/blob/main/public/imgs/bg-codigo.webp?raw=true',
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

  const avatarSiguiente = () => {
    // inicio-miniAvatar&name
    const name = document.getElementsByClassName('name')[0]
    const img = [name.parentElement.children][0].img.children[0]

    const cambioImg = (Img) => { img.src = Img.avatar }
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
    const loader = document.createElement('div')
    const load = ' <span class="item-load"></span>  <span class="item-load"></span>  <span class="item-load"></span> '
    loader.innerHTML = `<div class="conte-load" id="load" >${load}</div>`
    bg.style.background = ''
    bg.append(loader)

    setTimeout(() => {
      loader.innerHTML = ''
      const bgFondo = window.getComputedStyle(bg).backgroundImage
      let newBgFondo = bgFondo; newBgFondo = `url('${personaMostrar.srcFondo}')`
      bg.style.background = newBgFondo; bg.style.backgroundSize = '100% 100%'
    }, 300)
    // final-fondo

    // inicio-avatar
    const avatar = document.getElementById('conteAvatar')
    const avaLoader = document.createElement('div')
    avatar.innerHTML = ''
    avaLoader.innerHTML = ` ${load}`
    // avaLoader.className = 'conte-load'
    setTimeout(() => {
      avaLoader.remove()
      avatar.innerHTML = `<img src="${personaMostrar.avatar}" alt="${personaMostrar.avatar}" aria-label="${personaMostrar.avatar}" class="avatar img-fluid h-100 col-4 col-sm-3 rounded-pill p-0" width="1" height="1"/>`
    }, 300)
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
    //   if (value) {
    //     console.log('w')
    //   } else {
    //     fechaMuerte.style.display = ' none'
    //     console.log('no tiene fecha de muerte, ¡sigues vivo!')
    //   }
    // }
    // Undefinided(FechaMuerte)
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
    const a = document.getElementById('footer').children[1]
    ;[a].forEach((e, i) => {
      const x = [...e.children]

      x.forEach((e, index) => {
        // cargando load
        const svgLoad = document.createElement('div')
        svgLoad.className = 'conte-load'

        if (e.children[1] === undefined) {
          svgLoad.innerHTML = load
          e.append(svgLoad)
        } else { e.children[1].className = 'conte-load'; e.children[1].innerHTML = `${load}` }

        setTimeout(() => {
          // quitando load
          e.children[1].remove()
          // arrays svgs
          const svgs = [`<svg class="col-12  avatar" height="3rem" width="100%" viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_html">
                      <polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201"
                        style="fill:#e44f26"></polygon>
                      <polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#f1662a">
                      </polygon>
                      <polygon
                        points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407"
                        style="fill:#ebebeb"></polygon>
                      <polygon
                        points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434"
                        style="fill:#ebebeb"></polygon>
                      <polygon
                        points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407"
                        style="fill:#fff"></polygon>
                      <polygon
                        points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151"
                        style="fill:#fff"></polygon>
                    </g>
                  </svg>`, `<svg class="col-12  avatar" height="3rem" width="100%" viewBox="0 0 32 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_css">
                      <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path>
                      <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>
                      <path
                        d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                        fill="white"></path>
                    </g>
                  </svg>`, ` <svg class="col-12  avatar" height="3rem" width="100%" viewBox="0 0 32 32" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_js">
                      <rect x="2" y="2" width="28" height="28" fill="#FFCA28"></rect>
                      <path
                        d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z"
                        fill="#3E3E3E"></path>
                      <path
                        d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z"
                        fill="#3E3E3E"></path>
                    </g>
                  </svg>`]
          const svg = document.createElement('div')
          svg.innerHTML = svgs[index]
          e.append(svg)
        }, 300)
      })
    })

    // final-footer
  }

  const root = () => {
    const personaMostrar = estado
      ? usuarios(personajeLarry)
      : usuarios(personajeXXXTentacion)

    cambioInformacion(personaMostrar)
    avatarSiguiente()
  }

  document.querySelector("[for='btnConfir2']")
    .addEventListener('click', () => {
      estado
        ? estado = false
        : estado = true
      root()
    })
  root()
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(`${position.coords.latitude},${position.coords.longitude}`)
  })
} else {
  console.log('no tiene geolocalizador')
}
