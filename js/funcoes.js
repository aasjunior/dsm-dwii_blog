/* Lê o XML */  
xmlhttp = new XMLHttpRequest();//Instanciação do objeto 
xmlhttp.open("GET", "xml/db_conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;//Informa que o tipo de arquivo é XML
let x = xmlDoc.getElementsByTagName("postagem");//let - variavel para conjunto de dados
/* Exibe o conteúdo */
function funcaoConteudo(){
    n = x.length-1;
    for (var i = n; i >= 0; i--){
        var destaque = (i == n)?'#c0c0c0':'#ffffff';
        document.write("<tr bgcolor='"+ destaque +"'><td><a href='postagem.html?id=" + i + "'>"+ x[i].getAttribute("codigo") + "</a></td>" +
                       "<td><img src='imgs/" + x[i].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='150'></td>" +
                       "<td>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</td>" +          
                       "<td>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) + "</td></tr>");}
}
/* Exibe a postagem */  
function funcaoPostagem(){
    let url = new URL(window.location.href);
    let search_params = url.searchParams; 
    i = search_params.get('id');    
        document.write("<tr bgcolor='#ffffff'><td>"+ x[i].getAttribute("codigo") + "</td>" +
                       "<td><img src='imgs/" + x[i].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='150'></td>" +
                       "<td>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</td>" +
                       "<td>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</td></tr>");      
}