const getData = async () => {
    let request = await fetch('ZonAnn.Ts+dSST.csv');

        let response = await request.text();
        let table = response.split('\n').slice(1);

        table.forEach(row=>{

            let columns = row.split(',')
            let year = columns[0];
            xlabels.push(year);
    
            let temp =columns[1];
            yTemps.push(parseFloat(temp) + 14);
    
            console.log(year, temp)
        })

    
};

const getSecondData = async () => {
    let request = await fetch('ZonAnn.Ts+dSST.csv');

        let response = await request.text();
        let table = response.split('\n').slice(1);

        table.forEach(row=>{

            let columns = row.split(',')
            let year = columns[0];
            xlabelsFs.push(year);
    
            let temp =columns[1];
            yTempsFs.push(parseFloat(temp) + 14);
    
            console.log(year, temp)
        })

    
};


// let getData = async ()=> {
//     let request = await fetch("test.csv");
//     if(request.status === 200){
//         return await request.text();
//     }throw"File not found check your code"
    
// };
// getData().then(response =>{
//     let table = response.split("\n").slice(1);
//     table.forEach(elt=>{
//         let row = elt.split(",");
//         let year = row[0];
//         let temp = row[1]
//         console.log(year,temp);
//     })

    
// }).catch(error=>console.log(error))
