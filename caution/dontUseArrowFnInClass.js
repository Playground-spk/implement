class TryUseArrow {
  constructor(name) {
    this.name = name;
  }

  PrintName = () => {
    console.log(this.name);
  };
}

const john = new TryUseArrow("john");

john.PrintName();

let tare = { name: "tare" };

tare.PrintName = john.PrintName;
tare.PrintName();

class TryUseRegular {
  constructor(name) {
    this.name = name;
  }

  PrintName() {
    console.log(this.name);
  }
}

let sarah = new TryUseRegular('sarah');

let sophee = {name: 'sophee'};
sophee.PrintName = sarah.PrintName;

sarah.PrintName()
sophee.PrintName()
