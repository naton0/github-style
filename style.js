try {
    
    let container = document.getElementById('js-repo-pjax-container');
    document.getElementsByClassName('repohead')[0].style.boxShadow = 'inset 0 -1px 0 #e1e4e8';
    
    container.childNodes[1].childNodes.forEach(function(item){
        
        if(item.nodeType === 1) {
            
            item.classList.add('container-xl')
            
        }
        
    });
    
} catch(e) {
    console.log(e);
}

