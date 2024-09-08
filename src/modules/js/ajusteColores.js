export function CambioColores () {
  const btnCambio = document.getElementById('checkSwitch')
  btnCambio.addEventListener('click', () => {
    document.body.classList.toggle('theme-dark')
  })
}
