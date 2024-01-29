const flexCheckDefault = document.getElementById('flexCheckDefault')
const poner = document.getElementById('poner')
const aparescer = document.getElementById('aparesca')
const cerrar= document.getElementById('cerrar')

flexCheckDefault.addEventListener('click',()=>{
    poner.style.display='block'
    aparescer.style.display='none'
    
})
cerrar.addEventListener('click',()=>{
  alert('quiers cerrar registro')
    
})


