let data = [
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville"
    },
    {
        quote: "Success is getting what you want; happiness is wanting what you get.",
        author: "W.P. Kinsella"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis"
    },
    {
        quote: "Success is the sum of small efforts, repeated day-in and day-out.",
        author: "Confucius"
    },
    {
        quote: "I never dreamed about success. I worked for it.",
        author: "Estée Lauder"
    },
    {
        quote: "Success is focusing the full power of all you are on what you have a burning desire to achieve.",
        author: "Unknown"
    },
    {
        quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
        author: "Pele"
    }
]
let index = 0;
let prev = () => {
    if (index === 0) {
        index = data.length - 1;
    }
    else{
        index--;
    }
    display();
}
let next = () => {
    if(index === data.length - 1){
        index = 0;
    }
    else{
        index++;
    }
    display();
}

let display = () => {
    document.getElementById("quote").innerHTML = data[index].quote;
    document.getElementById("author").innerHTML = data[index].author;
}