const getData = async () => {
    let request = await fetch('test.csv');
    if(request.status === 200){
        return request.text();
    }throw"File not found";
};

getData().then(response => {
    // console.log(response)
    let table = response.split('\n').slice(1);
    console.log(table)
     table.forEach(row=>{
        let columns = row.split(',')
        let year = columns[0];
        let temp =columns[1];
        
        console.log(year, temp)
    })
}).catch(error => console.log(error))

