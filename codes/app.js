const samplesData = "samples.json";

d3.json(samplesData).then(function(data){
    console.log(data)
    console.log(data.names)
    let sample_data = data.samples
    
    let otu_ids = sample_data.map(function(data){
        return data.otu_ids;
    });
    console.log("Otu_ids:", otu_ids)

    let otu_labels = sample_data.map(data => data.otu_labels);
    console.log("Otu_labels", otu_labels)

});

// d3.json("samples.json").then((data) => {console.log(data);});