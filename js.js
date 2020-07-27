let a = [
    { "lat": 41.500850, "lon": 2.110628, "name": "srm.pic.es", "version": "5.2.16", "size": "10256817", "used":  "8302563", "desc": "Tier 1: PIC site", "loc": "Bellaterra, Spain", "url": "http://www.pic.es" },
    { "lat": 55.550000, "lon": 37.370000, "name": "se3.itep.ru", "version": "5.2.11", "size": "332428", "used":  "258779", "desc": "ITEP", "loc": "Moscow, Russia", "url": "http://egee.itep.ru" },
    { "lat": 60.180000, "lon": 24.830000, "name": "bombay.csc.fi", "version": "6.0.5", "size": "440", "used":  "205", "desc": "ARC-FGCI cluster; GLUE2ServiceID=urn:ogf:ComputingService:io-grid.fgci.csc.fi:arex", "loc": "Espoo, Finland", "url": "http://www.csc.fi" },
    { "lat": 55.716700, "lon": 12.566700, "name": "srm.ndgf.org", "version": "6.1.2", "size": "15397937", "used":  "11035110", "desc": "NDGF Distributed Tier 1", "loc": "Denmark,Finland,Norway,Slovenia,Sweden", "url": "http://www.ndgf.org/" },
    { "lat": 46.042170, "lon": 14.487670, "name": "dcache.ijs.si", "version": "5.2.22", "size": "1130201", "used":  "690623", "desc": "Jozef Stefan Institute", "loc": "Ljubljana, Slovenia", "url": "http://www-f9.ijs.si/" },
    { "lat": 46.042170, "lon": 14.487670, "name": "dcache.arnes.si", "version": "5.2.16", "size": "65971", "used":  "5672", "desc": "Arnes site", "loc": "Ljubljana, Slovenia", "url": "http://www.arnes.si" },
    { "lat": 52.344750, "lon": 13.632710, "name": "lcg-se0.ifh.de", "version": "5.2.14", "size": "3001602", "used":  "2084176", "desc": "Deutsches Elektronen-Synchrotron, Standort Zeuthen", "loc": "Zeuthen, Germany", "url": "http://gridcenter.desy.de" },
    { "lat": 45.782500, "lon": 4.865500, "name": "ccsrm.in2p3.fr", "version": "5.2.9-1", "size": "26771572", "used":  "19730131", "desc": "IN2P3-CNRS Computing Center", "loc": "Lyon, France", "url": "http://grid.in2p3.fr" },
    { "lat": 47.538000, "lon": 8.222000, "name": "t3se01.psi.ch", "version": "5.2.22", "size": "1279791", "used":  "919734", "desc": "PSI CMS Tier-3", "loc": "Villigen, Switzerland", "url": "https://twiki.cscs.ch/twiki/bin/view/CmsTier3/WebHome" },
    { "lat": 48.263300, "lon": 11.673100, "name": "grid-srm.rzg.mpg.de", "version": "5.2.20", "size": "4006620", "used":  "2798059", "desc": "Production", "loc": "Muenchen, Germany", "url": "http://www.mppmu.mpg.de" },
    { "lat": 40.454640, "lon": -3.727710, "name": "srm.ciemat.es", "version": "5.2.16", "size": "3425709", "used":  "1935194", "desc": "CIEMAT HEP Group Grid Site", "loc": "Madrid,Spain", "url": "http://wwwae.ciemat.es/grid" },
    { "lat": 63.833300, "lon": 20.250000, "name": "srm.swegrid.se", "version": "5.2.15", "size": "7862855", "used":  "4263448", "desc": "Swedish Distributed ATLAS and ALICE Tier-2", "loc": "Sweden", "url": "http://www.swegrid.se" },
    { "lat": 49.247000, "lon": -123.231000, "name": "srm.triumf.ca", "version": "5.2.12", "size": "10250426", "used":  "8600706", "desc": "TRIUMF ATLAS Data Centre", "loc": "Vancouver, Canada", "url": "http://grid.triumf.ca" },
    { "lat": 45.782500, "lon": 4.865500, "name": "ccsrm02.in2p3.fr", "version": "5.2.6-1", "size": "1775969", "used":  "895669", "desc": "IN2P3-CNRS Computing Center", "loc": "Lyon, France", "url": "http://grid.in2p3.fr" },
    { "lat": 52.344750, "lon": 13.632710, "name": "globe-door.ifh.de", "version": "4.2.43", "size": "5022631", "used":  "2862517", "desc": "Deutsches Elektronen-Synchrotron, Standort Zeuthen", "loc": "Zeuthen, Germany", "url": "http://gridcenter.desy.de" },
    { "lat": 53.577200, "lon": 9.877200, "name": "prometheus.desy.de", "version": "6.2.0-SNAPSHOT", "size": "966", "used":  "4", "desc": "DESY Hamburg", "loc": "Hamburg, Germany", "url": "http://grid.desy.de/" },
    { "lat": -33.034935, "lon": -71.597129, "name": "se.hpc.utfsm.cl", "version": "5.2.21", "size": "475780", "used":  "347794", "desc": "Universidad Tecnica Federico Santa Maria", "loc": "Valparaiso, Chile", "url": "http://www.hpc.utfsm.cl" },
    { "lat": 56.742800, "lon": 37.195502, "name": "srm-cms.jinr-t1.ru", "version": "5.2.21", "size": "9359384", "used":  "5987487", "desc": "JINR-T1", "loc": "Dubna, Russia", "url": "http://grid-eng.jinr.ru" },
    { "lat": 60.120000, "lon": 24.400000, "name": "madhatter.csc.fi", "version": "5.2.12", "size": "1157906", "used":  "1017820", "desc": "Finnish CMS Tier 2", "loc": "Espoo, Finland", "url": "http://hiptek.web.cern.ch/hiptek" },
    { "lat": 40.546100, "lon": -3.693700, "name": "grid002.ft.uam.es", "version": "5.2.20", "size": "1434471", "used":  "999324", "desc": "Tier2 at UAM", "loc": "Madrid,Spain", "url": "http://www.hepexp.ft.uam.es/" },
    { "lat": 51.562590, "lon": 9.970600, "name": "se-goegrid.gwdg.de", "version": "5.2.18", "size": "2564159", "used":  "2063601", "desc": "Tier2 at University of Goettingen", "loc": "Goettingen, Germany", "url": "http://goegrid.de" },
    { "lat": 39.909000, "lon": 116.241000, "name": "srm.ihep.ac.cn", "version": "2.16.22", "size": "539746", "used":  "436270", "desc": "WLCG Tire 2 Site of Institue of High Energy Physics", "loc": "Beijing, China", "url": "http://www.goc.ac.cn/" },
    { "lat": 56.742800, "lon": 37.195502, "name": "lxse-dc01.jinr.ru", "version": "5.2.21", "size": "212974", "used":  "119389", "desc": "JINR-LCG2", "loc": "Dubna, Russia", "url": "http://grid-eng.jinr.ru" },
    { "lat": 56.742800, "lon": 37.195502, "name": "lcgsedc01.jinr.ru", "version": "5.2.21", "size": "2684224", "used":  "1861397", "desc": "JINR-LCG2", "loc": "Dubna, Russia", "url": "http://grid-eng.jinr.ru" },
    { "lat": 45.782500, "lon": 4.865500, "name": "ccsrmt2.in2p3.fr", "version": "5.2.9-1", "size": "507974", "used":  "434846", "desc": "IN2P3 CC Analysis Facility", "loc": "Lyon, France", "url": "http://grid.in2p3.fr" },
    { "lat": 52.378181, "lon": 5.229089, "name": "srm.grid.sara.nl", "version": "6.0.16", "size": "12844791", "used":  "7457733", "desc": "SARA", "loc": "Amsterdam, The Netherlands", "url": "http://www.sara.nl" },
    { "lat": 49.096300, "lon": 8.432100, "name": "ppssrm-kit.gridka.de", "version": "5.2.22", "size": "75", "used":  "0", "desc": "DE-KIT, Forschungszentrum Karlsruhe (FZK), GridKa", "loc": "Karlsruhe, Germany", "url": "http://www.gridka.de/" },
    { "lat": 53.577200, "lon": 9.877200, "name": "dcache-se-cms.desy.de", "version": "5.2.18", "size": "10530019", "used":  "8873351", "desc": "DESY Hamburg", "loc": "Hamburg, Germany", "url": "http://grid.desy.de/" },
    { "lat": 49.096300, "lon": 8.432100, "name": "cmssrm-kit.gridka.de", "version": "5.2.21", "size": "8090150", "used":  "6587615", "desc": "DE-KIT, Forschungszentrum Karlsruhe (FZK), GridKa", "loc": "Karlsruhe, Germany", "url": "http://www.gridka.de/" },
    { "lat": 50.123424, "lon": 14.468787, "name": "dcache.du.cesnet.cz", "version": "5.2.22", "size": "41122", "used":  "1406", "desc": "praguelcg2 SBDII", "loc": "Prague, Czech Republic", "url": "http://www.farm.particle.cz/" },
    { "lat": 49.276500, "lon": -123.217700, "name": "t2ksrm.nd280.org", "version": "2.10.46", "size": "700780", "used":  "679444", "desc": "Site BDII for publishing the T2K storage element at TRIUMF", "loc": "Vancouver, BC, Canada", "url": "http://www.triumf.ca" },
    { "lat": 56.742800, "lon": 37.195502, "name": "srm-cms-mss.jinr-t1.ru", "version": "5.2.21", "size": "3096574", "used":  "840", "desc": "JINR-T1", "loc": "Dubna, Russia", "url": "http://grid-eng.jinr.ru" },
    { "lat": 49.096300, "lon": 8.432100, "name": "lhcbsrm-kit.gridka.de", "version": "5.2.21", "size": "5532050", "used":  "3702082", "desc": "DE-KIT, Forschungszentrum Karlsruhe (FZK), GridKa", "loc": "Karlsruhe, Germany", "url": "http://www.gridka.de/" },
    { "lat": 53.577200, "lon": 9.877200, "name": "dcache-se-desy.desy.de", "version": "5.2.20", "size": "3551478", "used":  "2014475", "desc": "DESY Hamburg", "loc": "Hamburg, Germany", "url": "http://grid.desy.de/" },
    { "lat": 55.750000, "lon": 37.583000, "name": "sdrm.t1.grid.kiae.ru", "version": "5.2.4", "size": "4706895", "used":  "4396382", "desc": "Russian Research Centre &quot;Kurchatov Institute&quot;", "loc": "Moscow, Russia", "url": "http://www.grid.kiae.ru/" },
    { "lat": 35.890000, "lon": 128.610000, "name": "cluster142.knu.ac.kr", "version": "5.2.10", "size": "1383450", "used":  "1066910", "desc": "T3_KR_KNU, Kyungpook National University, Korea", "loc": "Daegu, Korea", "url": "http://chep.knu.ac.kr" },
    { "lat": 50.833300, "lon": 4.333300, "name": "maite.iihe.ac.be", "version": "5.2.13", "size": "7525243", "used":  "6667662", "desc": "EGI Site", "loc": "Brussels, Belgium", "url": "http://w3.iihe.ac.be/" },
    { "lat": 48.261700, "lon": 11.666700, "name": "lcg-lrz-srm.grid.lrz.de", "version": "6.0.9", "size": "2818702", "used":  "1878809", "desc": "LMU LCG Tier-2", "loc": "Muenchen, Deutschland", "url": "http://www.lrz.de/" },
    { "lat": 46.025277, "lon": 8.959871, "name": "storage01.lcg.cscs.ch", "version": "5.2.17", "size": "5067242", "used":  "4163579", "desc": "Swiss National Supercomputing Centre", "loc": "Lugano, Switzerland", "url": "http://www.cscs.ch" },
    { "lat": 53.577200, "lon": 9.877200, "name": "dcache-se-atlas.desy.de", "version": "5.2.18", "size": "6568145", "used":  "5330342", "desc": "DESY Hamburg", "loc": "Hamburg, Germany", "url": "http://grid.desy.de/" },
    { "lat": 49.096300, "lon": 8.432100, "name": "atlassrm-kit.gridka.de", "version": "5.2.21", "size": "11199950", "used":  "10226712", "desc": "DE-KIT, Forschungszentrum Karlsruhe (FZK), GridKa", "loc": "Karlsruhe, Germany", "url": "http://www.gridka.de/" },
    { "lat": 45.210000, "lon": 11.570000, "name": "t2-srm-02.lnl.infn.it", "version": "5.2.20", "size": "3270585", "used":  "2857804", "desc": "Testing", "loc": "Legnaro (PD), Italy", "url": "http://www.lnl.infn.it" },
    { "lat": 49.096300, "lon": 8.432100, "name": "dcachesrm-kit.gridka.de", "version": "5.2.21", "size": "960550", "used":  "730484", "desc": "DE-KIT, Forschungszentrum Karlsruhe (FZK), GridKa", "loc": "Karlsruhe, Germany", "url": "http://www.gridka.de/" },
    { "lat": 48.730000, "lon": 21.240000, "name": "se-iep-grid.saske.sk", "version": "5.2.10", "size": "973196", "used":  "828933", "desc": "Institute of Experimental Physics, SAS, Kosice", "loc": "Kosice, Slovakia", "url": "http://uef.saske.sk" },
    { "lat": 55.750000, "lon": 37.583000, "name": "lhcbsdrm.t1.grid.kiae.ru", "version": "5.2.4", "size": "2407834", "used":  "1822196", "desc": "Russian Research Centre &quot;Kurchatov Institute&quot;", "loc": "Moscow, Russia", "url": "http://www.grid.kiae.ru/" },
    { "lat": 54.865940, "lon": 37.370000, "name": "se0003.m45.ihep.su", "version": "5.2.14", "size": "321563", "used":  "80158", "desc": "Institute for High Energy Physics", "loc": "Protvino, Russia", "url": "http://www.ihep.su" },
    { "lat": 55.750000, "lon": 37.583000, "name": "tape-sdrm.t1.grid.kiae.ru", "version": "5.2.4", "size": "319676", "used":  "618", "desc": "Russian Research Centre &quot;Kurchatov Institute&quot;", "loc": "Moscow, Russia", "url": "http://www.grid.kiae.ru/" },
    { "lat": 37.972900, "lon": 23.745900, "name": "se01.athena.hellasgrid.gr", "version": "2.16.38", "size": "8815", "used":  "2743", "desc": "Hellas Grid site at National Documentation Centre (EKT)", "loc": "Athens, Greece", "url": "http://www.hellasgrid.gr" },
    { "lat": 54.865940, "lon": 37.370000, "name": "se0002.m45.ihep.su", "version": "5.2.14", "size": "1185504", "used":  "951323", "desc": "Institute for High Energy Physics", "loc": "Protvino, Russia", "url": "http://www.ihep.su" },
    { "lat": 48.003333, "lon": 7.848333, "name": "se.bfg.uni-freiburg.de", "version": "2.16.51", "size": "2864461", "used":  "2136675", "desc": "Tier2 LCG FZK-CLOUD FREIBURG", "loc": "Freiburg, Germany", "url": "http://www.bfg.uni-freiburg.de" },
    { "lat": 54.865940, "lon": 37.370000, "name": "dp0015.m45.ihep.su", "version": "5.2.14", "size": "395257", "used":  "350248", "desc": "Institute for High Energy Physics", "loc": "Protvino, Russia", "url": "http://www.ihep.su" },
    { "lat": 49.266360, "lon": -122.952630, "name": "lcg-se1.sfu.computecanada.ca", "version": "5.2.19", "size": "4359688", "used":  "3345589", "desc": "ARC-CA-SFU-T2 Cedar Cluster; GLUE2ServiceID=urn:ogf:ComputingService:lcg-ce2.sfu.computecanada.ca:arex", "loc": "Vancouver, Canada", "url": "https://www.computecanada.ca" },
    { "lat": 36.360000, "lon": 127.350000, "name": "cms-t2-se01.sdfarm.kr", "version": "5.2.20", "size": "1157413", "used":  "360712", "desc": "KISTI's EGI site for CMS Tier2", "loc": "Daejeon, Korea", "url": "http://www.kisti.re.kr/english" },
    { "lat": 41.782700, "lon": 12.482324, "name": "cmsrm-se01.roma1.infn.it", "version": "5.2.14", "size": "1155113", "used":  "763870", "desc": "Tier2 of CMS Rome", "loc": "Rome, Italy", "url": "http://cmsrm-web.roma1.infn.it:8888" },
    { "lat": 51.499450, "lon": -0.178970, "name": "gfe02.grid.hep.ph.ic.ac.uk", "version": "5.2.10", "size": "8095077", "used":  "6015193", "desc": "Imperial College London Tier2", "loc": "London, UK", "url": "http://www.hep.ph.ic.ac.uk/e-science/" },
    { "lat": 51.572100, "lon": -1.316300, "name": "heplnx204.pp.rl.ac.uk", "version": "5.2.5", "size": "4306303", "used":  "2852654", "desc": "Tier 2 LCG Site", "loc": "Oxfordshire, UK", "url": "http://www.ppd.clrc.ac.uk/public/ppd.html" },
    { "lat": 49.266360, "lon": -122.952630, "name": "lcg-t2kse1.sfu.computecanada.ca", "version": "5.2.17", "size": "1054791", "used":  "662494", "desc": "ARC-CA-SFU-T2 Cedar Cluster; GLUE2ServiceID=urn:ogf:ComputingService:lcg-ce2.sfu.computecanada.ca:arex", "loc": "Vancouver, Canada", "url": "https://www.computecanada.ca" },
    { "lat": 49.266360, "lon": -122.952630, "name": "lcg-snopse1.sfu.computecanada.ca", "version": "5.2.17", "size": "1125110", "used":  "758723", "desc": "ARC-CA-SFU-T2 Cedar Cluster; GLUE2ServiceID=urn:ogf:ComputingService:lcg-ce2.sfu.computecanada.ca:arex", "loc": "Vancouver, Canada", "url": "https://www.computecanada.ca" },
    { "lat": 50.781412, "lon": 6.049175, "name": "grid-srm.physik.rwth-aachen.de", "version": "5.2.15", "size": "4394064", "used":  "3574772", "desc": "EGI Site", "loc": "Aachen, Germany", "url": "http://www.physik.rwth-aachen.de/" },
    { "lat": 48.470000, "lon": -123.310000, "name": "charon01.westgrid.ca", "version": "3.2.39", "size": "2569508", "used":  "1085846", "desc": "University of Victoria", "loc": "Victoria, Canada", "url": "http://www.rcf.uvic.ca/index.php?id=48" },
    { "lat": 48.470000, "lon": -123.310000, "name": "charon03.westgrid.ca", "version": "4.2.31", "size": "9", "used":  "3", "desc": "University of Victoria", "loc": "Victoria, Canada", "url": "http://www.rcf.uvic.ca/index.php?id=48" },
    { "lat": 51.245640, "lon": 7.149410, "name": "grid-se.physik.uni-wuppertal.de", "version": "5.2.18", "size": "2217187", "used":  "1576976", "desc": "ARC-GLUE2ServiceID=urn:ogf:ComputingService:arc-ce.pleiades.uni-wuppertal.de:arex", "loc": "Wuppertal, Germany", "url": "http://www.pleiades.uni-wuppertal.de/" },
];

