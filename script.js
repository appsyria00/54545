const stolenDevices = [
    '123456', '869404030672236', '865812030619489', '0000', '869404030672228', 
    '813HEDU9226KL', 'A123BCD', 'XYZ9990', '353789912998888', '868918047999408', 
    '868918047999416', '30246/30W401157', '353789912998896', '112333741J008861', 
    '862635040704322', '862635040674319', 'MLTDU19125002780', '352848075271847', 
    '863184048369274', '863184048419285', 'DUJ6R20818003220', '860537057074791', 
    '860537057384794', '2795260vD00605', '863721043462362', '863721043502373', 
    'DEF4C19410010900', '860196057046562','860196057046570','41453/R2XM08757',
    '352740723764903','352740723764911','M8N17','358593101472621','808987453770',
    '352539364644576','353193414644571','RF8W90VWB0H','358438730487519','359892120487514','RF8X402TG6R',
    '864941047056213','864941047056221','25262/E9ZB01093','SM/A107F/DS' ,'354482111087344','354481111087346'
    ,'53428w4v300510' ,'863391073971581','863391073971599','868112043411002','86811204347015','5HRNW19801004060',
    '358475771915511','359111891915516','R58R7558BJV','865447041539252','865447041539260','353402107267297','8801643803130',
    'SM-J610FZKDXG','358303108987401','358303108987419','J1N6','352712376220566','352712376220574',
    '352953551330016','357646471330018','RZCTA1Z8XEZ','357872585649248','357872585649255','1207025466001651','8667180533070371',
    '866718053070363','85fad8c7','358356103162875','358357103162873','A505F/DC','358356102514597','A505F/DS','860511058934642','860511058934659','41459/R2XA0016',
    '356077481942348','356077481942355','L4n4','351241482483984','3527724192483989','R5CW617N8Vk','351241482483984','3527724192483989','R5CW617N8Vk','866226034899744','866226034919757',
    '17828008872','350016652027782','350016652027790','088372532H004380','356938147374517','356489847374514','R9JNA08A44J',
    '35220508643229','35220608647227','867212052158055','867212052158048','d19f58ab','358525994529448','358525994404543','GGWGY22YW9'
];

function searchNumber() {
    const input = document.getElementById('searchInput').value.trim();
    const result = document.getElementById('result');
    
    result.style.color = '#444';

    if (input !== '') {
        if (stolenDevices.includes(input)) {
            result.textContent = 'تحذير: جهاز مسروق';
            result.style.color = 'red';
            result.style.fontWeight = 'bold';
            // إضافة مربع التفاصيل
            const detailsBox = document.createElement('div');
            detailsBox.textContent = 'تفاصيل الجهاز المسروق';
            detailsBox.style.backgroundColor = '#ffe6e6';
            detailsBox.style.border = '1px solid red';
            detailsBox.style.padding = '10px';
            detailsBox.style.marginTop = '10px';
            detailsBox.style.cursor = 'pointer';
            detailsBox.onclick = function() {
                window.location.href = 'https://wa.me/1770// إضافة مربع التفاصيل
            const detailsBox = document.createElement('div');
            detailsBox.textContent = 'تفاصيل الجهاز المسروق';
            detailsBox.style.backgroundColor = '#ffe6e6';
            detailsBox.style.border = '1px solid red';
            detailsBox.style.padding = '10px';
            detailsBox.style.marginTop = '10px';
            detailsBox.style.cursor = 'pointer';
            detailsBox.onclick = function() {
                window.location.href = 'https://wa.me/17793867303';
            };
            result.appendChild(detailsBox);
        } else {
            result.textContent = 'الجهاز غير مسروق.';
            result.style.color = 'green';
            result.style.fontWeight = 'bold';
        }
    } else {
        result.textContent = 'يرجى إدخال رقم أو سيريال صحيح للبحث عنه.';
        result.style.color = 'orange';
    }
}