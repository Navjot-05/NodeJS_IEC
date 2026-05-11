function fetchData(callback){
    setTimeout(()=>callback("Data is recall"),1000);
}

const fetchDataPromise=() => {
    return new Promise((resolve) => {
        setTimeout(()=>resolve("data is promised"),1000);
    });
};

async function getData()
{
        const result = await fetchDataPromise();
        console.log(result);
        const show = fetchData((data) => console.log(data));
}
getData();
