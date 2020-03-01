const fs = require('fs');
const csvAsString = fs.readFileSync('./csv/commune.csv').toString();
const csvLines = csvAsString.split('\r\n');
const columnLabels = csvLines.shift().split(';');

const acceptedLabels = [
    'Code_commune_INSEE',
    'Nom_commune',
    'Code_postal',
    'Coordonnées_GPS'
];

const json = csvLines.reduce((acc1, line) => {
    line = line.split(';');
    acc1[line[1]] = columnLabels.reduce((acc2, label, index) => {
        if (acceptedLabels.includes(label)) {
            switch (label) {
                case 'Code_commune_INSEE':
                    acc2['municipality_name_INSEE'] = line[index];
                    break;
                case 'Nom_commune':
                    acc2['municipality_name'] = line[index];
                    break;
                case 'Code_postal':
                    acc2['postal_code'] = line[index];
                    break;
                case 'Coordonnées_GPS':
                    acc2['gps_coordinates'] = line[index];
                    break;
            } 
        }
        return acc2;
    }, {});
    return acc1;
}, {});

fs.writeFileSync('./json/commune.json', '');

fs.writeFileSync('./json/commune.json', JSON.stringify(json, null, 2));
// console.log(json);
