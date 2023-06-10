/**
 * A dictionary that maps ATT&CK tactics to ATT&CK techniques.
 * @remarks
 *  Relationships are sourced from the "ATT&CK" tab of this spreadsheet:
 */
export const TacticMap: { [key: string]: string[] } = {
    TA0001: ["T1078","T1091","T1133","T1189","T1190","T1195","T1199","T1200","T1566"],
    TA0002: ["T1047","T1053","T1059","T1072","T1106","T1129","T1203","T1204","T1559","T1569","T1609","T1610","T1648"],
    TA0003: ["T1037","T1053","T1078","T1098","T1133","T1136","T1137","T1176","T1197","T1205","T1505","T1525","T1542","T1543","T1546","T1547","T1554","T1556","T1574"],
    TA0004: ["T1037","T1053","T1055","T1068","T1078","T1134","T1484","T1543","T1546","T1547","T1548","T1574","T1611"],
    TA0005: ["T1006","T1014","T1027","T1036","T1055","T1070","T1078","T1112","T1127","T1134","T1140","T1197","T1202","T1205","T1207","T1211","T1216","T1218","T1220","T1221","T1222","T1480","T1484","T1497","T1535","T1542","T1548","T1550","T1553","T1556","T1562","T1564","T1574","T1578","T1599","T1600","T1601","T1610","T1612","T1620","T1622","T1647"],
    TA0006: ["T1003","T1040","T1056","T1110","T1111","T1187","T1212","T1528","T1539","T1552","T1555","T1556","T1557","T1558","T1606","T1621","T1649"],
    TA0007: ["T1007","T1010","T1012","T1016","T1018","T1033","T1040","T1046","T1049","T1057","T1069","T1082","T1083","T1087","T1120","T1124","T1135","T1201","T1217","T1482","T1497","T1518","T1526","T1538","T1580","T1613","T1614","T1615","T1619","T1622"],
    TA0008: ["T1021","T1072","T1080","T1091","T1210","T1534","T1550","T1563","T1570"],
    TA0009: ["T1005","T1025","T1039","T1056","T1074","T1113","T1114","T1115","T1119","T1123","T1125","T1185","T1213","T1530","T1557","T1560","T1602"],
    TA0010: ["T1011","T1020","T1029","T1030","T1041","T1048","T1052","T1537","T1567"],
    TA0011: ["T1001","T1008","T1071","T1090","T1092","T1095","T1102","T1104","T1105","T1132","T1205","T1219","T1568","T1571","T1572","T1573"],
    TA0040: ["T1485","T1486","T1489","T1490","T1491","T1495","T1496","T1498","T1499","T1529","T1531","T1561","T1565"],
    TA0042: ["T1583","T1584","T1585","T1586","T1587","T1588","T1608"],
    TA0043: ["T1589","T1590","T1591","T1592","T1593","T1594","T1595","T1596","T1597","T1598"]
}

/**
 * A dictionary that maps ATT&CK techniques to ATT&CK sub-techniques.
 * @remarks
 *  Relationships are sourced from the "ATT&CK" tab of this spreadsheet:
 */
