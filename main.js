fetch('data.json')
.then(response=>response.json())
.then(data=>{
    const menuContainer = document.getElementById('menu-container');
    data.forEach(item=>{
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-items');
        menuItem.innerHTML=`
           <img src="${item.image}" alt="${item.title}" width="300" height="200"/>
           <span>${item.price}</span>
           <span>${item.category}</span>
           <h2>${item.title}</h2>
           <p>${item.description}</p>
        `;
        menuContainer.appendChild(menuItem);
    })
})
.catch(error=>console.error('Error fetching data:', error));

console.log("hello");
