interface mangoType {
    name: string,
    age: number,
    email: string,
    address?: {
        city: string,
        country: string
    }
}

const mango: mangoType = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

interface polyType {
    name: string,
    age: number,
    email: string
}

const poly: polyType = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};