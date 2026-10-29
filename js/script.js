// DATOS PARA FILTRAR //

// PRIMER FILTRO: COLECCIONES //

const dwfrida = [

 //Colecciones//

 {id: 1, name:"Signature Collection.", image: "img/signature collection.jpg", genero: "Colecciones", description: "Nuestra colección exclusiva que combina elegancia y estilo, diseñada para quienes buscan destacar con prendas únicas y sofisticadas." },
 {id: 2, name:"Seasonal Edit.", image: "img/seasonal edit.jpg", genero: "Colecciones", description: "Una colección inspirada en cada temporada, con piezas contemporáneas que siguen las tendencias sin perder tu estilo personal." },
 {id: 3, name:"New Arrival.", image: "img/new arrivals.jpg", genero: "Colecciones", description: "Descubre las ultimas tendencias, diseñadas para quienes buscan incorporar lo más nuevo en su estilo diario." },
 {id: 4, name:"Essentials.", image: "img/essentials.jpg", genero: "Colecciones", description: "Piezas versátiles que combinan simplicidad, elegancia y funcionalidad para acompañarte en cualquier ocasión." },

 // Tienda //

{id: 5, name:"Accesorios.", image: "img/accesories.png", genero: "Tienda", description: "Descubre nuestra selección de accesorios que complementan tu estilo y añaden ese toque especial a cualquier outfit." },
{id: 6, name:"Bolsos.", image: "img/bags.jpg", genero: "Tienda", description: "Diseñados para acompañarte a donde vayas. Descubre bolsos elegantes y versátiles que combinan practicidad con un estilo atemporal." },
{id: 7, name:"Joyeria.", image: "img/jewelry.jpg", genero: "Tienda", description: "Los pequeños detalles crean grandes diferencias. Explora piezas delicadas que aportan un toque sutil de sofisticación a cada look." },
{id: 8, name:"Lentes de sol.", image: "img/sunglasses.jpg", genero: "Tienda", description: "Protege tu mirada con nuestra colección de lentes de sol diseñadas para complementar tu estilo y ofrecer la máxima protección solar." },

];

// Obtener los contenedores y botones del DOM
const dwfridaContainer = document.getElementById("Collections-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwfridaToRender = [];
    if (genero === "all") {
        dwfridaToRender = dwfrida;
    } else {
        dwfridaToRender = dwfrida.filter(Dwfrida => Dwfrida.genero === genero);
    }
}  