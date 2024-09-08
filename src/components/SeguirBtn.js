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
