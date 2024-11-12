const opt = document.querySelectorAll('.opt');
const order = document.getElementById('order');
const orderId = document.querySelector('.order-id');
const image = document.querySelector('.image');

function randomTimeOrId() {
    return Math.floor((Math.random() * 2000) + 1000); 
}

order.addEventListener('click', () => {
    order.disabled = true;
    image.innerHTML = '';
    orderId.innerHTML = 'Order Id -:';
    let promise = new Promise(res => setTimeout(() => res(), randomTimeOrId()));
    promise.then(() => {
        let ordered = [];
        opt.forEach(ele => {
            if (ele.children[1].checked) ordered.push(ele.children[0].textContent);
        });
        if (ordered.length === 0) {
            alert("Kuch choose to ker le bhai free ka nhi milega yahan🙂");
            order.disabled = false;
            return;
        }
        orderId.innerHTML = `Order Id -: #${randomTimeOrId()}`;
        ordered.forEach(ele => {
            let img = document.createElement('img');
            switch(ele) {
                case 'Burger' : 
                    img.src = 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                    img.alt = 'burger';
                    break;
                case 'Fries' :
                    img.src = 'https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                    img.alt = 'fries';
                    break;
                case 'Drink' :
                    img.src = 'https://plus.unsplash.com/premium_photo-1725075086631-b21a5642918b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                    img.alt = 'drink';
                    break;
            }
            image.appendChild(img);
        });
        opt.forEach(ele => ele.children[1].checked = false);
        order.disabled = false;
    });
});