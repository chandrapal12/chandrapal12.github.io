console.log("Script running...")
// Hide Cross Icon
document.querySelector('.close').style.display='none';

// Sidebar go and come
document.querySelector(".hamburger").addEventListener("click", ()=>{
    document.querySelector(".sidebar").classList.toggle('sidebarGo');
    if(document.querySelector(".sidebar").classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.close').style.display='none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.close').style.display='inline'
        },150);
            
    }

})

