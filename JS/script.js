function criador() {
    document.getElementById("criador").src = "SRC/Images/image1.jpg";
}

function logo() {
    document.getElementById("criador").src = "SRC/Images/image13.jpg";
}


const c = document.getElementById("c")
const x = c.getContext("2d")
c.width = window.innerWidth
c.height = window.innerHeight
const cols = Math.floor(c.width / 20) + 1
const ypos = Array(cols).fill(0)


function matrix() {
    x.fillStyle = "#0001"
    x.fillRect(0, 0, c.width, c.height)
    x.fillStyle = "#4f46e5"
    x.font = "15pt monospace"
    ypos.forEach((y, i) => {
        const codigos = ["<>",",","#","=","/",";","+","-","$","%","if","else","for",":","&","@","!","||","==","while","()","const","let","var"]
        const text = codigos[(Math.floor(Math.random()*codigos.length))] //String.fromCharCode(Math.random() * 128)
        x.fillText(text, i * 20, y)
        if (y > 100 + Math.random() * 10000) {
            ypos[i] = 0

        } else {
            ypos[i] = y + 20
        }
    })
}

setInterval(matrix,100)