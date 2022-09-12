export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  open(){
    Modal.wrapper.classList.add('open')
  },
  close(){
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

//Fazendo o 'esc' funcionar no modal para fechar pelo teclado
window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
  //console.log(event.key), pra decobrir qual o exato nome do esc

  if(event.key === 'Escape') {
    Modal.close()
  }
}