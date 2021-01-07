
function main () {

    var competencias = ["Java", "Javascript", "C++", "C", "SQL Oracle", "JUnit", "Spring Framework", "Maven", "WebSphere Application Server", 
        "Dojo" , "JQuery", "Git", "SVN", "CVS"
    ];

    var ambientes = ["Eclipse", "Rational Application Developer", "IntelIJ IDEA", "Postman", "SQL Developer", "SQL Tools", "SoapUI", "Tortoise GIT", 
        "Tortoise SVN"
    ];

    var experiencias = [
        {
            titulo : "Julio 2019 – Actualidad",
            descripcion : "A partir de Julio, empecé a trabajar en otro proyecto, con un nuevo equipo. Se trata de una Aplicación en el cual manejamos las dos partes, frontend y backend. Por el lado del backend también es una aplicación Java (6) que expone servicios rest para devolver datos, estos datos vienen por parte del envío y recepción de mensajes a una cola MQ, los datos se parcean y se envían a través de los servicios rest expuestos. Del lado frontend de la aplicación, se maneja JavaScript a través de Dojo Framework, con el llamado a los servicios backend por medio de promesas."
        },
        {
            titulo : "Septiembre 2018 – Julio 2019",
            descripcion : "Trabaje en Proyectos Maven modulados de backend hecho en Java (6) que exponían servicios rest, con comunicación con una base de datos Oracle a través de Spring para el manejo de datos. Expuestas en un servidor WebSphere, las diferentes aplicaciones se comunicaban internamente a través de servicios webservices xml."
        }
    ];

    var antiguosEmpleos = [
        {
            nombre : "Empresa: Maxikiosco y Comercio",
            periodo : "2015-2016",
            puesto : "Puesto ocupado: Vendedor",
            treasRealizadas : "Detalle de tareas realizadas: Atención al público y cobro."
        },
        {
            nombre : "Empresa: Disqueria Pappo Records",
            periodo : "Enero 2014 – Marzo 2014",
            puesto : "Puesto ocupado: Cadete",
            treasRealizadas : "Detalle de tareas realizadas: Atención al público. Reposición y manejo de stock."
        }
    ];


    /**
     * Llenado de contenido
     */
    for (let index = 0; index < competencias.length; index++) {
        $('#competencias').append("<p> + " + competencias[index] + "</p>");
    }

    for (let index = 0; index < experiencias.length; index++) {
        $('#experiencias').append('<div class="subSeccion"><div class="contenedorTitulos"><h3 class="subtitulos">' + 
            experiencias[index].titulo + '</h3></div><p>' + experiencias[index].descripcion + '</p></div>');    
    }

    for (let index = 0; index < antiguosEmpleos.length; index++) {
        $('#antiguosEmpleos').append('<div class="subSeccion"><div class="contenedorTitulos"><h3 class="subtitulos">' + 
            antiguosEmpleos[index].nombre + '</h3></div>' + 
            '<p>' + antiguosEmpleos[index].periodo + '</p>' +
            '<p>' + antiguosEmpleos[index].puesto + '</p>' +
            '<p>' + antiguosEmpleos[index].treasRealizadas + '</p></div>');
    }

    for (let index = 0; index < ambientes.length; index++) {
        $('#ambientes').append("<p> + " + ambientes[index] + "</p>");
    }

    /**
     * Funciones
     */
    var proporcion = 4;
    function escrollear(id) {
        /*// Remove "link" from the ID
        id = id.replace("link", "");*/
        // Scroll
        $('html,body').animate({
            scrollTop: $("#" + id).position().top - $("#" + id).height() * proporcion,
        }, 'slow');
    }

    /**
     * Eventos
     */

     /*
    $('#nombre').click(function () {
        $(location).attr('href',"https://www.linkedin.com/in/miguel-juarez/");
    });
    
    */

    $('#acercaDeNav').click(function () {
        escrollear('acercaDe');
    });

    $('#competenciasNav').click(function () {
        escrollear('competencia');
    });

    $('#experienciaNav').click(function () {
        escrollear('experiencia');
    });

    $('#antiguosEmpleosNav').click(function () {
        escrollear('antiguosEmpleo');
    });

    $('#contactoNav').click(function () {
        escrollear('contacto');
    });


    /**
     * Funciones responsive
     */

    var menuIcon = $('.menuIcon');
    var listaMenu = $('#menu');
    var main;

    menuIcon.click(function() {
        debugger
        if (listaMenu.hasClass('mostrar')) {
            listaMenu.removeClass('mostrar');
            proporcion = 4;
        } else {
            listaMenu.addClass('mostrar');
            proporcion = 14;
        }

    });
     
}

this.main();