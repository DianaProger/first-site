

const change = document.getElementById("change")

function change_all(){
    if (document.getElementsByTagName('div')[4].innerText==='Sheveleva'){
        
        document.getElementsByTagName('div')[4].innerText='Шевелева';
        document.getElementsByTagName('div')[5].innerText='Диана';
        document.getElementsByTagName('div')[6].innerText='Александровна';
        document.getElementsByTagName('div')[7].innerText='жен.';
        document.getElementsByTagName('div')[9].innerText='г. Санкт-Петербург';
    }
    else{

        if (document.getElementsByTagName('div')[4].innerText==='Шевелева'){
      
            document.getElementsByTagName('div')[4].innerText='Sheveleva';
            document.getElementsByTagName('div')[5].innerText='Diana';
            document.getElementsByTagName('div')[6].innerText='Alexandrovna';
            document.getElementsByTagName('div')[7].innerText='female';
            document.getElementsByTagName('div')[9].innerText='Saint-Petersburg';
            



        }
    }
}

change.addEventListener("click", change_all)