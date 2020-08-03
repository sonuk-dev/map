
// ---------------- Map

let map = L.map('map').setView({lon: 0, lat: 30},3);
let options = {
    noWrap: true,
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
};

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', options).addTo(map);

map.setMinZoom(3)

let southWest = L.latLng(-89.98155760646617, -180),
    northEast = L.latLng(89.99346179538875, 180),
    bounds = L.latLngBounds([-89.98155760646617, -180], [89.99346179538875, 180]);
    
map.setMaxBounds(bounds);

map.on('drag', function() {
        map.panInsideBounds(bounds, { animate: false });
    });

// Request for data
function loadJSON(path, success) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {

                try {
                    success( JSON.parse('[' + xhr.responseText.replace(/,(?=[^,]*$)/, '') + ']') )
                } catch (error) {
                    console.error(error)
                    success( JSON.parse('[' + xhr.responseText + ']') )
                    
                }

            } else {
                console.log('error')
            }
        }
    };

    xhr.open('GET', path, true);
    xhr.send();
}

loadJSON('https://gist.githubusercontent.com/kofemann/5a7e69c21ec7004128c2ca7ce3bd3a62/raw/f6726553d7c327bbacf0a0363de2f3bba0235227/dcache-map.json', glob);

function glob(a) {
   // ----------------------Markers
   let markers = {};
    let loop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61];

    loop.forEach((j) => {
        let str = ``;
        str += `<strong>${a[j].loc}</strong><br>${a[j].desc}<br><ul><li><strong>Version</strong>: ${a[j].version}<br><strong>Name:</strong> ${a[j].name}<br><strong>Size:</strong> ${mbytesToSize(a[j].size)}</li>`
    
        for (let index = j + 1 ; index < a.length; index++) {
            if (a[j].lon === a[index].lon && a[j].lat === a[index].lat && a[j] !==a[index]) {
                str += `<li><strong>Version</strong>: ${a[index].version}<br><strong>Name:</strong> ${a[index].name}<br><strong>Size:</strong> ${mbytesToSize(a[index].size)}</li>`;
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
    const width = 380; //400
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
    const color = d3.scaleOrdinal().range(["#003f5c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#FEAE65", '#64C2A6', '#2D87BB', "#2f4b7c"]);
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
                .text(d =>{ return d.data.name.length > 10 ? d.data.name.slice(0, 8) : d.data.name} );

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

    // Onclick function for the chart
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
                markArray = [];
                
            for (let i = 0; i < a.length; i++) {
            
                if ( a[i].version.startsWith(version) ) {
            
                    markers[`${a[i].lat}, ${a[i].lon}`].addTo(map);
                    markArray[i] = {lat: a[i].lat, lon: a[i].lon};
                }
            } 
            map.fitBounds(markArray ,{padding:[50, 50]});
        }
    }

    // Shows all markers
    function showAllMarkers() {
        let mark = [];
        for (let i = 0; i < a.length; i++) {
            
            markers[`${a[i].lat}, ${a[i].lon}`].addTo(map);
            mark[i] = {lat: a[i].lat, lon: a[i].lon}
        } 
        map.fitBounds(mark);
    }


    function mbytesToSize(bytes) {
        return bytesToSize(bytes*Math.pow(1000, 3));
    }

    function bytesToSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        if (bytes === 0) return 'n/a'
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)), 10)
        if (i === 0) return `${bytes} ${sizes[i]}`
        return `${(bytes / (1000 ** i)).toFixed(2)} ${sizes[i]}`
    }

    // Data for the table
    let used = 0, size = 0 , avsiz = 0 ;

    for (let i = 0; i < a.length; i++) {
        used += +a[i].used ;
        size += +a[i].size ;    
    }
    avsiz = size - used ;

    document.querySelector('[data-title="total"]').textContent = a.length;
    let us = document.querySelector('[data-title="used"]').textContent = mbytesToSize(used);
    document.querySelector('[data-title="availablesize"]').textContent = mbytesToSize(avsiz);
    document.querySelector('[data-title="size"]').textContent = mbytesToSize(size);

    // Media Screen
    function screen1000(x) {
        if (x.matches) { 
            map.setMinZoom(2)
            map.setView({lon: 0, lat: 30}, 2)
        } else {
            map.setMinZoom(3);
            map.setView({lon: 0, lat: 30}, 3)
        }
    }
    
    let x = window.matchMedia("(max-width: 1000px)");
    let y = window.matchMedia("(max-width: 500px)");

    screen1000(x) 
    x.addListener(screen1000);

    screen500(y);
    y.addListener(screen500)

    function screen500(y) {
        if (y.matches) { 
            map.setMinZoom(1)
            map.setView({lon: 0, lat: 30}, 1)
        } else {
            screen1000(x)
        }
    }

    let bot = document.querySelector('.bot');
    let inf = document.querySelector('.inf');

    bot.onclick = function() {

        if (getComputedStyle(inf).display =='none') {
            inf.style.display = 'block';
        } else {
            inf.style.display = 'none';
        }
    }

}




