function storecarinfo(manufacture: string, modelName: string, ...extraOption:{ [key:string]: any}[] ): object {

  const carinfo = {
    manufacture,
    modelName,
    ...Object.assign({},...extraOption)
  }
return carinfo;
};

let answer = storecarinfo('Honda','civic',{colour:'black'}, {features:['Navigation','power window']})

console.log(answer);
