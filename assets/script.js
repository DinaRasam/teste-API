fetch("./assets/user.json")
    .then(res => res.json())
    .then(users => {
        
    users.forEach(element => {
        // listHtml += "<td>"+ element.id+ "</td>";
        // listHtml += "<td>"+ element.address.suite+ "</td>";
        // console.log(element.name)
    let listHtml =  document.getElementById("user");
        listHtml.innerHTML +=
                            '<div class="corps">'+
                                '<div class="section-haute">'+
                                    '<div class="sec1">'+
                                        '<div class="photo">'+ element.image +'</div>'+
                                    '</div>'+
                                    '<div class="sec2">'+
                                        '<div class="tableau">'+
                                            '<table class="tableau1">'+
                                                '<tr>'+
                                                    '<td class="descri">'+'ID:'+'</td>'+
                                                    '<td>'+ element.id +'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td class="descri">'+'NOM:'+'</td>'+
                                                    '<td>'+element.name+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td class="descri">'+'Username:'+'</td>'+
                                                    '<td>'+element.username+'</td>'+
                                                '</tr>'+
                                                '<tr>'+
                                                    '<td class="descri">'+'Mail'+'</td>'+
                                                    '<td>'+element.email+'</td>'+
                                                '</tr>'+
                                            '</table>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="section-bas">'+
                                    '<div class="items">'+
                                        '<h2>Adresse</h2>'+
                                        '<ul>'+
                                            '<li>'+element.address.street+'</li>'+
                                            '<li>'+element.address.suite+'</li>'+
                                            '<li>'+element.address.city+'</li>'+
                                            '<li>'+element.address.zipcode+'</li>'+
                                            '<li>'+element.address.geo.lat+'</li>'+
                                            '<li>'+element.address.geo.lng+'</li>'+
                                            
                                        '</ul>'+
                                    '</div>'+
                                    '<div class="items">'+
                                        '<h2>Contact</h2>'+
                                        '<ul>'+
                                            '<li>'+element.phone+'</li>'+
                                            '<li>'+element.website+'</li>'+
                                            
                                        '</ul>'+
                                    '</div>'+
                                    '<div class="items">'+
                                        '<h2>Company</h2>'+
                                        '<ul>'+
                                            '<li>'+element.company.name+'</li>'+
                                            '<li>'+element.company.catchPhrase+'</li>'+
                                            '<li>'+element.company.bs+'</li>'+
                                            
                                        '</ul>'+
                                    '</div>'+
                                    
                                '</div>'+
                            '</div>'
    });
    //  listHtml += "</div>";
    //  document.getElementById("user").innerHTML = listHtml;
  } )