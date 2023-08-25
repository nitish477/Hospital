let state=false;

function them(){
  
  const val= document.getElementById('img');
    const cng= document.getElementById('cng');
    if(state==false)
    {
        cng.className='bg-black';
        state=true;
        val.src='./Images/Icon/light.png';
       
    }
    else 
    {
      cng.className='bg-light'; 
      state=false;
      val.src='./Images/Icon/dark.png'
    }
}