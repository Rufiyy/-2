function extractNumbers(str) {
    return str.match(/\d+/g)?.map(Number) || [];
}

console.log(extractNumbers("a1fg5hj6"));


async function fibonacci(n1 = 0, n2 = 1, limit = 144) {
    if (n1 > limit) return;
    console.log(n1);
    await new Promise(resolve => setTimeout(resolve, 1000));
    fibonacci(n2, n1 + n2, limit);
}

fibonacci();


async function fetchData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        data.forEach(item => console.log(item.title));
    } catch (error) {
        console.error("Ошибка при запросе данных:", error);
    }
}

fetchData();