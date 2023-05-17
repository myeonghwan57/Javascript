let n = 'name';
let a = 'age';

const user = {
  [n] : 'Mike',
  [a] : 30,

};

function makeObj(key, val){
  return{
    [key] : val,
  };
}

const obj = makeObj('성별', 'male');