const geocode = (address, callback) => {
    setTimeout(() => {
    const data = {
    latitude: 0,
    longitude: 0
    }
    callback(data)
    }, 2000)
   }
   geocode('Philadelphia', (data) => {
    console.log(data)
   })


   const user = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
   }
   // The line below uses destructuring
   const { age, location:address } = user
   console.log(age)
   console.log(address)

   const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
   }
   const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
   }
   transaction('order', product)