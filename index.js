function importar (){
    console.log("importou");
};
importar();

var createButton = function(){
    var button = document.createElement('button');
    button.innerHTML = 'Create Button';
    let i = 0;
    button.onclick = function(){
    //    alert('Alertou');
    //    return false;
    createButton();
    };
    document.body.appendChild(button);
};



