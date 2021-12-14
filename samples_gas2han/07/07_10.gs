function myFunction07_10_02() {
  const obj = [
    {"name": "Bob", "favorite": ["apple", "curry", "video game"]},
    {"name": "Tom", "favorite": ["orange", "ramen", "programming"]},
    {"name": "Jay", "favorite": ["grape", "sushi", "shogi"]}
  ];

  console.log(JSON.stringify(obj));
}

function myFunction07_10_03() {
  let str = '[';
  str += '{"name": "Bob", "favorite": ["apple", "curry", "video game"]},';
  str += '{"name": "Tom", "favorite": ["orange", "ramen", "programming"]},';
  str += '{"name": "Jay", "favorite": ["grape", "sushi", "shogi"]}';
  str += ']';

  const persons = JSON.parse(str);
  
  console.log(persons[0].name); //Bob
  console.log(persons[1].favorite[2]); //programming
  
  const {name, favorite} = persons[2];
  console.log(name, favorite); //Jay ['grape', 'sushi', 'shogi']
}

