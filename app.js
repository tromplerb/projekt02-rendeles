const orders = [

    {
        id: 1,
        pizza: "Margarita",
        extra: "-",
        ital: "Pepsi",
        ar: 2000,
        kep: ""
    },
    {
        id: 2,
        pizza: "Tonhal",
        extra: "Olajbogyó",
        ital: "Mentes víz",
        ar: 2300,
        kep: ""
    },
    {
        id: 3,
        pizza: "Magyaros",
        extra: "-",
        ital: "Sprite",
        ar: 2250,
        kep: ""
    },
    {
        id: 4,
        pizza: "Sonka-kukorica",
        extra: "Jalapeno",
        ital: "Fanta",
        ar: 2300,
        kep: ""
    },
    {
        id: 5,
        pizza: "Négysajtos",
        extra: "-",
        ital: "Fanta",
        ar: 2200,
        kep: ""
    },
    {
        id: 6,
        pizza: "Nutellás",
        extra: "-",
        ital: "Coke zero",
        ar: 2500,
        kep: ""
    }
]

orders.map((pizza)=>{

    let output = "";

    orders.map((elem)=>{
    
        output += `
        
        <div class='orders'>
        <p>id: ${elem.id}</p>
        <p>pizza: ${elem.pizza}</p>
        <p>extra: ${elem.extra}</p>
        <p>ital: ${elem.ital}</p>
        <p>ar: ${elem.ar}</p>
        </div>
    
        `
    })
    
    document.body.innerHTML = output;


   console.log(pizza);
})