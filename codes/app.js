
function charts (subjectId){
    d3.json("samples.json").then(function(data){

        let testId = data.samples.filter(sample => sample.id == subjectId)[0];
        console.log("Test Id:", testId);

        let allOtuIds = testId.otu_ids;
        let topOtuIds = allOtuIds.slice(0,10);
        console.log("All Otu Ids:", allOtuIds);
        console.log("Top Otu Ids:", topOtuIds);

        let allSampleValues = testId.sample_values;
        let topSampleValues = allSampleValues.slice(0,10);
        console.log("All Sample Values:", allSampleValues);
        console.log("Top Sample Values:", topSampleValues);

        let allOtuLabels = testId.otu_labels;
        let topOtuLabels = allOtuLabels.slice(0,10);
        console.log("All Otu Labels:", allOtuLabels);
        console.log("Top Otu Labels:", topOtuLabels);

        let traceBar = {
            x: topSampleValues.reverse(),
            y: topOtuIds.reverse().map(otu =>`OTU ${otu}`),
            text: topOtuLabels.reverse(),
            type: "bar",
            orientation: "h"
        };
        console.log(traceBar)
        let traceData = [traceBar];

        let layout = {
            font:{
                family: 'Gravitas One',
                size: 14
            },
            margin: {
              l: 100,
              r: 150,
              t: 30,
              b: 30
            }
        };
    
        Plotly.newPlot("bar", traceData, layout);

        var traceBubble = {
            x: allOtuIds,
            y: allSampleValues,
            mode: 'markers',
            marker: {
              color: allOtuIds,
              colorscale: 'Electric',
              size: allSampleValues
            }
          };
          
        var data = [traceBubble];
          
        var layout1 = {
            xaxis: {
                title: {
                    text: 'OTU ID',    
                }
            },
            font: {
                family: 'Gravitas One',
                size: 14
            },
            height: 480,
            width: 1300
        };
          
        Plotly.newPlot("bubble", data, layout1);
    });
}

charts("940");