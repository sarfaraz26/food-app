import { Component } from '@angular/core';

@Component({
  selector: 'app-products-screen',
  templateUrl: './products-screen.component.html',
  styleUrl: './products-screen.component.css'
})
export class ProductsScreenComponent {
  
  categories = [
    {
        "id": 1,
        "name": "Burgers"
    },
    {
        "id": 2,
        "name": "Pizza"
    },
    {
        "id": 3,
        "name": "Salads"
    },
    {
        "id": 4,
        "name": "Pasta"
    },
    {
        "id": 5,
        "name": "Sushi"
    },
    {
        "id": 6,
        "name": "Desserts"
    }
]

  types = [
    {
        "id" : 1,
        "name" : "Veg"
    },
    {
        "id" : 2,
        "name" : "Non-Veg"
    }
  ]

  foods = [
    {
        "id": 1,
        "name": "Cheeseburger",
        "description": "Juicy beef patty with cheddar cheese, lettuce, and tomato on a toasted bun.",
        "categoryId": 1,
        "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/640px-Cheeseburger.jpg",
        "typeId" : 2, 
        "price": 11.99
    },
    {
        "id": 2,
        "name": "Margherita Pizza",
        "description": "Classic pizza with tomato, mozzarella cheese, and fresh basil.",
        "categoryId": 2,
        "img" : "https://www.rakijagrill.com/wp-content/uploads/2020/07/Margherita-.jpg",
        "typeId": 1,
        "price": 12.99
    },
    {
        "id": 3,
        "name": "Caesar Salad",
        "description": "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        "categoryId": 3,
        "img" : "https://www.joyfulhealthyeats.com/wp-content/uploads/2022/04/Classic-Caesar-Salad-with-Homemade-Croutons-web-4.jpg",
        "typeId" : 1,
        "price": 8.49
    },
    {
        "id": 4,
        "name": "Spaghetti Carbonara",
        "description": "Pasta with a creamy egg and cheese sauce, pancetta, and black pepper.",
        "categoryId": 4,
        "img" : "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg",
        "typeId" : 2,
        "price": 13.49
    },
    {
        "id": 5,
        "name": "California Roll",
        "description": "Sushi roll with crab meat, avocado, and cucumber, wrapped in seaweed and rice.",
        "categoryId": 5,
        "img" : "https://norecipes.com/wp-content/uploads/2019/12/best-california-roll-004.jpg",
        "typeId" : 2,
        "price": 14.99
    },
    {
        "id": 6,
        "name": "Chocolate Lava Cake",
        "description": "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        "categoryId": 6,
        "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhmoBBy175ke3-w_-8t513-ELvAhemzEOdXQ&s",
        "typeId" : 1.,
        "price": 6.99
    },
    {
        "id": 7,
        "name": "Veggie Burger",
        "description": "Vegetarian patty with lettuce, tomato, and avocado on a whole wheat bun.",
        "categoryId": 1,
        "img" : "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/veg-burger-recipe-1.jpg",
        "typeId" : 1,
        "price": 10.99
    },
    {
        "id": 8,
        "name": "Pepperoni Pizza",
        "description": "Classic pizza topped with spicy pepperoni and melted mozzarella cheese.",
        "categoryId": 2,
        "img" : "https://againstthegraingourmet.com/cdn/shop/products/Pepperoni_Pizza_Beauty_1000x1000.jpg?v=1658703726",
        "typeId" : 2,
        "price": 13.49
    },
    {
        "id": 9,
        "name": "Greek Salad",
        "description": "A fresh salad with cucumbers, tomatoes, olives, feta cheese, and a lemon-oregano dressing.",
        "categoryId": 3,
        "img" : "https://www.themediterraneandish.com/wp-content/uploads/2023/08/Greek-salad-web-story-poster-image.jpeg",
        "typeId" : 1,
        "price": 9.99
    },
    {
        "id": 10,
        "name": "Fettuccine Alfredo",
        "description": "Creamy pasta with fettuccine noodles, parmesan cheese, and garlic sauce.",
        "categoryId": 4,
        "img" : "https://assets.bonappetit.com/photos/57e2c3599f19b4610e6b79f6/1:1/w_3260,h_3260,c_limit/fettuccine-alfredo.jpg",
        "typeId" : 1,
        "price": 12.49
    },
    {
        "id": 11,
        "name": "Dragon Roll",
        "description": "Sushi roll with eel, avocado, and cucumber, topped with spicy mayo.",
        "categoryId": 5,
        "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPifwCbzGzZmSSOzB-q4U48Nx_acrbBEcfA&s",
        "typeId" : 2,
        "price": 15.99
    },
    {
        "id": 12,
        "name": "Tiramisu",
        "description": "Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.",
        "categoryId": 6,
        "img" : "https://www.flavoursholidays.co.uk/wp-content/uploads/2020/07/Tiramisu.jpg",
        "typeId" : 1,
        "price": 6.49
    },
    {
        "id": 13,
        "name": "BBQ Burger",
        "description": "Beef patty topped with chicken, barbecue sauce, onion rings, and cheddar cheese.",
        "categoryId": 1,
        "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIRgpwRSeV1y0lr8tAPwi3jwkCjEqmvsjYA&s",
        "typeId" : 2,
        "price": 12.49
    },
    {
        "id": 14,
        "name": "Four Cheese Pizza",
        "description": "Pizza with a blend of turkey, mozzarella, cheddar, parmesan, and gorgonzola cheeses.",
        "categoryId": 2,
        "img" : "https://static.onecms.io/wp-content/uploads/sites/19/2010/04/12/oh-four-cheese-pizza-x.jpg",
        "typeId" : 2,
        "price": 14.49
    },
    {
        "id": 15,
        "name": "Caprese Salad",
        "description": "Tomatoes, mozzarella cheese, and basil drizzled with balsamic glaze.",
        "categoryId": 3,
        "img" : "https://whatsgabycooking.com/wp-content/uploads/2023/06/Dinner-Party-__-Traditional-Caprese-1-1200x800-1.jpg",
        "typeId" : 1,
        "price": 10.49
    }
]
}