// ---------------- Map

let map = L.map('map').setView({lon: 0, lat: 30}, 3);
    
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    noWrap: true,
    maxZoom: 19,
    minZoom: 2,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

let southWest = L.latLng(-89.98155760646617, -180),
    northEast = L.latLng(89.99346179538875, 180),
    bounds = L.latLngBounds(southWest, northEast);
    
map.setMaxBounds(bounds);

map.on('drag', function() {
        map.panInsideBounds(bounds, { animate: false });
    });

let markers = {};

// ----------------------Markers

let loop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61];

loop.forEach((j) => {
    let str = ``;
    str += `${a[j].loc}<br>${a[j].desc}<br><ul><li>Version: ${a[j].version}<br>Name: ${a[j].name}<br>Size: ${bytesToSize(a[j].size)}</li>`
  
    for (let index = j + 1 ; index < a.length; index++) {
        if (a[j].lon === a[index].lon && a[j].lat === a[index].lat && a[j] !==a[index]) {
            str += `<li>Version: ${a[index].version}<br>Name: ${a[index].name}<br>Size: ${bytesToSize(a[index].size)}</li>`;
            loop.splice(loop.indexOf(index), 1)
        }
    }
    markers[`${a[j].lat}, ${a[j].lon}`] = L.marker({lon: a[j].lon, lat: a[j].lat}).bindPopup(str).addTo(map);
});



