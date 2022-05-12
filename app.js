const orders = [

    {
        id: 1,
        pizza: "Margarita",
        extra: "-",
        ital: "Pepsi",
        ar: 2000,
        kep: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    },
    {
        id: 2,
        pizza: "Tonhal",
        extra: "Olajbogyó",
        ital: "Mentes víz",
        ar: 2300,
        kep: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    },
    {
        id: 3,
        pizza: "Magyaros",
        extra: "-",
        ital: "Sprite",
        ar: 2250,
        kep: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    },
    {
        id: 4,
        pizza: "Sonka-kukorica",
        extra: "Jalapeno",
        ital: "Fanta",
        ar: 2300,
        kep: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    },
    {
        id: 5,
        pizza: "Négysajtos",
        extra: "-",
        ital: "Fanta",
        ar: 2200,
        kep: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    },
    {
        id: 6,
        pizza: "Nutellás",
        extra: "-",
        ital: "Coke zero",
        ar: 2500,
        kep: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    }
]

const result = document.querySelector(".result");

let output = "";

orders.map((order)=>{

    output += `
    
        <div class='order'>

            <div>
                <img src='${order.kep}' alt='pizza'/>
            </div>

            <h3>${order.pizza}</h3>
            <hr>
            <h4>Ár: ${order.ar}</h4>
            <p>Extra: ${order.extra}</p>
            <p>Ital: ${order.ital}</p>

        </div>

    `

})

result.innerHTML = output;