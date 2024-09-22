// import btnSeguir from './SeguirBtn'

export default function miniReact () {
  const usuarios = ({
    avatar = 'sin ruta de avatar',
    titlesName = 'no tiene un titulo',
    srcFondo = 'No tiene ruta de fondo',
    name = 'Default',
    ubicacion = 'nombe pre def',
    desc = 'Este Usuario de tiene descripcion',
    seguido = false,
    btnProps = ['no_tiene_id', 'aria_label'],
    btn = function (id = btnProps[0], titulo = btnProps[1]) {
      return `
                <button class="col-6 rounded btn-dark p-2" type="button" aria-label="${titulo}" title="${titulo}" id="${id}"
                  tabindex="6">seguir</button>
              `
    },
    ruta = { urlName: 'url default', urlFN: '', urlFM: '', urlUbi: 'sin ubicaion', avatarFooter: [], imgsFooter: [] },
    fechas = {
      fechaNacimiento: 'Fecha de nacimiento vacia',
      fechaMuerte: 'Fecha no fallecimineto vacia'
    },
    color = {
      colorPrimario: 'Color primario vacio',
      colorSegundario: 'Color segundario vacio'
    }
  }) => ({ avatar, titlesName, srcFondo, name, ubicacion, desc, seguido, btnProps, btn, ruta, fechas, color })

  let estado = false
  const clasesLogos = "class='col-8 avatar'"

  const personajeXXXTentacion = {
    avatar: 'https://e0.pxfuel.com/wallpapers/715/612/desktop-wallpaper-xxxtentacion-smiling-face.jpg',
    titlesName: ['Cantautor', 'Discograficas', 'Discos preciados'],
    srcFondo: 'https://wallpapercave.com/wp/wp6686864.png',
    name: 'Xxxtentacion',
    ubicacion: 'Deerfield Beach',
    desc: 'Un conocido rapero ingles que se dio a cononer por su espontaniedad y variedad pues manifestaba sus sentimientos en diferentes estilos y se plasmaba con autoriedad en todos ellos',
    seguido: false,
    btnProps: ['card_x', 'seguir a xxxtentacion'],
    ruta: {
      urlName: 'https://www.instagram.com/xxxtentacion/',
      urlFN: 'https://en.wikipedia.org/wiki/XXXTentacion',
      urlFM: 'https://www.nytimes.com/2018/06/18/arts/music/xxxtentacion-dead.html',
      urlUbi: 'https://www.bing.com/maps?q=deerfield+beach%2C+florida&FORM=HDRSC6&cp=26.301203%7E-80.093508&lvl=13.6',
      avatarFooter: [
        `<svg viewBox="0 0 1024 1024" ${clasesLogos} class="icon" height="3rem" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M698.624 501.376a170.112 170.112 0 0 1-170.112 170.112h-58.496a170.112 170.112 0 0 1-170.112-170.112V250.048a170.048 170.048 0 0 1 170.112-170.112h58.496a170.112 170.112 0 0 1 170.112 170.112v251.328z" fill="#ccd0e5"></path><path d="M725.76 410.624v104.512c0 104.448-87.68 189.12-195.904 189.12H462.464c-108.224 0-195.968-84.672-195.968-189.12V410.624h-31.808v123.904c0 118.912 99.904 215.296 223.04 215.296h76.736c123.264 0 223.104-96.384 223.104-215.296V410.624h-31.808z" fill="#acaca5"></path><path d="M453.184 719.104h92.16v162.944h-92.16z" fill="#acaca5"></path><path d="M734.656 944v-12.224c0-40.896-38.976-74.048-87.232-74.048h-296.32c-48.128 0-87.232 33.216-87.232 74.048v12.224h470.784z" fill="#acaca5"></path><path d="M520.896 225.088h174.464v41.152H520.896zM298.944 225.088h174.464v41.152H298.944zM520.896 297.536h174.464v41.152H520.896zM298.944 297.536h174.464v41.152H298.944zM520.896 375.68h174.464v41.216H520.896zM298.944 375.68h174.464v41.216H298.944zM520.896 448.256h174.464v41.088H520.896zM298.944 448.256h174.464v41.088H298.944z" fill="#5161A4"></path></g></svg>`,
        ` <svg version="1.1" ${clasesLogos} height="3rem" id="_x36_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="opacity:0.15;fill:#74e7d0;" d="M258.718,116.272v319.922H5.747V152.156C2.097,140.894,0,128.777,0,116.272 C0,52.039,52.117,0,116.272,0C156.505,0,192,20.428,212.816,51.495c12.427,18.486,19.728,40.777,19.728,64.777H258.718z"></path> <g> <g> <rect x="5.747" y="116.272" style="fill:#80736A;" width="500.505" height="319.922"></rect> <rect x="25.452" y="247.559" style="fill:#504F4F;" width="461.096" height="102.535"></rect> <g> <path style="fill:#E0E0E0;" d="M354.332,246.546H157.668v102.847h49.252c0.614-26.605,22.328-47.995,49.08-47.995 s48.466,21.39,49.08,47.995h49.252V246.546z"></path> <path style="fill:#6685ff;" d="M256,301.398c-26.752,0-48.466,21.39-49.08,47.995h98.16 C304.466,322.788,282.752,301.398,256,301.398z"></path> <g> <path style="fill:#595A59;" d="M256,305.969c-0.948,0-1.715-0.767-1.715-1.715v-28.59c0-0.948,0.767-1.715,1.715-1.715 c0.948,0,1.715,0.767,1.715,1.715v28.59C257.715,305.202,256.948,305.969,256,305.969z"></path> </g> </g> </g> <g> <path style="fill:#E0E0E0;" d="M115.615,282.939l-8.555,8.555l-7.668-7.668l8.555-8.555c-12.494-8.845-29.893-7.705-41.083,3.485 c-12.5,12.5-12.5,32.766,0,45.266c12.5,12.5,32.766,12.499,45.265,0C123.32,312.831,124.461,295.433,115.615,282.939z"></path> <path style="fill:#80736A;" d="M107.06,291.494l8.555-8.555c-1.035-1.462-2.175-2.873-3.485-4.183 c-1.31-1.31-2.721-2.45-4.183-3.486l-8.555,8.555L107.06,291.494z"></path> </g> <g> <path style="fill:#E0E0E0;" d="M400.426,319.858l8.555-8.555l7.668,7.668l-8.555,8.555c12.494,8.845,29.893,7.705,41.083-3.485 c12.5-12.5,12.5-32.766,0-45.266c-12.5-12.5-32.766-12.499-45.266,0C392.721,289.965,391.58,307.363,400.426,319.858z"></path> <path style="fill:#80736A;" d="M408.981,311.302l-8.555,8.555c1.035,1.462,2.175,2.873,3.485,4.183 c1.31,1.31,2.721,2.45,4.183,3.486l8.555-8.555L408.981,311.302z"></path> </g> <g> <rect x="65.489" y="377.083" style="fill:#E0E0E0;" width="32.017" height="32.017"></rect> <rect x="119.553" y="377.083" style="fill:#E0E0E0;" width="32.017" height="32.017"></rect> <rect x="178.926" y="386.51" style="fill:#E0E0E0;" width="287.971" height="10.285"></rect> <rect x="336.89" y="375.368" style="fill:#D0CDCD;" width="14.305" height="29.14"></rect> </g> <g> <g> <circle style="fill:#EEEFDE;" cx="116.3" cy="116.274" r="116.274"></circle> <g> <path style="fill:#4A4D43;" d="M151.102,32.127c-8.345-10.471-21.199-17.189-35.63-17.189 c-13.506,0-25.634,5.884-33.975,15.221l21.876,56.737h26.611L151.102,32.127z"></path> <path style="fill:#4A4D43;" d="M23.428,131.496c-4.895,12.463-4.286,26.953,2.929,39.451 c6.753,11.697,17.912,19.258,30.17,21.813l38.198-47.314l-13.305-23.046L23.428,131.496z"></path> <path style="fill:#4A4D43;" d="M173.54,192.759c13.241-1.992,25.485-9.765,32.701-22.262 c6.753-11.697,7.721-25.141,3.805-37.034l-60.074-9.423l-13.306,23.046L173.54,192.759z"></path> </g> <circle style="fill:#4A4D43;" cx="116.3" cy="116.274" r="9.143"></circle> </g> <g> <path style="fill:#EEEFDE;" d="M512,116.272c0,12.66-2.02,24.777-5.748,36.194c-15.223,46.524-58.951,80.078-110.524,80.078 c-64.233,0-116.272-52.039-116.272-116.271c0-20.971,5.592-40.622,15.301-57.631c10.252-18.097,25.398-33.165,43.495-43.495 C355.184,5.515,374.835,0,395.728,0c20.349,0,39.456,5.204,56.078,14.369c19.262,10.641,35.106,26.563,45.747,45.748 C506.718,76.738,512,95.922,512,116.272z"></path> <g> <path style="fill:#4A4D43;" d="M430.503,32.127c-8.345-10.471-21.199-17.189-35.63-17.189 c-13.506,0-25.634,5.884-33.975,15.221l21.876,56.737h26.611L430.503,32.127z"></path> <path style="fill:#4A4D43;" d="M302.829,131.496c-4.895,12.463-4.286,26.953,2.929,39.451 c6.753,11.697,17.912,19.258,30.17,21.813l38.198-47.314l-13.305-23.046L302.829,131.496z"></path> <path style="fill:#4A4D43;" d="M452.94,192.759c13.24-1.992,25.485-9.765,32.701-22.262 c6.753-11.697,7.721-25.141,3.805-37.034l-60.074-9.423l-13.306,23.046L452.94,192.759z"></path> </g> <circle style="fill:#4A4D43;" cx="395.7" cy="116.274" r="9.143"></circle> </g> </g> </g> </g> </g></svg>`,
        `<svg viewBox="0 0 1024 1024" ${clasesLogos} height="3rem"  class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier" style="transform:translate(10px,0)"><path d="M512.24064 581.9136c-38.478848 0-69.671936-31.193088-69.671936-69.67296 0-38.477824 31.193088-69.670912 69.67296-69.670912 38.477824 0 69.670912 31.193088 69.670912 69.671936s-31.193088 69.671936-69.671936 69.671936m0-487.7056C281.367552 94.208 94.208 281.368576 94.208 512.241664S281.367552 930.27328 512.24064 930.27328c230.873088 0 418.03264-187.159552 418.03264-418.03264C930.27328 281.368576 743.113728 94.208 512.24064 94.208" fill="#bdd1d1"></path><path d="M271.450112 512.241664h-40.96c0-75.257856 29.30688-146.01216 82.52416-199.227392 53.214208-53.21728 123.967488-82.52416 199.225344-82.52416v40.96c-64.316416 0-124.78464 25.04704-170.263552 70.526976-45.478912 45.479936-70.525952 105.947136-70.525952 170.264576m240.789504 281.750528v-40.96c64.318464 0 124.786688-25.04704 170.2656-70.525952 45.478912-45.478912 70.525952-105.947136 70.525952-170.264576h40.96c0 75.25888-29.30688 146.01216-82.523136 199.228416-53.216256 53.215232-123.969536 82.522112-199.228416 82.522112M358.540288 512.241664h-40.96c0-107.33568 87.323648-194.660352 194.659328-194.660352v40.96c-84.749312 0-153.699328 68.950016-153.699328 153.700352m153.699328 194.660352v-40.96c84.75136 0 153.7024-68.950016 153.7024-153.700352h40.96c0 107.33568-87.325696 194.660352-194.6624 194.660352m0-243.852288c-27.124736 0-49.191936 22.0672-49.191936 49.191936s22.0672 49.191936 49.19296 49.191936 49.19296-22.0672 49.19296-49.19296c0-27.123712-22.0672-49.190912-49.19296-49.190912m0 139.343872c-49.71008 0-90.15296-40.441856-90.15296-90.15296 0-49.709056 40.44288-90.150912 90.15296-90.150912 49.71008 0 90.15296 40.441856 90.15296 90.151936s-40.44288 90.151936-90.15296 90.151936m0-508.184576C281.367552 94.208 94.208 281.368576 94.208 512.241664 94.208 743.114752 281.367552 930.27328 512.24064 930.27328c230.873088 0 418.03264-187.159552 418.03264-418.03264C930.27328 281.368576 743.113728 94.208 512.24064 94.208m0 40.96c50.92352 0 100.3008 9.96352 146.760704 29.61408 44.89728 18.991104 85.22752 46.184448 119.870464 80.827392 34.642944 34.64192 61.836288 74.973184 80.826368 119.86944 19.651584 46.461952 29.615104 95.839232 29.615104 146.761728s-9.96352 100.3008-29.61408 146.761728c-18.991104 44.896256-46.184448 85.226496-80.827392 119.86944-34.64192 34.64192-74.973184 61.836288-119.86944 80.826368-46.461952 19.65056-95.839232 29.61408-146.761728 29.61408s-100.3008-9.96352-146.761728-29.61408c-44.896256-18.99008-85.226496-46.183424-119.86944-80.826368-34.64192-34.642944-61.836288-74.973184-80.826368-119.86944-19.65056-46.460928-29.61408-95.839232-29.61408-146.761728 0-50.92352 9.96352-100.3008 29.61408-146.760704 18.99008-44.89728 46.183424-85.22752 80.826368-119.870464s74.973184-61.836288 119.86944-80.826368C411.93984 145.13152 461.318144 135.168 512.24064 135.168" fill="#000000"></path></g></svg>`
      ],
      imgsFooter: [
        'https://raw.githubusercontent.com/larry1sf/pratica-card/main/public/imgs/x/footer-1.webp',
        'https://raw.githubusercontent.com/larry1sf/pratica-card/main/public/imgs/x/footer-2.webp',
        'https://raw.githubusercontent.com/larry1sf/pratica-card/main/public/imgs/x/footer-3.webp'
      ]
    },
    fechas: {
      fechaNacimiento: 'Nacido el 23/enero/1998',
      fechaMuerte: 'Fallecido el 18 de junio de 2018'
    },
    color: { colorPrimario: '#404e67', colorSegundario: '#fff3eb' }
  }

  const personajeLarry = {
    avatar: 'https://github.com/larry1sf/pratica-card/blob/main/public/imgs/me2.webp?raw=true',
    titlesName: ['Html', 'Css', 'JavaScript'],
    srcFondo: 'https://github.com/larry1sf/pratica-card/blob/main/public/imgs/bg-codigo.webp?raw=true',
    name: 'Larry Moncada',
    ubicacion: ' Bucaramanga, cra19 #39-26',
    desc: 'Un joven desarrollador apasionado por las tegnologias nuevas de programacion y administracion de proyectos enfocado en el front-end y con conocimientos fundamentales del back-end',
    seguido: true,
    btnProps: ['card_l', 'seguir a larry ceballos'],
    ruta: {
      urlName: 'https://www.facebook.com/alarry.ceballos',
      urlFN: 'https://www.google.com.co/maps/place/Cabecera+del+Llano/@6.9906174,-73.0474784,17z/data=!4m10!1m2!2m1!1sCalle+7+18-18,+Cabecera+Del+Llano,+Piedecuesta,+Santander,+681012,+Colombia!3m6!1s0x8e6847aa32a7ed7b:0x6e7027a2fa0e310c!8m2!3d6.99149!4d-73.04569!15sCktDYWxsZSA3IDE4LTE4LCBDYWJlY2VyYSBEZWwgTGxhbm8sIFBpZWRlY3Vlc3RhLCBTYW50YW5kZXIsIDY4MTAxMiwgQ29sb21iaWGSAQhidXNfc3RvcOABAA!16s%2Fg%2F11flbp_b0z?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D',
      urlFM: undefined,
      urlUbi: 'https://www.google.com/maps/place/Cra.+19+%2339-26,+Bol%C3%ADvar,+Bucaramanga,+Santander/@7.1170044,-73.1249267,930m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e683fd9e89e4a09:0xd6723fd288cf619c!8m2!3d7.1170044!4d-73.1223518!16s%2Fg%2F11j3nbsgh2?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D',
      avatarFooter: [`<svg class="col-12  avatar" height="3rem" width="100%" viewBox="0 0 32 32"
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
                  </svg>`],
      imgsFooter: [
        'https://raw.githubusercontent.com/larry1sf/pratica-card/cb85ca00a9a6821e7df72c0e19311b792c630cec/public/svg/html-console-bg.svg',
        'https://raw.githubusercontent.com/larry1sf/pratica-card/cb85ca00a9a6821e7df72c0e19311b792c630cec/public/svg/css-console-bg.svg',
        'https://raw.githubusercontent.com/larry1sf/pratica-card/cb85ca00a9a6821e7df72c0e19311b792c630cec/public/svg/js-console-bg.svg']
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

    const cambioImg = (Img = '') => { img.src = Img.avatar }
    const cambioName = (Name = '') => { name.innerText = Name.name }
    const cambioPorEstado = (nameInRound = '') => { cambioImg(nameInRound); cambioName(nameInRound) }

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
    function actualizacionFecha (params) {
      fechaMuerte.innerText = personaMostrar.fechas.fechaMuerte
      const nuevaClase = fechaMuerte.className.replace('d-none', ' d-block ')
      fechaMuerte.className = nuevaClase
    }
    // fin-fechas
    personaMostrar.fechas.fechaMuerte ? actualizacionFecha() : console.log('borar del dom', fechaMuerte.classList += ' d-none ')
    fechaMuerte.classList += ' px-0'

    fechaNacimiento.innerText = personaMostrar.fechas.fechaNacimiento
    fechaNacimiento.classList += ' px-0'
    ;[fechaNacimiento.href, fechaMuerte.href] = [personaMostrar.ruta.urlFN, personaMostrar.ruta.urlFM]
    // inicio-ubicacion
    Ubicacion.ariaLabel = Ubicacion.title = Ubicacion.innerText = personaMostrar.ubicacion
    Ubicacion.href = personaMostrar.ruta.urlUbi
    // fin-ubicacion

    // inicio-desc
    const [Desc] = document.getElementsByClassName('card-text')
    Desc.title = Desc.ariaLabel = `Descripcion de ${personaMostrar.name}`
    Desc.innerText = personaMostrar.desc
    // fin-desc

    // inicio-boton
    const titulo = 'boton para seguir prueba '
    const btn = `<button class="col-6 rounded btn-dark p-2" type="button" aria-label="${titulo}" title="${titulo}" id="boton-seguir"
                  tabindex="6">seguir</button>`

    const conteFollow = document.getElementById('conte-btn')
    let boton = document.getElementById('boton-seguir')
    if (!boton) {
      const rango = document.createRange()
      const fragmento = rango.createContextualFragment(btn)
      conteFollow.append(fragmento)
      boton = document.getElementById('boton-seguir')
    }
    boton.innerText = personaMostrar.seguido ? 'seguido' : 'seguir'

    boton.onclick = () => {
      personaMostrar.seguido = !personaMostrar.seguido
      boton.innerText = personaMostrar.seguido ? 'seguido' : 'seguir'
      console.log(`Estado de ${personaMostrar.name}: ${personaMostrar.seguido ? 'seguido' : 'seguir'}`)
    }
    // fin-boton

    // inicio-footer
    let x; const a = document.getElementById('footer').children[1]
    ;[a].forEach(e => { x = [...e.children] })
    x.forEach((e, index) => {
      // creando cambio de bg para x
      const classLarry = x[index].className.replace('footer-x', '')
      personaMostrar.name[0].toUpperCase() === 'X'
        ? x[index].classList += ' footer-x'
        : x[index].className = classLarry
      x[index].title = x[index].ariaLabel = personaMostrar.titlesName[index]

      // careando load
      const creandoLoad = () => {
        const svgLoad = document.createElement('div')
        svgLoad.className = 'conte-load'
        svgLoad.innerHTML = load
        e.append(svgLoad)
      }
      e.children[1] === undefined
        ? creandoLoad()
        : e.children[1].className = 'conte-load'; e.children[1].innerHTML = `${load}`
        // cargando las imgs o svgs
      setTimeout(() => {
        // quitando load
        e.children[1].remove()
        // actualizacion logros
        e.children[0].innerText = personaMostrar.titlesName[index]
        const svg = document.createElement('div'); svg.innerHTML = personaMostrar.ruta.avatarFooter[index]
        e.append(svg)
      }, 300)
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