// Data for Chart
let b = {
    name:'',
    children: [],
}

for (let i = 0; i < a.length; i++) {
    
    let j, m ;
    if ( b.children.some((item, index) => {j = index; return item.name === a[i].version.substring(0, a[i].version.lastIndexOf('.'))}) ) {
        if ( b.children[j].children.some((item, index) => {m = index; return item.name === a[i].version }) ){
           b.children[j].children[m].size ++;
        } else {
            b.children[j].children.push({name: a[i].version, size: 1})
        }
    } else {
        b.children.push({name: a[i].version.substring(0, a[i].version.lastIndexOf('.')), children: [{name:a[i].version, size: 1}]})
    }
    
}
// ------------------------Chart
const format = d3.format(",d");
const width = 400;
const radius = width / 6;

const arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
        .padRadius(radius * 1.5)
        .innerRadius(d => d.y0 * radius)
        .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1));

const partition = data => {
    const root = d3.hierarchy(data)
            .sum(d => d.size)
            .sort((a, b) => b.value - a.value);
    return d3.partition()
            .size([2 * Math.PI, root.height + 1])
            (root);
}


let data = b
 
const root = partition(data);
const color = d3.scaleOrdinal().range(d3.quantize(d3.interpolateRainbow  , data.children.length + 1));

