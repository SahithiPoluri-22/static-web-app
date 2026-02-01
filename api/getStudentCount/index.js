module.exports = async function (context, req) {
    context.res = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: [
            { country: "USA", count: 120 },
            { country: "India", count: 85 }
        ]
    };
};
