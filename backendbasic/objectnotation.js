// JSON conversions:


let product={
    "pro_id":12321,
    "pro_name":"HP Pavilion",
    "pro_price":67899.4,
    "pro_color":'Silver'
}

product=JSON.stringify(product)

console.log(product.pro_id+" "+product['pro_price'])

let laptop='{"model":"Dell Vostro","ram":16,"ssd":256}'
laptop=JSON.parse(laptop)

console.log(laptop.model)