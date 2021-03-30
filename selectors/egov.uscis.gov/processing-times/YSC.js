let selform = document.getElementById("selectForm");
selform.selectedIndex = 22;
selform.dispatchEvent(new Event("change"));
let procTimes = document.getElementById("officeOrCenter");
procTimes.selectedIndex = 4;
procTimes.dispatchEvent(new Event("change"));
// processingTimesCmp.getProcessingTimes();
document.getElementById("getProcTimes").click();
let process = async function(){
    let response = await fetch("https://egov.uscis.gov/processing-times/api/processingtime/I-765/YSC", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,th;q=0.8",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      "referrer": "https://egov.uscis.gov/processing-times/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "include"
    })
    let data = await response.json();
        console.log(data);
        res = data;
        document.body.textContent = res.data.processing_time.range[1].value + " " + res.data.processing_time.range[1].unit + " - " + res.data.processing_time.range[0].value + " " + res.data.processing_time.range[0].unit;
}
process(); //maybe use await here.
document.body;
