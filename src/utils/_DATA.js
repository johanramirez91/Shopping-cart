let phones = {
    Techno: {
        brand: "Techno",
        inCart: 'false',
        capacity: "4G RAM, 64G memory",
        price: 290 // or "in"
    },
    Iphone: {
        brand: "Iphone",
        capacity: "4G RAM, 64G memory",
        price: 390,
        inCart: 'false'
    },
    Samsung: {
        brand: "Samsung",
        capacity: "8G RAM, 128G memory",
        price: 400,
        inCart: 'false'
    },
    Hauwei: {
        brand: "Hauwei",
        capacity: "6G RAM, 64G memory",
        price: 320,
        inCart: 'false'
    },
    HTC: {
        brand: "HTC",
        capacity: "4G RAM, 32G memory",
        price: 300,
        inCart: 'false'
    }
}

export function _getPhones() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...phones }), 1000);
    });
}

export function setInCart({ id, inCart }) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            phones = {
                ...phones,
                [id]: {
                    ...phones[id],
                    inCart: inCart
                }
            }
            res()
        }, 500);
    });
}