const samplesData = "samples.json";

d3.json(samplesData).then(function(data){
    console.log(data)
});

// d3.json("samples.json").then((data) => {console.log(data);});