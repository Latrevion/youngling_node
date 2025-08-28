const nature = (callback:(data:string)=>void) =>{
  const data = 'flower'
  callback(data)
}

nature(data=>{
  console.log(data);
})