const cvs = document.querySelector('canvas')
const ctx = cvs.getContext('2d')

const unit_length = 40
let size_const = 15 
let width_cvs = unit_length * size_const
let height_cvs = unit_length * size_const

cvs.width = width_cvs
cvs.height = height_cvs
// changeable mutiples 

ctx.rect(100,100,100,100)
ctx.stroke()
//x,y, width, height