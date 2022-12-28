const getRandomInt = (max = 3) => Math.floor(Math.random() * max); // 0-2

const play = (changeDoor = false) => {
    const doors = Array.from({ length: 3 }, (v, i) => i); // [0, 1, 2]
    const choosenDoor = getRandomInt();
    const doorWithCar = getRandomInt();
    const openedDoorWithoutCar = doors.find(
        (door) => door !== choosenDoor && door !== doorWithCar
    );

    if (!changeDoor) {
        return choosenDoor === doorWithCar;
    }

    return (
        doorWithCar ===
        doors.find(
            (door) => door !== choosenDoor && door !== openedDoorWithoutCar
        )
    );
};

const runSimulation = (changeDoor = false, repeats = 1000) => {
    let win = 0;

    for (let index = 0; index < repeats; index++) {
        win += play(changeDoor);
    }

    return `Win rate is ${((win / repeats) * 100).toFixed(1)}% if you${
        changeDoor ? '' : " don't"
    } change a door.`;
};

console.log(runSimulation());
console.log(runSimulation(true));
