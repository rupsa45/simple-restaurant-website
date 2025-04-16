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

const form = document.querySelector(".form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    if(!username || !email || !password){
        alert("Please fill all the fields");
        return;
    }
    const useData={
        username,
        email,
        password
    };
    alert("Form submitted successfully!");
    window.location.href="login.html";
})

const loginForm = document.getElementById("form-login");
loginForm.addEventListener("submit",function(e){
    e.preventDefault();
    const username = loginForm.username.value.trim();
    const password = loginForm.password.value.trim();
    if(!username || !password){
        alert("Please fill all the fields");
        return;
    }
    const loginData={
        username,
        password
    };
    alert("Login successful!");
    window.location.href="index.html";
})