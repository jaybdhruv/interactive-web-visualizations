const samplesData = "samples.json";

d3.json(samplesData).then(function(data){
    console.log(data)
    console.log(data.names)
});

// d3.json("samples.json").then((data) => {console.log(data);});