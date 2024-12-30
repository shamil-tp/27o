
const person=[
    {
        id:'002',
        first:'shamil',
        last:'tp',
        handle:'@shamiltp',
        role:'main'
    },
    {
        id:'016',
        first:'muhammed',
        last:'fasil',
        handle:'@muhammedfasil',
        role:'top'
    },
    {
        id:'073',
        first:'muhammed',
        last:'yaseen',
        handle:'@muhammedyaseen',
        role:'top'
    },
]
let box= document.getElementById('box')
let personList = person
function create(i){
    return `
        <tr>
            <th scope="row">${i.id}</th>
            <td>${i.first}</td>
            <td>${i.last}</td>
            <td>${i.handle}</td>
        </tr>
    `
}
function render(){
    box.innerHTML=''
    personList.forEach((pl)=>{
        box.innerHTML+=create(pl)
    })
    console.log(box)
    return box
}
function change(a){
    switch (a) {
        case 'all': personList=person;return render();break;
        case 'main':personList=person.filter((p)=>p.role == 'main');return render();break;
        case 'top':personList=person.filter((p)=>p.role == 'top');return render();break;
        default:render();break;
    }
}
render()