root.each(d => d.current = d);

const svg = d3.select('#partitionSVG')
        .style("width", width + 'px')
        .style("height", "auto")
        .style("font", "14px sans-serif");

const g = svg.append("g")
            .attr("transform", `translate(${width / 2},${width / 2})`);

const path = g.append("g")
            .selectAll("path")
            .data(root.descendants().slice(1))
            .join("path")
            .attr("fill", d => {
                while (d.depth > 1)
                    d = d.parent;
                return color(d.data.name);
            })
            .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
            .attr("d", d => arc(d.current));

path.filter(d => d.children)
            .style("cursor", "pointer")
            .on("click", clicked);

path.append("title")
            .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

const label = g.append("g")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .style("user-select", "none")
            .selectAll("text")
            .data(root.descendants().slice(1))
            .join("text")
            .attr("dy", "0.35em")
            .attr("fill-opacity", d => +labelVisible(d.current))
            .attr("transform", d => labelTransform(d.current))
            .text(d => d.data.name);

const parent = g.append("circle")
            .datum(root)
            .attr("r", radius)
            .attr("fill", "none")
            .attr("pointer-events", "all")
            .on('click', function (p) {
                clicked(p)
                showAllMarkers()
            });
           

function clicked(p) {
    parent.datum(p.parent || root);

    root.each(d => d.target = {
                x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                y0: Math.max(0, d.y0 - p.depth),
                y1: Math.max(0, d.y1 - p.depth)
        });

    const t = g.transition().duration(750);

        // Transition the data on all arcs, even the ones that aren’t visible,
        // so that if this transition is interrupted, entering arcs will start
        // the next transition from the desired position.
    path.transition(t)
            .tween("data", d => {
                const i = d3.interpolate(d.current, d.target);
                return t => d.current = i(t);
            })
            .filter(function (d) {
                return +this.getAttribute("fill-opacity") || arcVisible(d.target);
            })
            .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
            .attrTween("d", d => () => arc(d.current));

    label.filter(function (d) {
            return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        }).transition(t)
            .attr("fill-opacity", d => +labelVisible(d.target))
            .attrTween("transform", d => () => labelTransform(d.current));
}

    function arcVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
    }

    function labelVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
    }

    function labelTransform(d) {
        const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
        const y = (d.y0 + d.y1) / 2 * radius;
        return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }

