function fetchAPI(){
    return fetch("https://api.odcloud.kr/api/15063436/v1/uddi:61eb754a-4644-4ab0-b12b-94310777a12e?page=1&perPage=42&serviceKey=data-portal-test-key")
        .then((response) => response.json())
        .then((data) => data);
}

fetchAPI()
    .then((datas) => {
        console.log(datas.data);
        showDatas(datas.data);
    });

function showDatas(datas){
    const tableElement = document.querySelector("#airportData");
    tableElement.innerHTML = datas.map((data) => setThTrElement(data)).join("");
}

function setThTrElement(data){
    return `<th>터미널</th>
            <th>주차장</th>
            <th>구역</th>
            <th>체크인카운터</th>
            <th>소요시간(분)</th>
            <th>상세시간(초)</th>
            <tr>
                <td>${data.터미널}</td>
                <td>${data.주차장}</td>
                <td>${data.구역}</td>
                <td>${data.체크인카운터}</td>
                <td>${data["소요시간(분)"]}</td>
                <td>${data["상세시간(초)"]}</td>
            </tr>`;
}