export const TechniquesMap: { [key: string]: string[] } = {
    T1595: ["001","002","003"],
    T1592: ["001","002","003","004"],
    T1589: ["001","002","003"],
    T1590: ["001","002","003","004","005","006"],
    T1591: ["001","002","003","004"],
    T1598: ["001","002","003"],
    T1597: ["001","002"],
    T1596: ["001","002","003","004","005"],
    T1593: ["001","002","003"],
    T1583: ["001","002","003","004","005","006","007"],
    T1586: ["001","002","003"],
    T1584: ["001","002","003","004","005","006","007"],
    T1587: ["001","002","003","004"],
    T1585: ["001","002","003"],
    T1588: ["001","002","003","004","005","006"],
    T1608: ["001","002","003","004","005","006"],
    T1566: ["001","002","003"],
    T1195: ["001","002","003"],
    T1078: ["001","002","003","004"],
    T1059: ["001","002","003","004","005","006","007","008"],
    T1559: ["001","002","003"],
    T1053: ["002","003","005","006","007"],
    T1569: ["001","002"],
    T1204: ["001","002","003"],
    T1098: ["001","002","003","004","005"],
    T1547: ["001","002","003","004","005","006","007","008","009","01","010","012","013","014","015"],
    T1037: ["001","002","003","004","005"],
    T1136: ["001","002","003"],
    T1543: ["001","002","003","004"],
    T1546: ["001","002","003","004","005","006","007","008","009","01","011","012","013","014","015","016"],
    T1574: ["001","002","004","005","006","007","008","009","01","011","012","013"],
    T1556: ["001","002","003","004","005","006","007"],
    T1137: ["001","002","003","004","005","006"],
    T1542: ["001","002","003","004","005"],
    T1505: ["001","002","003","004","005"],
    T1205: ["001","002"],
    T1548: ["001","002","003","004"],
    T1134: ["001","002","003","004","005"],
    T1484: ["001","002"],
    T1055: ["001","002","003","004","005","008","009","011","012","013","014","015"],
    T1480: ["001"],
    T1222: ["001","002"],
    T1564: ["001","002","003","004","005","006","007","008","009","01"],
    T1562: ["001","002","003","004","006","007","008","009","01"],
    T1070: ["001","002","003","004","005","006","007","008","009"],
    T1036: ["001","002","003","004","005","006","007"],
    T1578: ["001","002","003","004"],
    T1601: ["001","002"],
    T1599: ["001"],
    T1027: ["001","002","003","004","005","006","007","008","009"],
    T1553: ["001","002","003","004","005","006"],
    T1218: ["001","002","003","004","005","007","008","009","01","011","012","013","014"],
    T1216: ["001"],
    T1127: ["001"],
    T1550: ["001","002","003","004"],
    T1497: ["001","002","003"],
    T1600: ["001","002"],
    T1557: ["001","002","003"],
    T1110: ["001","002","003","004"],
    T1555: ["001","002","003","004","005"],
    T1606: ["001","002"],
    T1056: ["001","002","003","004"],
    T1003: ["001","002","003","004","005","006","007","008"],
    T1558: ["001","002","003","004"],
    T1552: ["001","002","003","004","005","006","007"],
    T1087: ["001","002","003","004"],
    T1069: ["001","002","003"],
    T1518: ["001"],
    T1614: ["001"],
    T1016: ["001"],
    T1563: ["001","002"],
    T1021: ["001","002","003","004","005","006"],
    T1560: ["001","002","003"],
    T1602: ["001","002"],
    T1213: ["001","002","003"],
    T1074: ["001","002"],
    T1114: ["001","002","003"],
    T1071: ["001","002","003","004"],
    T1132: ["001","002"],
    T1001: ["001","002","003"],
    T1568: ["001","002","003"],
    T1573: ["001","002"],
    T1090: ["001","002","003","004"],
    T1102: ["001","002","003"],
    T1020: ["001"],
    T1048: ["001","002","003"],
    T1011: ["001"],"T1052":["001"],
    T1567: ["001","002"],
    T1565: ["001","002","003"],
    T1491: ["001","002"],
    T1561: ["001","002"],
    T1499: ["001","002","003","004"],
    T1498: ["001","002"]
}

/**
 * Returns the tactic associated with a technique.
 * @param technique
 *  The technique's id.
 * @returns
 *  The tactic's id.
 */
export function getTacticFromTechnique(technique: string): string | undefined {
    for(let tactic in TacticMap) {
        if(TacticMap[tactic].includes(technique)) {
            return tactic;
        }
    }
    return undefined;
}

/**
 * Returns the technique associated with a sub-technique.
 * @param subTechnique
 *  The sub-technique's id.
 * @returns
 *  The technique's id.
 */
export function getTechniqueFromSubTechnique(subTechnique: string): string | undefined {
    let match;
    if(match = /(T[0-9]{4})\.[0-9]{3}/i.exec(subTechnique)) {
        return match[1];
    } else {
        return undefined;
    }
}
