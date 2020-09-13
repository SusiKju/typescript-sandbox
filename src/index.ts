document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;
export class Author {

    name: string;
    birthday: Date;
    address: string;

    constructor(public nameIn: string, public birthdayIn: Date, public addressIn: string) {
        this.name = nameIn;
        this.birthday = birthdayIn;
        this.address = addressIn;
    }
    toString(): String {
        return "Name: " + this.name + ", Geburtstag: " + this.birthday + ", Adresse: " + this.address;
    }
}

const myPerson = new Author('Dirk', new Date(), 'Serko.');
 
console.log(myPerson.toString());
document.getElementById("app").innerHTML = myPerson.toString();