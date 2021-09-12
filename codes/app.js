const samplesData = "samples.json";

d3.json(samplesData).then(function(data){

    let first_id = data.samples.filter(data => data.id == "940").sort((a,b) => (a-b))[0];
    console.log("First id:", first_id)

    let top_otu_ids = first_id.otu_ids.slice(0,10).reverse();
    console.log("Otu_ids:", top_otu_ids);

    let top_otu_labels = first_id.otu_labels.slice(0,10).reverse();
    console.log("Otu_labels:", top_otu_labels);

    let top_sample_values = first_id.sample_values.slice(0,10).reverse();
    console.log("Sample_data:", top_sample_values);

    let trace1 = {
        x: top_sample_values,
        y: top_otu_ids,
        // text: reversedData.map(object => object.greekName),
        // name: "Greek",
        type: "bar",
        orientation: "h"
      };
    
    let traceData = [trace1];

    let layout = {
        // title: "Greek gods search results",
        // margin: {
        //   l: 100,
        //   r: 100,
        //   t: 100,
        //   b: 100
        // }
      };
    
    Plotly.newPlot("bar", traceData, layout);

});