document.querySelector('svg').addEventListener('click', funk);

let p = document.querySelector('#text');

function funk(e) {
    if (e.target.children[0]) {
       
        if (e.target.nodeName == 'svg') {
            showAllMarkers()
            return;
        }
        map.eachLayer(function(layer) {
            if (layer._latlng) map.removeLayer(layer);
        });
      
        let title = e.target.children[0].innerHTML,
            version = title.slice(title.lastIndexOf('/') + 1, title.search(/\n/) ),
            markArray = [],
            numberOf = 0,
            ul = `<ul>`  ;   
               
        for (let i = 0; i < a.length; i++) {
        
            if ( a[i].version.startsWith(version) ) {
        
                markers[`${a[i].lat}, ${a[i].lon}`].addTo(map);
                markArray[i] = {lat: a[i].lat, lon: a[i].lon};
                numberOf ++;
                ul += `<li>${a[i].loc} ${a[i].desc} <ul>Version: ${a[i].version}<br>Name: ${a[i].name}<br>Size: ${bytesToSize(a[i].size)}<br>Used: ${bytesToSize(a[i].used)}<br>Available: ${bytesToSize(a[i].size -a[i].used)}</ul></li>`
            }
        } 
        map.fitBounds(markArray);
        p.innerHTML = `Version: ${version}<br>Number of: ${numberOf}` + ul
    }
}

function showAllMarkers() {
    let mark = [];
    for (let i = 0; i < a.length; i++) {
        
        markers[`${a[i].lat}, ${a[i].lon}`].addTo(map);
        mark[i] = {lat: a[i].lat, lon: a[i].lon}
    } 

    map.fitBounds(mark);
    p.innerHTML = ``
}

function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    if (bytes === 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes} ${sizes[i]}`
    return `${(bytes / (1024 ** i)).toFixed(2)} ${sizes[i]}`
}




