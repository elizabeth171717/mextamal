// set date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


const menu = [
    {
      id: 1,
      title: "Banana Leaf Tamales",
      category: "",
      price: 65.99,
      img: "2.jpg",
      desc: `Sell by Dozen, choice of red or green sauce, and choice of chicken or pork.`,
    },
    {
      id: 2,
      title: "Corn Leaf Tamales",
      category: "",
      price: 48.99,
      img: "cornl.jpg",
      desc: `Sell by Dozen, choice of red or green sauce, and choice of chicken or pork.`,
    },
    {
      id: 3,
      title: "Rajas Tamales",
      category: "",
      price: 48.99,
      img: "rajas.jpg",
      desc: `Sell by Dozen, Pepper and Cheese tamales on a corn leaf..`,
    },
    {
      id: 4,
      title: "Sweet Tamales",
      category: "",
      price: 36.99,
      img: "sweet.jpg",
      desc: `Sell by Dozen , red sweet Tamales perfect for breakfast.`,
    }
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  

  
//load items
  window.addEventListener("DOMContentLoaded", function () {
     displayMenuItems(menu);
  });





function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map( function (item) {
        //console.log(item);

        return `<article class="menu-item">
        <img src=${item.img} class="photo"
        alt=${item.title} />
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}
